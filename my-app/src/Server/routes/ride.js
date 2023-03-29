const db = require('../database');

module.exports = {
    fetchAllRides() {
        db.query(
            'SELECT * FROM ride',
            function (error, results, fields) {
                if (error) throw error;
                return results;
            }
        );
    },

    fetchZoneRides(zone_id) {
        db.query(
            'SELECT * FROM ride WHERE zone_id = ?', [zone_id],
            function (error, results, fields) {
                if (error) throw error;
                return results;
            }
        );
    }
}

db.end();