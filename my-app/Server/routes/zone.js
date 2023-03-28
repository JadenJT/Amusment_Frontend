const db = require('../database');

/*
Concession
Employee
Giftshop
job
person
ride
themepark
ticket
zone
*/

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
