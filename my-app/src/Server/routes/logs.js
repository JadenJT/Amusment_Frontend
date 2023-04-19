const db = require('../database');
const { sendResponse } = require("../helpers/response");
const { getReqData } = require("../helpers/utils");

module.exports = {
    async addIncident(req, res){
        const bodyData = await getReqData(req);
        const incidentJSON = JSON.parse(bodyData);  
        const email = incidentJSON.email 
        const description = incidentJSON.description
        const date = incidentJSON.date

        const query = 'INSERT INTO master.incident (`id`, `email`, `description`, `date`) VALUES (null, ?, ?, ?);'

        try{
            const [rows, fields] = await db.promise().execute(query, [email, description, date])
            return sendResponse(req, res, 200, "Incident Reported", rows);
        } catch (err) {
            return sendResponse(req, res, 500, "Invalid email")
        }
    },

    async getIncident(req, res){
        const query = 'SELECT * FROM master.incident ORDER BY id DESC LIMIT 10;'
        const [rows, fields] = await db.promise().execute(query)
        return sendResponse(req, res, 200, "Fetched incidents", rows)
    }
}