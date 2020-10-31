const request = require('request');
const cheerio = require('cheerio');
let path = require("path");
const fs = require('fs');
var iconv = require('iconv-lite');
const Mock = require('mockjs');     // 假数据
const {create} = require('../db/mongo');

// let url = `https://www.nanshig.com/shop/cate-264-0-0-0-0-0-0-0-0.html`    // 上衣
// let url = `https://www.nanshig.com/shop/cate-268-0-0-0-0-0-0-0-0.html`    //  衬衫
// let url = `https://www.nanshig.com/shop/cate-1061-0-0-0-0-0-0-0-0.html`    //  背心
// let url = `https://www.nanshig.com/shop/cate-1072-0-0-0-0-0-0-0-0.html`    //  POLO衫
// let url = `https://www.nanshig.com/shop/cate-1395-0-0-0-0-0-0-0-0.html`    //  防晒衣
// let url = `https://www.nanshig.com/shop/cate-265-0-0-0-0-0-0-0-0.html`    //  皮衣/夹克
// let url = `https://www.nanshig.com/shop/cate-163-0-0-0-0-0-0-0-0.html`    //  小脚裤
// let url = `https://www.nanshig.com/shop/cate-164-0-0-0-0-0-0-0-0.html`    //  九分裤
// let url = `https://www.nanshig.com/shop/cate-1432-0-0-0-0-0-0-0-0.html`    //  肌肤护理/沐浴露
// let url = `https://www.nanshig.com/shop/cate-12-0-0-0-0-0-0-0-0.html`    //  板鞋
// let url = `https://www.nanshig.com/shop/cate-13-0-0-0-0-0-0-0-0.html`    //  帆布鞋
// let url = `https://www.nanshig.com/shop/cate-218-0-0-0-0-0-0-0-0.html`    //  休闲套装
// let url = `https://www.nanshig.com/shop/cate-219-0-0-0-0-0-0-0-0.html`    //  运动套装
// let url = `https://www.nanshig.com/shop/cate-1414-0-0-0-0-0-0-0-0.html`    //  西服套装

request({
    url,
    encoding: 'utf-8'
}, (err, res, body) => {
    var html = iconv.decode(body, 'gb2312');
    let $ = cheerio.load(body, { decodeEntities: false });

    /* 商品数量，判断是否存在商品数据 */
    // console.log($('.list_pic .item').length);

    let goodArr = []
    $('.list_pic .item').each((idx,good)=>{
        /* 
            * 商品编号：gid
            * 商品名称：goodname
            * 市场价：market_price
            * 现价：sale_price
            * 销量：salenum
            * 星级：star
            * 评论：comment
            * 商铺：store
            * 图片：imgArr
            * 颜色：colorArr
            * 尺码：size
            * 参数：params
            * 详情：details
        */

        // 编号
        const gid = Mock.mock('@id');
        // 名字
        let goodname = $(good).find('.goods-name a').text().trim();
        // 市场价
        let market_price = parseInt($(good).find('.market-price').text().slice(1));
        // 现价
        let sale_price = parseInt($(good).find('.sale-price').text().slice(1));
        // 销量
        let salenum = $(good).find('.status').text();
        // 星级
        let star = $(good).find('.raty').attr('data-score');
        // 店铺
        let store = $(good).find('.store .name').text();
        // 评论
        let comment = $(good).find('.sell-stat ul li').eq(1).find('a').text();
        // 图片组
        // let urls = $(good).find('.goods-pic-scroll-show ul li');
        // let goodImgs = [];
        // urls.each((idx,img)=>{
        //     let imgurl = $(img).find('img').attr('data-url');
        //     // 替换尺寸
        //     imgurl = imgurl.replace('_60','_240');
        //     // 获取名字
        //     let filename = path.basename(imgurl);
        //     // 下载
        //     request(imgurl).pipe(fs.createWriteStream('../uploads/goods/'+filename));
        //     // 路径重写
        //     imgurl = `http://localhost:2004/uploads/goods/${filename}`

        //     goodImgs.push({
        //         filename,
        //         imgurl
        //     });
        // })

        let goodImgs = [];
        let goodurl = $(good).find('.goods-pic img').attr('data-url');
        let filename = path.basename(goodurl);
        request(goodurl).pipe(fs.createWriteStream('../uploads/goods/'+filename));
        goodurl = `http://localhost:2004/uploads/goods/${filename}`
            goodImgs.push({
                filename,
                goodurl
            });
        
        // 详情页链接
        // let goodUrl = $(good).find('.goods-pic a').attr('href');
        
        goodArr.push({
            gid,
            goodname,
            market_price,
            sale_price,
            salenum,
            star,
            comment,
            store,
            first_sort:'套装',
            second_sort:'西服套装',
            goodImgs
        })
        
    })

    // console.log(goodArr);

    // create('goods',goodArr).then(res=>{
    //     console.log(res);
    // }).catch(err=>{
    //     console.log(err);
    // })

});