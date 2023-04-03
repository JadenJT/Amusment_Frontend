const db = require('../database');

const { getReqData } = require('../helpers/utils');
const { sendResponse } = require("../helpers/response");

module.exports = {
    async getZoneIncome(req, res) {
        const bodyData = await getReqData(req);
        const attemptLogin = JSON.parse(bodyData);

        return sendResponse(req, res, 200, "Logged in")

    }
}
