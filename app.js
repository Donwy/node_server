const express = require('express');
const app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

var expressdata =[
  {
    date:'11/03',
    time:'20:39',
    status:'运输中',
    information:'武汉转运中心公司 已发出，下一站 深圳转运中心',
  },
  {
    date: '11/02',
    time: '20:39',
    status: '已发出',
    information: '武汉转运中心公司 已发出，下一站 深圳转运中心',
  },
  {
    date: '11/01',
    time: '20:39',
    status: '已打包',
    information: '武汉转运中心公司 已发出，下一站 深圳转运中心',
  },
  {
    date: '11/01',
    time: '20:39',
    status: '已接单',
    information: '商家已成功接单',
  }
  ];

//写个接口123
app.get('/express',function(req,res){
  res.status(200),
      res.json(expressdata)
});

module.exports = app;
