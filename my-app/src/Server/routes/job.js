const db = require('../database');
const { sendResponse } = require("../helpers/response");
const { getReqData } = require("../helpers/utils");
const url = require('url');
const querystring = require('querystring');

module.exports = {
    async getJob(req, res) {
        const parsedURL = url.parse(req.url)
        const urlParams = querystring.parse(parsedURL.query)
        const email = urlParams.email;

        const query = `SELECT J.* FROM master.job AS J, master.person as P WHERE J.job_completed = FALSE AND (CONCAT(P.f_name, ' ', l_name)) = J.worker AND P.email = ?;`

        const [rows, fields] = await db.promise().execute(query, [email])

        return sendResponse(req, res, 200, "Jobs listed", rows)
    },

    async markJobdone(req, res) {
        const bodyData = await getReqData(req);
        const jobJSON = JSON.parse(bodyData); 
        const work_code = jobJSON.work_code;

        const query = `UPDATE master.job SET job_completed = TRUE, job_date_completed = (current_timestamp()) WHERE job_code = ?`

        const [rows, fields] = await db.promise().execute(query, [work_code])

        return sendResponse(req, res, 200, "Job completed!", rows)

    },
    async getAllMaintenanceJob(req, res) {
        const [rows, fields] = await db.promise().execute('SELECT job_ride FROM master.job where worker is NULL;')
        sendResponse(req, res, 200, "Fetched Empty Maintenance", rows)
    },

    async addJob(req, res) {
        const bodyData = await getReqData(req);
        const jobJSON = JSON.parse(bodyData); 
        const jobLocation = jobJSON.jobLocation;
        const jobAttraction = jobJSON.jobAttraction;
        const jobRole = jobJSON.jobRole;
        const jobPerson = jobJSON.jobPerson;

        //Check the type
        if (jobLocation === 'ride') {
            //Check if job exist
            const [row, fields] = await db.promise().execute(`SELECT * FROM master.job where worker = '${jobPerson}' AND job_ride = '${jobAttraction}';`)
            if (row.length !== 0) {
                return sendResponse(req, res, 409, "User already exist with that job");
            }
            db.promise().execute(`INSERT UPDATE worker = '${jobPerson}' WHERE job_ride = '${jobAttraction}';`)

        } else if (jobLocation === 'concession') {
            const [row, fields] = await db.promise().execute(`SELECT * FROM master.job where worker = '${jobPerson}' AND job_concession = '${jobAttraction}';`)
            if (row.length !== 0) {
                return sendResponse(req, res, 409, "User already exist with that job");
            }
            insertQuery = `INSERT INTO master.job(\`job_code\`, \`job_name\`, \`job_ride\`, \`job_concession\`, \`job_giftshop\`, \`job_date\`, \`job_completed\`, \`worker\`, \`job_date_completed\`) VALUES (NULL,'maintenance', '${ride_name}', null, null, (DATE_ADD(CURDATE(), INTERVAL 3 DAY)), FALSE, NULL, NULL);`
            db.promise().execute(`INSERT `)

        } else if (jobLocation === 'giftshop') {
            const [row, fields] = await db.promise().execute(`SELECT * FROM master.job where worker = '${jobPerson}' AND job_giftshop = '${jobAttraction}';`)
            if (row.length !== 0) {
                return sendResponse(req, res, 409, "User already exist with that job");
            }
            insertQuery = `INSERT INTO master.job(\`job_code\`, \`job_name\`, \`job_ride\`, \`job_concession\`, \`job_giftshop\`, \`job_date\`, \`job_completed\`, \`worker\`, \`job_date_completed\`) VALUES (NULL,'maintenance', '${ride_name}', null, null, (DATE_ADD(CURDATE(), INTERVAL 3 DAY)), FALSE, NULL, NULL);`
            db.promise().execute(`INSERT UPDATE worker = '${jobPerson}' WHERE job_ride = '${jobAttraction}';`)
        }
    }
}