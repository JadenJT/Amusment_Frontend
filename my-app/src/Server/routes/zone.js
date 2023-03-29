const db = require('../database');

db.query(
    'SHOW TABLES',
    function (error, results, fields) {
        if (error) throw error;
        console.log('The result:', results);
    }
);

db.query(
    'SELECT * FROM zone',
    function (error, results, fields) {
        if (error) throw error;
        console.log('The result:', results);
    }
);

db.end();
