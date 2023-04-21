const db = require('../database');
const url = require('url');
const querystring = require('querystring');
const { sendResponse } = require("../helpers/response");
const multer = require('multer');

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
    async addConcession(req, res){
        const upload = multer();
        upload.any()(req, res, async (err) => {
            const name = req.body.name;
            const zone = req.body.zone;
            const food_type = req.body.food_type;
            const description = req.body.description;
            const image = req.files[0].buffer.toString('binary')
            const query = 'INSERT INTO master.concession(`concession_id`, `name`, `zone_id`, `food_type`, `image`, `description`) VALUES (NULL, ?, ?, ?, ?, ?);'
            const values = [name, zone, food_type, image, description]

            const [row, fields] = await db.promise().execute(query, values);
            return sendResponse(req, res, 200, `Added Concession`, row)
        });
    },
    /*
        POST Data Example:
        {
            "name": 'SkyBlade
        }
    */
    async concessionExist(req, res){
        const parsedURL = url.parse(req.url)
        const urlParams = querystring.parse(parsedURL.query)
        const name = urlParams.name;
        const [rows, fields] = await db.promise().execute(
            `SELECT * FROM master.concession WHERE name = '${name}';`
        )
        if (rows.length == 0) return sendResponse(req, res, 200, "Concession exist", false);
        return sendResponse(req, res, 200, "Concession does not exist", true);

    },

    async getConcession(req, res){
        const query = 'SELECT * FROM master.concession;'
        const [rows, fields] = await db.promise().execute(query)
        return sendResponse(req, res, 200, "image got")
    }
}