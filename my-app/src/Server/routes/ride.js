const db = require('../database');
let reqQuery;

function getAllRides(req, res) {
    reqQuery = `SELECT * FROM ride`
    executeQuery(req, res, reqQuery)
}

function getZoneRides(req, res, zone) {
    reqQuery = `SELECT * FROM ride WHERE zone_id = '${zone}'`
    executeQuery(req, res, reqQuery)
}

function executeQuery(req, res, reqQuery) {
    db.query(
        reqQuery,
        function (error, results, fields) {
            if (error) {
                res.statusCode = 500;
                throw error;
            }
            res.statusCode = 200;
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(results))
        }
    )
}


module.exports = {
    getAllRides,
    getZoneRides
};