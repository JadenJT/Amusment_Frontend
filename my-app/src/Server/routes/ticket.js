const db = require('../database');
const { sendResponse } = require("../helpers/response");
const { getReqData } = require("../helpers/utils");

module.exports = {
    async buyTicket(req, res) {
        const bodyData = await getReqData(req);
        const ticketJSON = JSON.parse(bodyData);
        const ticketList = ticketJSON.ticket;

        const brokenTickets = [];
        const inputtedTicket = [];


        for (const values of ticketList) {
            var price = (values.type == "Adult") ? 30 : 17;
            let query = `INSERT INTO ticket(\`ticket_id\`, \`date\`, \`price\`, \`ride_id\`, \`customer_email\`) VALUES (NULL, '${values.dateTime}', ${price}, ${values.ride_id}, '${values.email}');`
            const [row, field] = await db.promise().execute(`SELECT name FROM master.ride WHERE ride_id = ${values.ride_id}`);
            const ride_name = row[0].name;

            try {
                const [rows2, fields2] = await db.promise().execute(query)
                inputtedTicket.push(rows2.insertId)
            } catch (err) {
                brokenTickets.push({
                    "ride_name": ride_name,
                    "dateTime": values.dateTime,
                    "error": err.sqlState
                })
                if (err.sqlState == '45000') {
                    const [row, field] = await db.promise().execute(`SELECT * FROM master.job WHERE job_ride = '${ride_name}';`)
                    if (row.length === 0) {
                        insertJob = `INSERT INTO master.job(\`job_code\`, \`job_name\`, \`job_ride\`, \`job_concession\`, \`job_giftshop\`, \`job_date\`, \`job_completed\`, \`worker\`, \`job_date_completed\`) VALUES (NULL,'maintenance', '${ride_name}', null, null, (DATE_ADD(CURDATE(), INTERVAL 3 DAY)), FALSE, NULL, NULL);`;
                        await db.promise().execute(insertJob);
                    }
                }
            }
        }
        if (brokenTickets.length !== 0) {
            for (const ticket_id of inputtedTicket) {
                await db.promise().execute(`DELETE FROM master.ticket WHERE ticket_id = ${ticket_id}`)
            }
        } else {
            return sendResponse(req, res, 201, "Tickets Added")
        }
        return sendResponse(req, res, 409, "Tickets revoked", brokenTickets)
    },

    async ticketsOwn(req, res) {
        const bodyData = await getReqData(req);
        const customerJSON = JSON.parse(bodyData);
        const customer_email = customerJSON.customer_email;

        const [rows, fields] = await db.promise().execute(
            'SELECT * FROM ticket WHERE customer_id = ?', [customer_id])
        return sendResponse(req, res, 200, `Customer Tickets Fetched`, rows);
    },
    /*
        GET Data Example
        {
            "ride_id": 1,
            "ride_name": "SkyBlade",
            "zone": "a",
            "ride_type": 30,
            "start_date": "2023-04-01 08:00:00",
            "end_date": "2023-04-02 12:00:00"
        }
    */
    async ticketReport(req, res) {
        const bodyData = await getReqData(req);
        const ticketJSON = JSON.parse(bodyData);
        const ride_name = ticketJSON.ride_name;
        const zone = ticketJSON.zone;
        let ride_type = ticketJSON.ride_type;
        const start_date = ticketJSON.start_date;
        const end_date = ticketJSON.end_date;
        const price = (ride_type == "Adult") ? 30 : 17;

        if (ride_name !== null) {
            const [row, fields] = await db.promise().execute(
                `SELECT ride_id FROM master.ride WHERE name = '${ride_name}'`
            );
            var ride_id = row[0].ride_id;
        }

        let query = 'SELECT RIDE.name AS Ride_Name, RIDE.zone_id AS Ride_Zone, TIK.price AS Ticket_Amount, TIK.date AS Date_Recorded FROM master.ride as RIDE, master.ticket AS TIK WHERE RIDE.ride_id = TIK.ride_id ';

        if (ride_name != null) query += `AND RIDE.ride_id = ${ride_id} `
        if (zone != null) query += `AND RIDE.zone_id = '${zone}' `
        if (ride_type != null) query += `AND TIK.price = ${price} `
        if (start_date != null && end_date != null) query += `AND TIK.date BETWEEN '${start_date}' AND '${end_date}' `

        query += ';'

        const [row, fields] = await db.promise().execute(query);
        return sendResponse(req, res, 200, `Ticket report gathered.`, row)
    }
}