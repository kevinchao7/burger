// Set up MySQL connection.
var mysql = require("mysql");

// HEROKU - JAWS DB ADDON
var connection;
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host: 'etdq12exrvdjisg6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'lyvc372c2gpuwh3t',
    password: 'n6uakg60q5rkppqp',
    database: 'v58au56l3bxwphuw'
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
