const db = require('../database');
const { sendResponse } = require("../helpers/response");
const { getReqData } = require("../helpers/utils");

module.exports = {
    /*
        POST Data Example:
        {
        }
    */
    async addRide(req, res){
        const bodyData = await getReqData(req);
        const rideJSON = JSON.parse(bodyData);  
        const ride_id = rideJSON.ride_id;
        const type = rideJSON.type;
        const name = rideJSON.name;
        const capacity = rideJSON.capacity;
        const hour_capacity = rideJSON.hour_capacity;
        const image = rideJSON.image;
        const height_requirement = rideJSON.height_requirement;
        const last_maintenance = rideJSON.last_maintenance;
        const query = 'INSERT INTO master.ride(`ride_id`, `zone_id`, `type`, `name`, `capacity`, `hour_capacity`, `image`, `height_requirement`, `last_maintenance`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?)'
        const values = [ride_id, type, name, capacity, hour_capacity, image, height_requirement, last_maintenance]

        const [row, fields] = await db.promise().execute(query, values);
        return sendResponse(req, res, 200, `Added Ride`, row)
    },
    /*
        POST Data Example:
        {
            "name": 'SkyBlade
        }
    */
    async rideExist(req, res){
        const bodyData = await getReqData(req);
        const rideJSON = JSON.parse(bodyData); 
        const name = rideJSON.name;
        const [rows, fields] = await db.promise().execute(
            `SELECT * FROM master.ride WHERE name = '${name}';`
        )
        if (rows.length == 0) return sendResponse(req, res, 200, "Ride Not Found", false);
        return sendResponse(req, res, 200, "Ride Exist", true);

    },

    async getAllRides(req, res){
        const [rows, fields] = await db.promise().execute(
            `SELECT * FROM master.ride;`
        )
        return sendResponse(req, res, 200, "Ride Exist", rows);
    }
}