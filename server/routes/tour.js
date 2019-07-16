const connection = require('../database/connectionDB');
const express = require("express");
const router = express.Router();
var cors = require("cors");
router.use(cors());


//para diferenciar metodos post en las comillas de debe de poner el nombre
router.post('/getTourById', function (req, res) {
 
  connection.query("CALL getTourById(" + req.body.id + ")", function (err,result) {
      if (err) {
        return res.send(err)
      }
      else {
        return res.send(result)
      }
    }
    )
});


router.post('/getServicesById', function (req, res) {
 
    connection.query("CALL Proc_GetServices(" + req.body.id + ")", function (err,result) {
        if (err) {
            console.log(err)
          return res.send(err)
        }
        else {
        console.log(result)
          return res.send(result)
        }
      }
      )
  });

module.exports = router;