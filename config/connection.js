// Set up MySQL connection.
var mysql = require("mysql");

var connection; // for heroku

if(process.env.JAWSDB_URL){
  connetion = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Insecure',
    database: 'burgers_db'
  });
}

connection.connect();

// FOR LOCAL HOST
// -----------------
// var connection = mysql.createConnection({
//   port: 8889,
//   host: "localhost",
//   user: "root",
//   password: "Insecure",
//   database: "burgers_db"
// });
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Export connection for our ORM to use.
module.exports = connection;
