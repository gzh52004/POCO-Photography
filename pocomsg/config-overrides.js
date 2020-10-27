const path=require('path');
const {override,addDecoratorsLegacy,disableEsLint,useBabelRc,fixBabelImports}=require('customize-cra');
module.exports=override(
    // 支持ES7装饰器
    addDecoratorsLegacy(),

    // 禁用ESlint
    disableEsLint(),

    // 添加别名
    useBabelRc({
        '@':path.join(__dirname,'./src/'),
    }),

    // 按需加载antd
    fixBabelImports('import',{libraryName:"antd",style:"css"},"antd")
)