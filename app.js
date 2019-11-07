const mongoose = require('mongoose');
const express = require('express');
const expressModle = require('./modules/expressModle');
const app = express();


//设置跨域访问
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By",' 3.2.1');
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });
//
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
  }];

//连接数据库并创建表(当不存在的时候，成功就不会再执行)
app.get('/creat',function(req,res){
  const expressDB = new expressModle (
      {
        date: '11/01',
        time: '20:39',
        status: '已接单',
        information: '商家已成功接单',
      }
  );
  expressDB.save();
  res.json(expressdata);
});

app.get('/insert',function (req,res) {
  expressModle.find();
})

// 通过mongoose连接数据库
mongoose.connect('mongodb://localhost:27017/wechatDB', {useNewUrlParser: true})
    .then(() => {
      console.log('连接数据库成功!!!')
      // 只有当连接上数据库后才去启动服务器
      // app.listen('5000', () => {
      //   console.log('服务器启动成功, 请访问: http://localhost:5000')
      // })
    })
    .catch(error => {
      console.error('连接数据库失败', error)
    })

module.exports = app;
