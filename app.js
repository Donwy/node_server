const mongoose = require('mongoose');
const express = require('express');
const routesApi = require('./routes/expressRouter');
const app = express();

app.use('/api',routesApi);
app.disable('x-powered-by');

// 通过mongoose连接数据库
mongoose.connect('mongodb://localhost:27017/wechatDB', {useNewUrlParser: true})
    .then(() => {
        console.log('连接数据库成功!!!');
        console.log('');
    })
    .catch(error => {
        console.error('连接数据库失败', error)
    })

module.exports = app;
