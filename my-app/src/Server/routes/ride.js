const db = require('../database');
const url = require('url');
const querystring = require('querystring');
const multer = require('multer');
const { sendResponse } = require("../helpers/response");
const { getReqData } = require("../helpers/utils");
const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = {
    async getZones(req, res){
        const [rows, fields] = await db.promise().execute(
            `SELECT * FROM master.zone;`
        )
        return sendResponse(req, res, 200, "Zones Gathered", rows);
    },

    async addRide(req, res) {
        const upload = multer()
        upload.any()(req, res, async (err) => {
            const zone_id = req.body.zone_id;
            const category = req.body.category;
            const type = req.body.type;
            const name = req.body.name;
            const capacity = req.body.capacity;
            const hour_capacity = req.body.hour_capacity;
            const height_requirement = req.body.height_requirement;
            const perm_closed = false;
            const image = req.files[0].buffer.toString('binary');
            const description = req.body.description;

            const query = 'INSERT INTO master.ride(`ride_id`, `zone_id`, `category`, `name` ,`capacity`, `hour_capacity`, `image`, `height_requirement`, `type`, `perm_closed`, `description`, `last_maintenance`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, (current_timestamp()))'
            const values = [zone_id, category, name, capacity, hour_capacity, image, height_requirement, type, perm_closed, description]

            const [row, fields] = await db.promise().execute(query, values);
            return sendResponse(req, res, 200, `Added Ride`, row)
        })
    },
    /*
        POST Data Example:
        {
            "name": 'SkyBlade
        }
    */
    async rideExist(req, res) {
        const parsedURL = url.parse(req.url)
        const urlParams = querystring.parse(parsedURL.query)
        const name = urlParams.name
        const [rows, fields] = await db.promise().execute(
            `SELECT * FROM master.ride WHERE name = '${name}';`
        )
        if (rows.length == 0) return sendResponse(req, res, 200, "Ride Not Found", false);
        return sendResponse(req, res, 200, "Ride Exist", true);

    },

    async getAllRides(req, res) {
        const [rows, fields] = await db.promise().execute(
            `SELECT * FROM master.ride;`
        )
        return sendResponse(req, res, 200, "Rides Gathered", rows);
    },

    async getAllAdultRides(req, res) {
        const [rows, fields] = await db.promise().execute(
            `SELECT * FROM master.ride WHERE type = "Adult";`
        )
        return sendResponse(req, res, 200, "Rides Gathered", rows);
    },

    async getAllKidsRides(req, res) {
        const [rows, fields] = await db.promise().execute(
            `SELECT * FROM master.ride WHERE type = 'Child';`
        )
        return sendResponse(req, res, 200, "Rides Gathered", rows);
    },

    async getAllActiveAdultRides(req, res) {
        const [rows, fields] = await db.promise().execute(
            `SELECT * FROM master.ride WHERE type = "Adult" and perm_closed = "0";`
        )
        return sendResponse(req, res, 200, "Rides Gathered", rows);
    },

    async getAllActiveKidsRides(req, res) {
        const [rows, fields] = await db.promise().execute(
            `SELECT * FROM master.ride WHERE type = 'Child' and perm_closed = "0";`
        )
        return sendResponse(req, res, 200, "Rides Gathered", rows);
    },

    async editRide(req, res) {
        const upload = multer()
        upload.any()(req, res, async (err) => {
            const selected_ride = req.body.selected_ride;
            const name = req.body.name;
            const type = req.body.type;
            const zone_id = req.body.zone_id;
            const capacity = req.body.capacity;
            const hour_capacity = req.body.hour_capacity;
            const image = req.files[0].buffer.toString('binary');
            const last_maintenance = req.body.last_maintenance;

            let query = 'UPDATE master.ride SET '; 
            let values = []           

            if (name != null) {
                query += 'name = ?, ';
                values.push(name)
            }
            if (type != null) {
                query += 'type = ?, ';
                values.push(type)
            }
            if (zone_id != null) {
                query += 'zone_id = ?, ';
                values.push(zone_id)
            }
            if (capacity != null) {
                query += 'capacity = ?, ';
                values.push(capacity)
            }
            if (hour_capacity != null) {
                query += 'hour_capacity = ?, ';
                values.push(hour_capacity)
            }
            if (image != null) {
                query += 'image = ?, ';
                values.push(image)
            }
            if (last_maintenance != null) {
                query += 'last_maintenance = ?, ';
                values.push(last_maintenance)
            }
            query = query.slice(0, -2);
            query += ` WHERE name = ${selected_ride}`
        })
    }
}