const db = require('../database');
const url = require('url');
const querystring = require('querystring');
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
        const zone_id = rideJSON.zone_id;
        const category = rideJSON.category;
        const type = rideJSON.type;
        const name = rideJSON.name;
        const capacity = rideJSON.capacity;
        const hour_capacity = rideJSON.hour_capacity;
        const image = rideJSON.image;
        const height_requirement = rideJSON.height_requirement;
        const query = 'INSERT INTO master.ride(`ride_id`, `zone_id`, `category`, `type` ,`name`, `capacity`, `hour_capacity`, `image`, `height_requirement`, `last_maintenance`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, (current_timestamp()))'
        const values = [zone_id, category, type, name, capacity, hour_capacity, image, height_requirement]

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
        const parsedURL = url.parse(req.url)
        const urlParams = querystring.parse(parsedURL.query)
        const name = urlParams.name
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
        return sendResponse(req, res, 200, "Rides Gathered", rows);
    }
}