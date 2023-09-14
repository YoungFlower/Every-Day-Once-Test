var express = require('express');
var expressWs = require('express-ws');

var router = express.Router();
expressWs(router);

router
  .ws('/user', function (ws, req) {
    console.log('进来了')
    ws.send('你连接成功了')
    ws.on('message', function (msg) {
      // 业务代码
      console.log('进来了')
    })
  })
  .get('/user', function (req, resp) {})
  .post('/user', function (req, resp) {})

module.exports = router;