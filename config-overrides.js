// /* 修改默认启动文件 
//     react-app-rewired的作用就是在不eject的情况下,覆盖create-react-app的配置
//     customize-cra 和 react-app-rewired 插件
//     使用该文件来覆盖掉原有的webpack文件
// */
// // "scripts": {
//   //   "start": "set PORT=7031 && react-scripts start",
//   //   "build": "react-scripts build",
//   //   "test": "react-scripts test",
//   //   "eject": "react-scripts eject"
//   // },
// //引入
// // const { injectBabelPlugin } =require('react-app-rewired');
// const { override, fixBabelImports, addLessLoader, addWebpackAlias, useEslintRc } = require("customize-cra");
// const path = require("path");


// module.exports = override(
//     // 注意，一定要用 path.resolve 引入eslint的配置文件，否则不生效
//     // useEslintRc(path)
//     // useEslintRc(path.resolve(__dirname, './.eslintrc.json')),

//     // 针对antd 实现按需打包：根据import来打包 (使用babel-plugin-import)  
//     fixBabelImports("import", {    
//         libraryName: "antd",    
//         libraryDirectory: "es",    
//         style: "css", //自动打包相关的样式 默认为 style:'css'  
//     }),
//     // 使用less-loader对源码重的less的变量进行重新制定，设置antd自定义主题 
//     addLessLoader({
//         javascriptEnabled: true,
//         localIdentName: '[local]--[hash:base64:5]',
//         modifyVars: { "@primary-color": "#1DA57A" },  
//     }),
//     //增加路径别名的处理,配置文件路径别名
//     addWebpackAlias({
//         '@': path.resolve('./src'),
//         assets: path.resolve(__dirname, './src/assets'),
//         components: path.resolve(__dirname, './src/components'),
//         pages: path.resolve(__dirname, './src/pages'),
//         common: path.resolve(__dirname, './src/common'),
//         views: path.resolve(__dirname, './src/views'),
//         utils: path.resolve(__dirname, './src/utils')
//     }),
    
// )
