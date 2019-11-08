const mongoose = require('mongoose');

const expressSchema = new mongoose.Schema({
    date: {type: String},
    time: {type: String},
    status: {type: String},
    information: {type: String},
});


// 将数据模型暴露出去
module.exports = mongoose.model('express', expressSchema);
