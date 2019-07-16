const mysql = require("mysql");

// db pc kenny :v
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'geckoaventuras'
  })
// db pc kenny :v

  connection.connect(function(err){
    (err)? console.log(err): console.log(connection);
  })

  module.exports = connection;