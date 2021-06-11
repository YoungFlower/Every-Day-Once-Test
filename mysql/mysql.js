var mysqlInfo = require(process.env.NODE_ENV == 'develop' ? './index.json' : './mysql/pro.json');

var mysql = require('mysql')
module.exports = {
  sqlOperation(sql) {
    return new Promise((resolve, reject) => {
      var connection = mysql.createConnection(mysqlInfo);
      connection.connect()
      connection.query(sql, function (err, result) {
        if (err) {
          console.log('[SELECT ERROR]：', err.message);
        }
        str = JSON.stringify(result);
        console.log(result);
        connection.end()
        resolve(result)
      })
    })
  }
}