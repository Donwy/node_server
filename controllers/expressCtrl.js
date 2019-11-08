const expressModel = require('../models/expressModel');

const sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

//构建数据库
module.exports.expressCreate = function (req,res) {
    expressModel.create({
        date:'11/01',                       //如果是网页提交请求，可以通过date= req.body.xxx，获取响应的数据
        time: '20:39',
        status: '已接单',
        information: '商家已成功接单'
    },function (err, result) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
        } else {
            console.log(result);
            sendJSONresponse(res, 201, result);
        }
    });
};

module.exports.expressFind = function (req,res) {
    expressModel.find().exec(function (err,result) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
            return;
        }
        sendJSONresponse(res, 200, result);
        console.log(result);
    })
};
