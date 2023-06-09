const db = require('../database');
const { generateToken } = require('../auth/authToken');
const { getReqData } = require('../helpers/utils');
const { sendResponse } = require("../helpers/response");

async function checkPersonExist(person_email) {
    const [rows, fields] = await db.promise().execute(
        'SELECT * FROM person WHERE email = ?', [person_email])
    if (rows.length < 1) return false;
    return true;
}

async function checkLoginInfo(email, password) {
    const [rows, fields] = await db.promise().execute(
        'SELECT password FROM person WHERE email = ?', [email])
    if (rows.length === 0) return false;
    if (rows[0].password !== password) return false;
    return true;
}

module.exports = {
    /*
        POST Data Example: 
        {
            "f_name": "john",
            "m_name": "l", 
            "l_name": "cox",
            "phone_number": "9998887777",
            "email": "john.cox@gmail.com",
            "password": "password123"
        }
    */
    async register(req, res) {
        const bodyData = await getReqData(req);
        const newPerson = JSON.parse(bodyData);

        const queryData = [null, newPerson.f_name, newPerson.m_name, newPerson.l_name, newPerson.phone_number, newPerson.email, newPerson.password];

        if (await checkPersonExist(newPerson.email)) return sendResponse(req, res, 409, "Person already exist");
        db.query(
            'INSERT INTO person(person_id, f_name, m_init, l_name, phone_number, email, password) VALUES (?);', [queryData],
            async function (err, result) {
                if (err) return sendResponse(req, res, 500, `User already exist`)
                const token = await generateToken({ email: bodyData.email });
                return sendResponse(req, res, 201, "Person added to database", token)
            }
        )
    },
    /*
        POST Data Example: 
        {
            "email: "john.cox@gmail.com",
            "password": "password123"
        }
    */
    async login(req, res) {
        const bodyData = await getReqData(req);
        const attemptLogin = JSON.parse(bodyData);

        if (!await checkLoginInfo(attemptLogin.email, attemptLogin.password)) return sendResponse(req, res, 401, "Incorrect email or password!")

        const token = await generateToken({ email: attemptLogin.email });
        const [rows, fields] = await db.promise().execute(
            'SELECT PER.f_name, PER.role_type FROM master.person AS PER WHERE email = ?;', [attemptLogin.email])

        const personInfo = {
            f_name: rows[0].f_name,
            role_type: rows[0].role_type,
            token: token,
        }
        return sendResponse(req, res, 200, "Logged in", personInfo)
    },

    async getAllPerson(req, res) {
        const [rows, fields] = await db.promise().execute(`SELECT CONCAT(f_name, ' ', l_name) AS Name, role_type FROM master.person WHERE role_type != 'customer';`);
        return sendResponse(req, res, 200, "Got Persons", rows);
    }
}
