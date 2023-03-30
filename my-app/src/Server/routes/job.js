const db = require('../database');

db.query(
    'SELECT * FROM job',
    function (error, results, fields) {
        if (error) throw error;
        for (res of results) {
            console.log(res.work_name)
        }
    }
);

db.end();

