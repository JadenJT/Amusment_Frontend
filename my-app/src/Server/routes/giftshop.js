const db = require('../database');
const url = require('url');
const querystring = require('querystring');
const multer = require('multer');
const { sendResponse } = require("../helpers/response");
const { getReqData } = require("../helpers/utils");

module.exports = {
    /*
        POST Data Example:
        {
        }
    */
    async addGiftshop(req, res) {
        const upload = multer();
        upload.any()(req, res, async (err) => {
            const name = req.body.name;
            const zone = req.body.zone;
            const image = req.files[0].buffer.toString('binary')

            const query = 'INSERT INTO master.giftshop(`giftshop_id`, `name`, `zone_id`, `image`) VALUES (NULL, ?, ?, ?);'
            const values = [name, zone, image]

            const [row, fields] = await db.promise().execute(query, values);
            return sendResponse(req, res, 200, `Added GiftShop`, row)
        });
    },
    /*
        POST Data Example:
        {
            "name": 'SkyBlade
        }
    */
    async giftshopExist(req, res) {
        const parsedURL = url.parse(req.url)
        const urlParams = querystring.parse(parsedURL.query)
        const name = urlParams.name;
        const [rows, fields] = await db.promise().execute(
            `SELECT * FROM master.giftshop WHERE name = '${name}';`
        )
        if (rows.length == 0) return sendResponse(req, res, 200, "Giftshop Not Found", false);
        return sendResponse(req, res, 200, "GiftShop Found", true);

    },

    async getGiftshop(req, res) {
        const query = 'SELECT * FROM master.giftshop;'
        const [rows, fields] = await db.promise().execute(query)
        return sendResponse(req, res, 200, "Fetched Giftshops", rows)
    }
}