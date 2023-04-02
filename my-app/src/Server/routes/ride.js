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




// db.query(
//     'SELECT * FROM ride',
//     function (error, results, fields) {
//         if (error) throw error;
//         db.end();
//     }
// );


// module.exports = {
//     fetchAllRides() {
//         db.query(
//             'SELECT * FROM ride',
//             function (error, results, fields) {
//                 if (error) throw error;
//                 return results;
//             }
//         );
//         db.end();
//     },

//     fetchZoneRides() {
//         db.query(
//             'SELECT * FROM ride WHERE zone_id = ?', ['A'],
//             function (error, results, fields) {
//                 if (error) throw error;
//                 return results;
//             }
//         );
//     }
// }