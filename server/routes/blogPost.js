const connection = require('../database/connectionDB');
const express = require("express");
const router = express.Router();
var cors = require("cors");
router.use(cors());


//para diferenciar metodos post en las comillas de debe de poner el nombre
router.post('/postList', function (req, res) {
console.log('postList');
  connection.query("CALL addTours('" + req.body.tourName + "','" + req.body.description +"'"+ ")", function (err,result) {
      if (err) {
        return res.send(err)
      }
      else {
        return res.send(result)
      }
    }
    )

});

router.get('/postList', function (req, res) {
  console.log('es un get blog');
    connection.query("CALL spGetBlogPost()", function (err,result) {
        if (err) {
          return res.send(err)
        }
        else {
          return res.send(result)
        }
      }
      )
  
  });

module.exports = router;