const db = require('../database');
const { sendResponse } = require("../helpers/response");
const { getReqData } = require("../helpers/utils")

module.exports = {
    /*
        POST Data Example: 
        {
            "customer_email"
        }
    */
    async buyTicket(req, res) {

        const bodyData = await getReqData(req);
        const newTicket = JSON.parse(bodyData);

        // const dateTime = new Date(); //This is only for testing purposes! Do NOT deploy to live site. 
        const queryData = [null, dateTime, newTicket.price, newTicket.ride_id, newTicket.email];

        db.query(
            'INSERT INTO ticket(ticket_id, date, price, ride_id, email) VALUES (?);', [queryData],
            function (err, result) {
                if (err) return sendResponse(req, res, 500, `Database error`, err);
                return sendResponse(req, res, 201, `Ticket added to customer ID: ${newTicket.customer_id}`, newTicket);
            }
        )
    },

    /*
        POST Data Example: 
        {
            "ticket_id": 3
        }
    */
    async removeTicket(req, res) {
        const bodyData = await getReqData(req);
        const newTicket = JSON.parse(bodyData);

        const [row, fields] = await db.promise().execute(
            'DELETE FROM ticket WHERE ticket_id = ?', [newTicket.ticket_id])

        if (row.length === 0) return sendResponse(req, res, 404, "ticket_id not found")
        return sendResponse(req, res, 200, `Ticket ID: ${newTicket.ticket_id} removed`)
    },

    /*
        POST Data Example: 
        {
            "customer_email": "john.cox1@gmail.com"
        }
    */
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
        const ride_id = ticketJSON.ride_id;
        const ride_name = ticketJSON.ride_name;
        const zone = ticketJSON.zone;
        const ride_type = ticketJSON.ride_type;
        const start_date = ticketJSON.start_date;
        const end_date = ticketJSON.end_date;

        let query = 'SELECT RIDE.name AS Ride_Name, RIDE.zone_id AS Ride_Zone, TIK.price AS Ticket_Amount, TIK.date AS Date_Recorded FROM master.ride as RIDE, master.ticket AS TIK WHERE RIDE.ride_id = TIK.ride_id ';

        if (ride_id != null) query += `AND RIDE.ride_id = ${ride_id} `
        if (ride_name != null) query += `AND RIDE.name = '${ride_name}' `
        if (zone != null) query += `AND RIDE.zone_i = '${zone}' `
        if (ride_type != null) query += `AND TIK.price = ${ride_type} `
        if (start_date != null && end_date != null) query += `AND TIK.date BETWEEN '${start_date}' AND '${end_date}' `

        query += ';'

        const [row, fields] = await db.promise().execute(query);
        return sendResponse(req, res, 200, `Ticket report gathered.`, row)
    }
}