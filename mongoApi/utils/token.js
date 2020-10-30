const jwt = require('jsonwebtoken');
let {secret} = require('../config.json')

/* 生成令牌 */
function createToken(data,expiresIn='3h'){  // 默认小时
    let token = jwt.sign(
        {
            data
        }, 
        secret, 
        {
            expiresIn
        }
    );
    return token;
}

/* 校验令牌 */
function verify(token){
    let result;
    try{
        let res =  jwt.verify(token,secret);
        result = true
    }catch(err){
        result = false
    }
    return result
}

module.exports = {
    createToken,
    verify
}