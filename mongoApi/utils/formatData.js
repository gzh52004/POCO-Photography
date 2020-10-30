/* 前后端交互规范格式化 */
function formatData(options={}){
    /* 默认服务器异常 */
    let defaultOpt = {
        code:2,
        msg:'服务器异常！',
        data:[]
    }
    
    Object.assign(defaultOpt,options);

    return defaultOpt
}

module.exports = formatData;