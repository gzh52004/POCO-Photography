const request = require('request');
const cheerio = require('cheerio');
let path = require("path");
const fs = require('fs');
var iconv = require('iconv-lite');
const {create} = require('../db/mongo');

// let url = `http://legou.lers168.com/list/0/1-1.html`    // 男装
let url = `http://legou.lers168.com/list/6/8-1.html`    // 女装

request({
    url,
    encoding: 'utf-8'
}, (err, res, body) => {
    var html = iconv.decode(body, 'gb2312');
    let $ = cheerio.load(body, { decodeEntities: false });

    // console.log($('#goodsItems .g_over').length);

    let goodArr = []
    $('#goodsItems .g_over').each((idx,good)=>{
        /* 
            * 商品名称：goodname
            * 价格：price
            * 销量：sale
            * 商铺：store
            * 领券：discount
            * 图片：goodimg
        */

        let goodname = $(good).find('.title a').text().trim();
        let price = $(good).find('.price span').text();
        let sale = $(good).find('.goods-num i').text();
        let store = $(good).find('.coupon').text();
        let discount = $(good).find('.old-price').text();
        let goodurl = 'http://legou.lers168.com/' + $(good).find('.img img').attr('src');

        // console.log(goodurl);
        // console.log(path.basename(goodurl));

        // 1.获取文件名
        let filename = path.basename(goodurl);
        // 2.请求图片路径并下载到本地
        request(goodurl).pipe(fs.createWriteStream('../uploads/goods/'+filename));
        // 3.路径重写，写入数据库用
        goodurl = `http://localhost:2004/uploads/goods/${filename}`

        // goodArr.push({
        //     goodname,
        //     price,
        //     sale,
        //     store,
        //     discount,
        //     goodurl,
        //     sort:'男装'
        // })

        goodArr.push({
            goodname,
            price,
            sale,
            store,
            discount,
            goodurl,
            sort:'女装'
        })
    })

    // console.log(goodArr);
    // 4.保存入数据库
    create('goods',goodArr).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })

});