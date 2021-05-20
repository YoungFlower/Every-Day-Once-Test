var express = require('express');
var router = express.Router();
var app = express()
const resextra = require("../utils/apiRespone")

var mysqlInfo = require(process.env.NODE_ENV == 'develop' ? '../mysql/index.json' : '../mysql/pro.json');
// var mysqlInfo = require('../mysql/index.json');

var mysql = require('mysql')
var connection = mysql.createConnection(mysqlInfo);
connection.connect()
app.use(resextra)
app.use(router)
/* GET users listing. */
router.get('/get-list', function (req, res, next) {
  // res.send('respond with a resource');

  var sql = 'SELECT * FROM todo_list';
  var str = '';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log('[SELECT ERROR]：', err.message);
    }
    str = JSON.stringify(result);
    console.log(result);

    res.send({
      a: 111
    })

  })

});

module.exports = router;