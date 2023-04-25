const mysql = require('mysql');
const conn = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "1234",
 database: "playerss",
});

conn.connect();

module.exports = conn;