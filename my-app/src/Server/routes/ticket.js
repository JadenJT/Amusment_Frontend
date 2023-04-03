const db = require('../database');
const { sendResponse } = require("../helpers/response");
const { getReqData } = require("../helpers/utils")

module.exports = {
    /*
        POST Data Example: 
        {
            "dateTime": Date()
        }
    */
    async postTicket(req, res) {

        const bodyData = await getReqData(req);
        const newTicket = JSON.parse(bodyData);

        // const dateTime = new Date(); //This is only for testing purposes! Do NOT deploy to live site. 
        const queryData = [null, dateTime, newTicket.price, newTicket.ride_id, newTicket.customer_id];

        db.query(
            'INSERT INTO ticket(ticket_id, date, price, ride_id, customer_id) VALUES (?);', [queryData],
            function(err, result) {
                if(err) return sendResponse(req, res, 500, `Database error`, err);
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
    async deleteTicket(req, res){
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
            "customer_id": 8
        }
    */
    async getTicketCustomer(req, res){
        const bodyData = await getReqData(req);
        const customerJSON = JSON.parse(bodyData);
        const customer_id = customerJSON.customer_id;

        const [rows, fields] = await db.promise().execute(
            'SELECT * FROM ticket WHERE customer_id = ?', [customer_id])
        return sendResponse(req, res, 200, `Customer ID: ${customer_id} Ticket fetched`, rows);
    },

    /*
        POST Data Example: 
        {
            "ride_id": 11
        }
    */
    async getTicketRides(req, res){
        const bodyData = await getReqData(req);
        const customerJSON = JSON.parse(bodyData);
        const ride_id = customerJSON.ride_id;

        const [rows, fields] = await db.promise().execute(
            'SELECT * FROM ticket WHERE ride_id = ?', [ride_id])
        return sendResponse(req, res, 200, `Ride ID: ${ride_id} Ticket fetched`, rows);
    }
}