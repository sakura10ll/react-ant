// 修改默认配置
const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = override(
  // 通过 babel-plugin-import 配置antd 组件按需加载
  fixBabelImports('import', {
    libraryName: 'antd',   // 包名
    libraryDirectory: 'es', // 包的目录名
    // style: 'css', // css 按需加载
    style: true
  }),
  // 配置 less 文件编译和加载，antd 的样式使用了 Less 作为开发语言
  addLessLoader({
    javascriptEnabled: true,   // 启用内联javascript，使其支持编写javascript
    modifyVars: { '@primary-color': '#1DA57A' }, // 修改变量
  }),
  // 配置 antd-dayjs-webpack-plugin 用 dayjs 替换 momentjs 优化打包大小
  addWebpackPlugin(new AntdDayjsWebpackPlugin())
);