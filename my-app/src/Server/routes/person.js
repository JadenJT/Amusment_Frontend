const db = require('../database');

const responseMessage = require('../helpers/response');
const { getReqData } = require('../helpers/utils');

async function checkPersonExist(person_email) {
    const [rows, fields] = await db.promise().execute(
        'SELECT * FROM person WHERE email = ?', [person_email]
    )
    if(rows.length < 1) return false;
    return true;
}

async function checkLoginInfo(email, password) {
    const [rows, fields] = await db.promise().execute(
        'SELECT password FROM person WHERE email = ?', [email]
    )
    if (rows.length === 0) return false;
    if (rows[0].password !== password) return false;
    return true;
}   

module.exports = {
    async postPerson(req, res){
        const bodyData = await getReqData(req);
        const newPerson = JSON.parse(bodyData);

        const queryData = [null, newPerson.f_name, newPerson.m_name, newPerson.l_name, newPerson.phone_number, newPerson.email, newPerson.password];

        if (await checkPersonExist(newPerson.email)) return responseMessage.sendResponse(req, res, 403, "Person already exist.");
        db.query(
        'INSERT INTO person(person_id, f_name, m_init, l_name, phone_number, email, password) VALUES (?);', [queryData],
        function(err, result) {
            if(err) return responseMessage.sendResponse(req, res, 500, `Database error! ${err}`)
            return responseMessage.sendResponse(req, res, 201, "Person added to database.", newPerson)
            }
        )   
    },

    async postLogin(req, res) {
        const bodyData = await getReqData(req);
        const attemptLogin = JSON.parse(bodyData);

        if(!await checkLoginInfo(attemptLogin.email, attemptLogin.password)) return responseMessage.sendResponse(req, res, 401, "Incorrect email or password!")

        responseMessage.sendResponse(req, res, 200, "Logged in")

    }
}
