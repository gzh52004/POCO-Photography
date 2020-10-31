const express = require('express');
const formatData = require('../../utils/formatData');
const {find, create, update, remove} = require('../../db/mongo');
const Mock = require('mockjs');
const router = express.Router();
const moment = require('moment')

// 1.新增订单
router.post('/addOrder',async(req,res)=>{
    // console.log(req.body);

    // 生成订单号
    const oid = Mock.mock('@guid');
    // 下订单时间
    const ordertime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

    try{
        let data = await create('order',[{
            ...req.body,
            oid,
            ordertime
        }])
        if(data.insertedCount){
            res.send(formatData({
                code:1,
                msg:'新增订单成功！'
            }))
        }else{
            res.send(formatData({
                code:0,
                msg:'新增订单失败！'
            }))
        }
    }catch(err){
        res.send(formatData())
    }
    res.send('order');
})

// 2.删除订单
router.delete('/delOrder/:_id',async(req,res)=>{
    let {_id} = req.params;
    try{
        let data = await remove('order',{
            _id
        })
        if(data.deletedCount){
            res.send(formatData({
                code:1,
                msg:'删除订单成功！'
            }))
        }else{
            res.send(formatData({
                code:0,
                msg:'删除订单失败！'
            }))
        }
    }catch(err){
        res.send(formatData())
    }
})

// 3.修改订单
router.put('/edit/:_id',async(req,res)=>{
    try{
        let data = await update('order',{
            ...req.params
        },{
            ...req.body
        })
        if(data.modifiedCount){
            res.send(formatData({
                code:1,
                msg:'修改订单成功！'
            }))
        }else{
            res.send(formatData({
                code:0,
                msg:'修改订单失败！'
            }))
        }
    }catch(err){
        res.send(formatData())
    }
})

// 4.订单列表分页(包含模糊查询：商品)
router.get('/list',async(req,res)=>{
    console.log(req.query);
    let {query={},sort={},page=1,qty=10} = req.query;

    if(Object.keys(query).length){
        query = JSON.parse(query);

        // 商品
        let goodnameReg = new RegExp(query.goodname, 'i');

        query = {
            goodname:{$regex: goodnameReg}
        }
    }else{
        query = {}
    }

    sort = Object.keys(sort).length ? JSON.parse(sort) : {}

    try{
        let data = await find('order',{
            page,
            qty,
            query,
            sort
        })
        if(data.count){
            res.send(formatData({
                code:1,
                msg:'获取订单信息成功！',
                data
            }))
        }else{
            res.send(formatData({
                code:0,
                msg:'获取订单信息失败！'
            }))
        }
    }catch(err){
        console.log(err);
        res.send(formatData())
    }

})

module.exports = router;