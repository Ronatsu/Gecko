const connection = require('../database/connectionDB');
const express = require("express");
const router = express.Router();
var cors = require("cors");
router.use(cors());


//para diferenciar metodos post en las comillas de debe de poner el nombre
router.post('/getBlogPostById', function (req, res) {
  
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

router.post('/getParagraph', function (req, res) {
  connection.query("CALL spGetParagraph(" + req.body.id + ")", function (err, result) {
    if (err) {
      return res.send(err)
    }
    else {
      return res.send(result)
    }
  }
  )

});

router.post('/getComments', function (req, res) {
  connection.query("CALL spGetCommentsById(" + req.body.id + ")", function (err, result) {
    if (err) {
      return res.send(err)
    }
    else {
      return res.send(result)
    }
  }
  )
});

router.post('/addComments', function (req, res) {
  connection.query("CALL spAddComment(" + req.body.id + ",'" + req.body.newComment + "')", function (err, result) {
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
  connection.query("CALL spGetBlogPost()", function (err, result) {
    if (err) {
      return res.send(err)
    }
    else {
      return res.send(result)
    }
  }
  )

});
router.get('/getTour', function (req, res) {
  connection.query("CALL Proc_GetAllTours()", function (err, result) {
    if (err) {
      return res.send(err)
    } else {
      return res.send(result)
    }
  })
});

router.get('/getAllLocation', function (req, res) {
  connection.query("CALL Proc_ShowAllLocation()", function (err, result) {
    if (err) {
      return res.send(err)
    } else {
      return res.send(result)
    }
  })
});

router.get('/getAllServices', function (req, res) {
  connection.query("CALL Proc_ShowAllServices()", function (err, result) {
    if (err) {
      return res.send(err)
    } else {
      return res.send(result)
    }
  })
});

router.post('/getServices', function (req, res) {
  connection.query("CALL Proc_GetServices(" + req.body.id + ")", function (err, result) {
    if (err) {
      return res.send(err)
    } else {
      return res.send(result)
    }
  })
});

router.post('/getImages', function (req, res) {
  connection.query("CALL Proc_GetImages(" + req.body.id + ")", function (err, result) {
    if (err) {
      return res.send(err)
    } else {
      return res.send(result)
    }
  })
});

  router.post('/getTourId', function (req, res) {
    console.log(req.body.id);
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

module.exports = router;