const mysql = require("mysql");

// db pc kenny :v
const connection = mysql.createConnection({
    host: 'gecko-aventuras.mysql.database.azure.com',
    port: 3306,
    user: 'adgecko19@gecko-aventuras',
    password: 'geckoTortuguero19',
    database: 'geckoaventuras'
  })



// db pc kenny :v

  connection.connect(function(err){
    (err)? console.log(err): console.log(connection);
  })

  module.exports = connection;