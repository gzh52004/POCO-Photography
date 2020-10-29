const path = require('path');

// react-app-rewired@1.x的写法
// const { injectBabelPlugin } = require('react-app-rewired');
// module.exports = function override(config, env) {
//     // 修改配置
//     config.resolve.alias['@'] = path.join(__dirname,'./src/')
//      config = injectBabelPlugin([
//          "@babel/plugin-proposal-decorators", { "legacy": true }
//      ], config);

//      return config;
//  }

// react-app-rewired@2.x的写法
const {override,addDecoratorsLegacy,disableEsLint,useBabelRc,fixBabelImports,addWebpackAlias} = require('customize-cra');

module.exports = override(
    // 支持ES7装饰器
    addDecoratorsLegacy(),

    // 禁用ESlinit
    disableEsLint(),

    // 添加别名
    addWebpackAlias({
        '@':path.join(__dirname,'./src/'),
        '~':path.join(__dirname,'./src/components')
    }),

    // 按需加载antd
    fixBabelImports('import',{ libraryName: "antd", style: "css" },'antd'),
    // fixBabelImports('import',{ libraryName: "antd-mobile", style: "css" },'antdm')
)