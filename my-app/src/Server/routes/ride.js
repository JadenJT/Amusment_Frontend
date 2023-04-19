const db = require('../database');
const { sendResponse } = require("../helpers/response");
const { getReqData } = require("../helpers/utils");

module.exports = {
    /*
        POST Data Example:
        {
            "name": "Hotty Dog"
            "zone": "a",
            "food_type": "American"
            "image": <>
        }
    */
    async addRide(req, res){
        const bodyData = await getReqData(req);
        const concessionJSON = JSON.parse(bodyData);  
        const name = concessionJSON.name;
        const zone = concessionJSON.zone;
        const food_type = concessionJSON.food_type;
        const image = concessionJSON.image;
        const query = 'INSERT INTO master.concession(`concession_id`, `name`, `zone_id`, `food_type`, `image`) VALUES (NULL, ?, ?, ?, ?)'
        const values = [name, zone, food_type, image]

        const [row, fields] = await db.promise().execute(query, values);
        return sendResponse(req, res, 200, `Added Concession`, row)
    },
    /*
        POST Data Example:
        {
            "name": 'SkyBlade
        }
    */
    async rideExist(req, res){
        const bodyData = await getReqData(req);
        const concessionJSON = JSON.parse(bodyData); 
        const name = concessionJSON.name;
        const [rows, fields] = await db.promise().execute(
            `SELECT * FROM master.concession WHERE name = '${name}'`
        )
        if (rows.length == 0) return sendResponse(req, res, 200, "response", false);
        return sendResponse(req, res, 200, "response", true);

    },
}