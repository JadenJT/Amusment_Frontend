const db = require('../database');
const { sendResponse } = require("../helpers/response");
const { getReqData } = require("../helpers/utils")

async function checkEmployeeExist(person_email) {
    const [rows, fields] = await db.promise().execute(
        'SELECT * FROM master.employee WHERE email = ?', [person_email])
    if (rows.length < 1) return false;
    return true;
}

async function checkEmailExist(person_email) {
    const [rows, fields] = await db.promise().execute(
        'SELECT * FROM master.person WHERE email = ?', [person_email])
    if (rows.length < 1) return false;
    return true;
}

async function checkEmployeeExistID(employee_id) {
    const [rows, fields] = await db.promise().execute(
        'SELECT * FROM master.employee WHERE employee_id = ?', [employee_id])
    if (rows.length < 1) return false;
    return true;
}

module.exports = {
    /*
        GET Data Example
        {
            "f_name": "John",
            "l_name": "Cox",
            "job_location": "SkyBlade",
            "job_role": "Admin",
            "email": "john.cox1@gmail.com"
        }
    */
    async employeeReport(req, res) {
        const bodyData = await getReqData(req);
        const employeeJSON = JSON.parse(bodyData);
        const f_name = employeeJSON.f_name;
        const l_name = employeeJSON.l_name;
        const location = employeeJSON.job_location;
        const job_type = employeeJSON.job_role;
        const email = employeeJSON.email;

        let query = `SELECT CONCAT(PER.f_name, ' ', PER.l_name) AS Name, JOB.job_name AS Job_Role, CONCAT(COALESCE(JOB.job_ride, ''), COALESCE(JOB.job_concession, ''), COALESCE(JOB.job_giftshop, '')) AS Location, PER.email AS contact_email, PER.phone_number AS Phone_number FROM master.person AS PER, master.job AS JOB WHERE CONCAT(PER.f_name, ' ', PER.l_name) = JOB.worker `

        if (f_name != null) query += `AND PER.f_name = '${f_name}' `
        if (l_name != null) query += `AND PER.l_name = '${l_name}' `
        if (location != null) query += `AND (JOB.job_ride = '${location}' OR JOB.job_concession = '${location}' OR JOB.job_giftshop = '${location}') `
        if (job_type != null) query += `AND JOB.job_name = '${job_type}' `
        if (email != null) query += `AND PER.email = '${email}' `

        query += ';'

        const [row, fields] = await db.promise().execute(query);
        return sendResponse(req, res, 200, `Employee report gathered.`, row)
    },

    /*
        POST data example:
            {
                "work_code": 30,
                "address": "2738 Mickey St Houston Tx 77489",
                "email": "devin01@hotmail.com",
                "ssn": "942758293",
                "b_date": "2003-07-23"
            }
    */
    async addEmployee(req, res) {
        const bodyData = await getReqData(req);
<<<<<<< HEAD
        const employeeJSON = JSON.parse(bodyData);  
=======
        const employeeJSON = JSON.parse(bodyData);
        const work_code = employeeJSON.work_code;
>>>>>>> e59286d794671747c76dd5b102ab8d8f60f26d26
        const address = employeeJSON.address;
        const email = employeeJSON.email;
        const ssn = employeeJSON.ssn;
        const b_date = employeeJSON.b_date;

        let query = 'INSERT INTO master.employee(`employee_id`, `address`, `email`, `ssn`, `b_date`, active) VALUES (?, ?, ?, ?, ?, ?);'

        if (await checkEmailExist(email)) return sendResponse(req, res, 409, `Email does not exist.`)
        if (await checkEmployeeExist(email)) return sendResponse(req, res, 409, `Person already exist.`)

        const [row, fields] = await db.promise().execute(query, [null, address, email, ssn, b_date, true]);
        const [job_row, job_field] = await db.promise().execute('SELECT JOB.job_name FROM master.job AS JOB WHERE job_code = ?;', [work_code])

        const job_name = job_row[0].job_name;
        const personQuery = `UPDATE master.person SET role_type = '${job_name}' WHERE email = '${email}'`

        await db.promise().execute(personQuery)

        return sendResponse(req, res, 200, `Employee Added`, row);
    },
    /*
        PUT date example:
        {
            "employee_id": 3,
            "email": "john.cox2@gmail.com",
            "work_code": null,
            "address": "7777 Smith St Houston Tx 77002"
        }
    */
    async updateEmployee(req, res) {
        const bodyData = await getReqData(req);
        const employeeJSON = JSON.parse(bodyData);
        const email = employeeJSON.email;
        const phone_number = employeeJSON.phone_number;
        const address = employeeJSON.address;
        if (address === null && phone_number === null) return sendResponse(req, res, 500, "No info inputted")

        let query = `UPDATE master.employee SET `

        if (address != null) {
            query += `UPDATE master.employee SET address = '${address}' WHERE email = '${email}';`
            await db.promise().execute(query);
        }
        if (phone_number != null) {
            await db.promise().execute(
                `UPDATE master.person SET phone_number = ${phone_number} WHERE email = '${email}';`
            )
        }
        return sendResponse(req, res, 200, `Employee Updated`);
    },

    /*
        REMOVE data example:
        {
            "email": "john.cox1@gmail.com",
            "employee_id": 74
        }
    */
    async removeEmployee(req, res) {
        const bodyData = await getReqData(req);
        const employeeJSON = JSON.parse(bodyData);
        const email = employeeJSON.email;


        if (email == null) return sendResponse(req, res, 409, "Missing information")
        if (!await checkEmployeeExist(email)) return sendResponse(req, res, 409, "Employee does not exist with both credentials")

        const personQuery = `UPDATE master.person AS PER JOIN master.employee AS EMP ON PER.email = EMP.email SET PER.role_type = 'customer' WHERE EMP.email = '${email}';`
        await db.promise().execute(personQuery);

        query = `UPDATE master.employee SET active = FALSE WHERE email = '${email}';`
        await db.promise().execute(query);

        return sendResponse(req, res, 200, "Employee removed");

    },
    async getAllEmployees(req, res) {
        const [rows, fields] = await db.promise().execute(`SELECT CONCAT(PER.f_name, ' ', PER.l_name) AS Name, EMP.* FROM master.employee AS EMP, master.person AS PER WHERE EMP.email = PER.email;`)
        return sendResponse(req, res, 200, "Employees Fetched", rows)

    }
}