console.log("Connected!");

const mysql = require("mysql");

if(process.env.JAWSDB_URL){
  connection= mysql.createConnection(process.env.JAWSDB_URL);
} else{
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgersDB",
  port: 3306
});
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("inside connection   mysql connected as id " + connection.threadId);
});

module.exports = connection;
