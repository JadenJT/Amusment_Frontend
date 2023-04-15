const db = require('../database');
const { sendResponse } = require("../helpers/response");
const { getReqData } = require("../helpers/utils")

module.exports = {
    /*
        GET Data Example
        {
            "job_code": 1,
            "ride_name": "SkyBlade",
            "zone": "a",
            "start_date": "2023-04-01 08:00:00",
            "end_date": "2023-04-02 12:00:00"
        }
    */
    async maintenanceReport (req, res) {
        const bodyData = await getReqData(req);
        const ticketJSON = JSON.parse(bodyData);
        const job_code = ticketJSON.job_code
        const ride_name = ticketJSON.ride_name;
        const zone = ticketJSON.zone;
        const start_date = ticketJSON.start_date;
        const end_date = ticketJSON.end_date;

        let query = `SELECT EMP.work_code AS job_code, RIDE.zone_id AS Zone, JOB.job_ride AS Ride, CONCAT(PER.f_name, ' ', PER.l_name) AS full_name, JOB.job_date as Scheduled_Date, EMP.email as Email_Contact FROM master.person AS PER, master.job AS JOB, master.employee as EMP, master.ride AS RIDE WHERE PER.email = EMP.email AND JOB.job_code = EMP.work_code AND RIDE.name = JOB.job_ride `;

        if (job_code != null) query += `AND EMP.work_code = ${job_code} `
        if (ride_name != null) query += `AND Job.job_ride = '${ride_name}' `
        if (zone != null) query += `AND RIDE.zone_id = '${zone}' `
        if (start_date != null && end_date != null) query += `AND JOB.job_date BETWEEN '${start_date}' AND '${end_date}' ` 
        
        query += ';'
        
        const [row, fields] = await db.promise().execute(query);
        return sendResponse(req, res, 200, `Ticket report gathered.`, row)
    }
}