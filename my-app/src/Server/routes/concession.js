const db = require('../database');

db.query(
    'SELECT * FROM concession',
    function (error, results, fields) {
        if (error) throw error;
        console.log('The result:', results);
    }
);

db.end();
