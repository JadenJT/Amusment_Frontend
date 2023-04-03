const db = require('../database');

const { getReqData } = require('../helpers/utils');
const { sendResponse } = require("../helpers/response");

module.exports = {
    // First Data Report 
    async getZoneIncome(req, res) {
        /*
            We are going to get the type of zone 
            
            Zone Options: All, A, B, C, ...
            Date Option: (None) - All time grand total
            Date Option: (Date 1 - Date 2) - Grand total between time.
        */
        /*
            Data Example:
            {
                "zone": "All"
                "start_date": "DateTime()"
                "end_date" "DateTime()"
            }
        */
        const bodyData = await getReqData(req);
        const zoneData = JSON.parse(bodyData);

        //If All
        // For dates, if you have one date, you must insert a second date. It cannot be a null
        // The front end will check if either are filled, if so, then it will send and error of above is violated.
        if(zoneData.zone === 'all') {
            // If none
            if (zoneData.start_date === null && zoneData.end_date === null) {

            }
            // If date option
            if (zoneData.start_date !== null && zoneData.end_date !== null) {

            }  
        //If zone
        } else {
            // If none
            if (zoneData.start_date === null && zoneData.end_date === null) {

            }
            // If date option
            if (zoneData.start_date !== null && zoneData.end_date !== null) {
                
            }
        }
        return sendResponse(req, res, 200, "Logged in")

    }
}
