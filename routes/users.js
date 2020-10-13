var express = require('express');
var router = express.Router();
var app = express()
const resextra = require("../utils/apiRespone")
app.use(resextra)
app.use(router)
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.send({
    name:'杨璟烨',
    city:'福州',
    age:9
  })
});

module.exports = router;
