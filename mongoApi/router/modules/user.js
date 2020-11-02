const express = require('express');
const { find, create, update, remove } = require('../../db/mongo');
const formatData = require('../../utils/formatData');
const { createToken } = require('../../utils/token');
const { PORT,targetUrl } = require('../../config.json');
let setDirectory = require('../../utils/upload');
const moment = require('moment');
const Mock = require('mockjs');

// 设置文件存放目录
let upload = setDirectory('uploads/avatar/');

const router = express.Router();

/* 
    1. 验证用户名
    2. 注册
    3. 登录
    4. 根据id获取用户信息
    5. 校验密码
    6. 修改密码
    7. 根据id删除用户信息
    8. 根据id修改用户信息
    9. 以列表分页形式获取全部用户信息
    10. 新增用户
*/

// 1.验证用户名是否存在
router.get('/checkname', async (req, res) => {
    let { username } = req.query;
    try {
        let data = await find('user', {
            query: {
                username
            }
        });
        if (data.count) {
            res.send(formatData({
                code: 0,
                msg: '该用户名已被注册!'
            }))
        } else {
            res.send(formatData({
                code: 1,
                msg: '该用户名可以注册！'
            }))
        }
    } catch (err) {
        res.send(formatData({}))
    }
})

// 2.注册
router.post('/reg', async (req, res) => {
    let { username, password } = req.body;

    let userInfo = {
        uid:Mock.mock('@id'),
        username,
        password,
        regtime: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    }

    try {
        let data = await create('user', [userInfo]);
        if (data.result.n) {
            res.send(formatData({
                code: 1,
                msg: '注册成功！'
            }))
        } else {
            res.send(formatData({
                code: 0,
                msg: '注册失败！'
            }))
        }
    } catch (err) {
        res.send(formatData({}))
    }
})

// 3.登录
router.get('/login', async (req, res) => {
    let { username, password, freeLogin } = req.query;
    console.log(username, password, freeLogin);

    try {
        let data = await find('user', {
            query: {
                username,
                password,
            }
        })

        if (data.count) {
            // 校验成功则使用当前时间戳作为依据生成令牌
            let timer = new Date();
            // 7天免登陆设置
            let authorization = Boolean(freeLogin) ? createToken(username, '7d') : createToken(username);

            res.send(formatData({
                code: 1,
                msg: '登录成功！',
                data: {
                    _id:data.rows[0]._id,
                    username,
                    authorization
                }
            }))
        } else {
            res.send(formatData({
                code: 0,
                msg: '用户名或密码错误！'
            }))
        }
    } catch (err) {
        console.log(err);
        res.send(formatData({}))
    }
})

// 4.根据_id获取用户信息
router.get('/getUserInfo/:_id', async (req, res) => {
    let { _id } = req.params;
    try {
        let data = await find('user', {
            query: { _id },
            field: { password:false }
        })
        if (data.count) {
            res.send(formatData({
                code: 1,
                msg: '查询成功！',
                data: data.rows[0]
            }))
        } else {
            res.send(formatData({
                code: 0,
                msg: '查询失败，请检查您的id是否存在！'
            }))
        }
    } catch (err) {
        res.send(formatData());
    }
})

// 5.校验密码
router.get('/checkPw/:_id', async (req, res) => {
    let { password } = req.query;
    let { _id } = req.params;

    try {
        let { rows } = await find('user', {
            query: { _id }
        })
        if (password === rows[0].password) {
            res.send(formatData({
                code: 1,
                msg: '旧密码符合！'
            }))
        } else {
            res.send(formatData({
                code: 0,
                msg: '旧密码错误！'
            }))
        }

    } catch (err) {
        console.log(err);
        res.send(formatData())
    }
})

// 6.修改密码
router.put('/changePw/:_id', async (req, res) => {
    let { password } = req.body;
    let { _id } = req.params;
    console.log(password);


    try {
        let data = await update('user', { _id }, {
            password
        });
        if (data.modifiedCount) {
            res.send(formatData({
                code: 1,
                msg: '修改密码成功！'
            }))
        } else {
            res.send(formatData({
                code: 0,
                msg: "修改密码失败，可能与旧密码重合，请重新设置新密码！"
            }))
        }
    } catch (err) {
        console.log(err);
        res.send(formatData())
    }
})

// 7.根据_id删除指定用户
router.delete('/del/:_id', async (req, res) => {
    let { _id } = req.params;
    try {
        let data = await remove('user', { _id });
        if (data.deletedCount) {
            res.send(formatData({
                code: 1,
                msg: '删除用户成功！'
            }))
        } else {
            res.send(formatData({
                code: 0,
                msg: '删除用户失败，该用户信息可能已不存在！'
            }))
        }
    } catch (err) {
        res.send(formatData())
    }
})

// 8.根据_id修改用户信息(包含头像)
router.post('/edit/:_id', upload.array('avatar',1), async (req, res) => {
    // console.log(req.body);
    // console.log(req.params);
    // console.log(req.file);

    let { _id } = req.params;
    // 有上传图片则修改图片，没有则不设置avatar、filename属性来更新头像信息
    if (req.files.length) {
        let url = `${targetUrl}:${PORT}/${req.files[0].destination}${req.files[0].filename}`;
        req.body.avatar = url;
        req.body.filename = req.files[0].originalname;  // 用于返回给前端渲染用
    }

    try {
        let data = await update('user', {
            _id
        }, {
            ...req.body
        })
        if (data.modifiedCount) {
            res.send(formatData({
                code: 1,
                msg: '修改用户信息成功！'
            }))
        } else {
            res.send(formatData({
                code: 0,
                msg: '修改用户信息失败！'
            }))
        }
    } catch (err) {
        res.send(formatData())
    }
})

// 9.用户信息(分页、模糊查询[姓名、用户id、性别])
router.get('/list', async (req, res) => {
    let { page = 1, qty = 10, query = {}, sort = {} } = req.query;

    // 对sort和query进行json化防止出错
    if (Object.prototype.toString.call(sort) !== '[object Object]') {
        try {
            sort = JSON.parse(sort)
        } catch {
            sort = {}
        }
    }
    if (Object.prototype.toString.call(query) !== '[object Object]') {
        try {
            query = JSON.parse(query);

            // 遍历搜索条件并设置正则
            for (let key in query) {
                let reg = new RegExp(query[key], 'i');
                query[key] = { $regex: reg }
            }
        } catch (err) {
            query = {}
        }
    }


    try {
        let data = await find('user', {
            page,
            qty,
            query,
            sort,
            field: { password:false }
        });
        if (data.count) {
            res.send(formatData({
                code: 1,
                msg: '获取用户信息成功！',
                data
            }))
        } else {
            res.send(formatData({
                code: 1,
                msg: '获取用户信息失败！'
            }))
        }
    } catch (err) {
        res.send(formatData())
    }
})

// 10.新增用户
router.post('/addUser', upload.array('avatar',1), async (req, res) => {

    // 如果有图片信息，则写入req.body里，再于执行语句时解构
    if (req.files.length) {
        let url = `${targetUrl}:${PORT}/${req.files[0].destination}${req.files[0].filename}`;
        req.body.avatar = url;
        req.body.filename = req.files[0].originalname;  // 用于返回给前端渲染用
    }

    try {
        let data = await create('user', [{
            // 增加uid、注册时间
            uid:Mock.mock('@id'),
            ...req.body,
            regtime: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        }])
        if (data.insertedCount) {
            res.send(formatData({
                code: 1,
                msg: '新增用户成功！'
            }))
        } else {
            res.send(formatData({
                code: 0,
                msg: '新增用户失败！'
            }))
        }
    } catch (err) {
        console.log(err);
        res.send(formatData())
    }
})

// 11.根据_id批量删除用户
router.delete('/dels/', async (req, res) => {

    let { ids } = req.body;
    console.log(ids);
    ids = ids.split(',');
    try {
        let data = await remove('user', {
            _ids: ids
        })
        // console.log(data);
        if (data.deletedCount) {
            res.send(formatData({
                code: 1,
                msg: '批量删除成功！'
            }))
        } else {
            res.send(formatData({
                code: 0,
                msg: '批量删除失败！'
            }))
        }
    } catch (err) {
        res.send(formatData())
    }
})

module.exports = router;