const mysql = require("mysql");

const mysqldb = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "empi-0211",
  database: "movieindoxxi",
  port: "3306"
});

module.exports = {
  mysqldb
};
