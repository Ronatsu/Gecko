const mysql = require("mysql");

// db pc tony
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tortuguero.2011.',
    database: 'geckoaventuras'
  })
// db pc tony

  connection.connect(function(err){
    (err)? console.log(err): console.log(connection);
  })

  module.exports = connection;