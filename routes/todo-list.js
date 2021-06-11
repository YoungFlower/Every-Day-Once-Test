const filiter = require("../utils/filiter.js")
const sqlFun = require('../mysql/mysql')
var express = require('express');
var router = express.Router();
var app = express()
const resextra = require("../utils/apiRespone")




app.use(resextra)
app.use(router)
/* GET users listing. */
router.get('/get-list', function (req, res, next) {
  // res.send('respond with a resource');
  var sql = 'SELECT * FROM todo_list';
  var str = '';
  sqlFun.sqlOperation(sql).then(result => {
    res.send(filiter.returnDataFrom(result, 0, ''))
  })
});

/* req={
  pageNun: 1,
  pageSize: 10,
}*/
router.get('/get-good-list', function (req, res, next) {
  console.log(req.query)
  var sql = `select * from good_list limit 5,3;select count(*) from good_list;`;
  sqlFun.sqlOperation(sql).then(result => {
    console.log(result[1][0]['count(*)'])
    res.send(filiter.returnDataFrom({
      data: result[0],
      totalCount: result[1][0]['count(*)']
    }, 0, ''))
  })
})


/* req={
  good_id  商品id
  good_name 商品名
  good_stock 商品数量
  price 商品进价
  selling 商品定价
  good_sale_count 商品数量
}*/
router.post('/insert-good', function (req, res, next) {
  var sql = `select sql_calc_found_rows col_name from table_name limit 5,3;
  select found_rows()`;
  sqlFun.sqlOperation(sql).then(result => {
    res.send(filiter.returnDataFrom(result, 0, ''))
  })
})

module.exports = router;