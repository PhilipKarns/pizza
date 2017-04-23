//require mysql
var mysql = require("mysql");

//DB to connect to and connection confirmation
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Atlanta@10",
  database: "pizza_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;