const db = require('../database');
const url = require('url');
const querystring = require('querystring');
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
    async addConcession(req, res){
        const bodyData = await getReqData(req);
        const concessionJSON = JSON.parse(bodyData);  
        const name = concessionJSON.name;
        const zone = concessionJSON.zone;
        const food_type = concessionJSON.food_type;
        const image = concessionJSON.image;
        const query = 'INSERT INTO master.concession(`concession_id`, `name`, `zone_id`, `food_type`, `image`) VALUES (NULL, ?, ?, ?, ?);'
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

    async getAllConcessions(req, res){
        const [rows, fields] = await db.promise().execute(
            `SELECT * FROM master.concession;`
        )
        return sendResponse(req, res, 200, "Concessions Gathered", rows);
    }



}