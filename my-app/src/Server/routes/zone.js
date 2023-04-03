const db = require('../database');

const { getReqData } = require('../helpers/utils');
const { sendResponse } = require("../helpers/response");

module.exports = {
    // First Data Report 
    async getZoneIncome(req, res) {
        /*
            Date Example:
            {
                "zone": "All"
                "start_date": "DateTime()"
                "end_date" "DateTime()"
            }
        */
        const bodyData = await getReqData(req);
        const zoneData = JSON.parse(bodyData);

        /*
            We are going to get the type of zone 
            
            Zone Options: All, A, B, C, ...
            Date Option: (None) - All time grand total
            Date Option: (Date 1 - Date 2) - Grand total between time.
        */

        

        //If All
            // If none
            // If date option
        //If zone
            // If none
            // If date option
        return sendResponse(req, res, 200, "Logged in")

    }
}
