const path=require('path');
const {override,addDecoratorsLegacy,disableEslint,useBabelRc,fixBabelImporet}=require('customize-cra');
module.exports=override(
    // 支持ES7装饰器
    addDecoratorsLegacy(),

    // 禁用ESlint
    disableEslint(),

    // 添加别名
    useBabelRc({
        '@':path.join(__dirname,'./src'),
    }),

    // 按需加载antd
    fixBabelImporet('import',{libraryName:"antd-mobile",style:"css"},"antdm")
)