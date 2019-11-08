const expressRouter = require('express');
const router = expressRouter.Router();
const expressCtrl = require('../controllers/expressCtrl');
const expressModel = require('../models/expressModel');

// expressRouter api controller封装方法
router.get('/expressCreate', expressCtrl.expressCreate);
router.get('/expressFind', expressCtrl.expressFind);

//直接router写api
// router.get('/expressFind', function (req,res){
//     expressModel.find({'date': '11/01'},'date time status information',function (err,result) {
//         console.log(result);
//         res.json(result);
//     })
// });

module.exports = router;
