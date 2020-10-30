const Mock = require('mockjs');
const {create} = require('../db/mongo');

const data = Mock.mock({
    'data': [
            {
                "oid" : "@guid",
                "username" : "萧秀兰",
                "goodname" : "2019春季新款小白鞋男鞋子韩版夏季板鞋男士百搭白鞋帆布休闲潮鞋 白色 36",
                "number": "@natural(1, 12)",
                "store" : "潮男公社",
                "ordertime" : "@datetime",
                "address" : "内蒙古自治区 锡林郭勒盟 阿巴嘎旗"
            }
        ]
})
// console.log(data);

let res = create('order',data.data);
