const mysql = require("mysql");

const db = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6705613",
    database: "sql6705613",
    password: "yXJRsZXtNW",
});

module.exports = db;