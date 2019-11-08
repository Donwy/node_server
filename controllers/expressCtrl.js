const expressModel = require('../models/expressModel');

const sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

//构建数据库
module.exports.expressCreate = function (req, res) {
    expressModel.create(data, function (err, result) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
        } else {
            console.log(result);
            sendJSONresponse(res, 201, result);
        }
    });
};

//查找
module.exports.expressFind = function (req, res) {
    expressModel.find({ },function (err, result) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
            return;
        }
        sendJSONresponse(res, 200, result);
        console.log(result);
    })
};

//增加数据
module.exports.expressInsert = function (req, res) {
    expressModel.insertMany(data, function (err, result) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
            return;
        }
        sendJSONresponse(res, 200, result);
        console.log(result);
    })
}

//删除
module.exports.expressRemove = function (req, res) {
    expressModel.remove({'status': '运输中'}, function (err, result) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
            return;
        }
        sendJSONresponse(res, 200, result);
        console.log(result);
    })
}



const data = [
    {
        date:'11/03',
        time:'20:39',
        status:'运输中',
        information:'武汉转运中心公司 已发出，下一站 广州转运中心',
    },
    {
        date: '11/02',
        time: '20:39',
        status: '已发出',
        information: '上海转运中心公司 已发出，下一站 深圳转运中心',
    },
    {
        date: '11/01',
        time: '20:39',
        status: '已打包',
        information: '武汉转运中心公司 已发出，下一站 上海转运中心',
    },
    {
        date:'11/01',                       //如果是网页提交请求，可以通过date= req.body.xxx，获取响应的数据
        time: '20:39',
        status: '已接单',
        information: '商家已成功接单'
    }
];
