const express = require('express');
const router = express.Router();
const formatData = require('../utils/formatData');
const { verify } = require('../utils/token');

const userRouter = require('./modules/user');
const orderRouter = require('./modules/order');
const goodsRouter = require('./modules/goods');
const uploadRouter = require('./modules/upload');

router.use(express.urlencoded({ extended: false }), express.json())

router.use('/user', userRouter);
router.use('/order', orderRouter);
router.use('/goods', goodsRouter);
router.use('/upload', uploadRouter);

// token校验
router.get('/verify', (req, res) => {
    let { authorization } = req.query;
    let result = verify(authorization);
    if (result) {
        res.send(formatData({
            code: 1,
            msg: '校验通过！'
        }))
    } else {
        res.send(formatData({
            code: 0,
            msg: 'token过期或被篡改，请重新登录！'
        }))
    }
})

module.exports = router;
