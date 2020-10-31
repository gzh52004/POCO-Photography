const crypto = require('crypto');
const {cryptoHash,saltValue} = require('../config.json')

/* 对密码进行单项加密 */
function encrypt(password){
    const hashPw = crypto.createHash(cryptoHash);
    hashPw.update(`${password}${saltValue}`); 
    password = hashPw.digest('hex');

    return password;
}

module.exports = encrypt;