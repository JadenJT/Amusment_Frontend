require('dotenv').config({path: __dirname + '/.env'});
const fs = require('node:fs');
const mysql = require('mysql2');
var connectionPool = mysql.createPool({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  ssl: {
    ca: fs.readFileSync(
      __dirname + "/helpers/SSLCertification.pem"
    ),
  },
  multipleStatements: true,
});

connectionPool.getConnection((err, connection) => {
  if (err) return console.error('Error connecting to MySQL database:', err.stack);
  console.log('Connected to MySQL database as id', connection.threadId);
  connection.release()
  
});

module.exports = connectionPool;
