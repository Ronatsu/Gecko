const connection = require('../database/connectionDB');
const express = require("express");
const router = express.Router();
var cors = require("cors");
router.use(cors());


//para diferenciar metodos post en las comillas de debe de poner el nombre
router.post('/getTourById', function (req, res) {
    console.log(req.body.id);
  connection.query("CALL spGetBlogPostById(" + req.body.id + ")", function (err,result) {
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