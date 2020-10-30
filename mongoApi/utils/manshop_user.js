const Mock = require('mockjs');
const {create} = require('../db/mongo');

const data = Mock.mock({
    'data|50': [
            {
                'uid': "@id",                                                       /* 用户ID */
                'username':"@cname",                                                /* 用户名 */
                "password":"1111",                                                  /* 随机4位数密码 */
                "gender|1":["男","女"],                                             /* 性别 */
                "age":"@string('number', 2)",                                       /* 年龄 */
                "phone":/^1[3456789]\d{9}$/,                                        /* 手机号 */
                "address|0-2":[
                    "@county(true)"
                ],                                          /* 地址 */
                "avatar":"http://localhost:2004/uploads/avatar/avatar.jpg",   /* 头像 */
                "fileName":'avatar.jpg',                                            /* 头像文件名 */
                "regtime":'@datetime'                                               /* 注册时间 */
            }
        ]
})
console.log(data);

// let res = create('user',data.data);
