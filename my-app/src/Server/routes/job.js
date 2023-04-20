const db = require('../database');
const { sendResponse } = require("../helpers/response");
const { getReqData } = require("../helpers/utils");

module.exports = {
    async addJob(req, res){
        const bodyData = await getReqData(req);
        const jobJSON = JSON.parse(bodyData);  
        const job_name = jobJSON.job_name;
        const job_ride = jobJSON.job_ride;
        const job_concession = jobJSON.job_concession;
        const job_giftshop = jobJSON.job_giftshop;
        const job_date = jobJSON.job_date;

        const query = 'INSERT INTO master. (`job_code`, `job_name`, `job_concession`, `job_giftshop`, `job_date`, `job_completed`) VALUES (null, ?, ?, ?, ?, FALSE);'

        try{
            const [rows, fields] = await db.promise().execute(query, [job_name, job_ride, job_concession, job_giftshop, job_date])
            return sendResponse(req, res, 200, "Job Added", rows);
        } catch (err) {
            return sendResponse(req, res, 500, "Invalid input")
        }
    },
    async getJob(req, res) {
        const bodyData = await getReqData(req);
        const jobJSON = JSON.parse(bodyData);  
        const email = jobJSON.email;

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

    }
}