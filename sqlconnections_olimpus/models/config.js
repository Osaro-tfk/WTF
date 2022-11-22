var mysql = require('mysql');

var connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Christ@2022",
        database: "olimpuscars"
    })

    module.exports = {connection}