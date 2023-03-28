require('dotenv').config();
const fs = require('node:fs');
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  ssl: {
    ca: fs.readFileSync(
      __dirname + "/helpers/SSLCertification.pem"
    ),
  }
});

connection.connect(function (err) {
  if (err) {
    return console.error('Error connecting to MySQL database:', err.stack);
  }

  console.log('Connected to MySQL database as id', connection.threadId);
});

connection.query('SELECT * from EMPLOYEE', function (error, results, fields) {
  if (error) throw error;
  console.log('The result:', results);
});

connection.end();


// const connectionPool = mysql.createPool({
//   host: process.env.HOST,
//   port: process.env.PORT,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
//   multipleStatements: true
// });

// connectionPool.getConnection( (err, connection) => {
//   if (err) throw err;
//   console.log(`Connected successfully to ${process.env.DATABASE}`)
//   // connection.release();
// })

module.exports = connection;