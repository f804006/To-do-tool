const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')

const webpack = require('webpack')

const devConfig = {
    mode: 'development',  //打包方式
    devtool: 'eval', //找BUG专用
    devServer: {    //webpack-dev-server实时更新工具，修改App.vue内容保存后自动更新，减少build操作 ；见webpack官方文档   
        contentBase: './dist',  // 指定服务器根目录        
        open: true,  // 自动打开浏览器
        hot: true //开启热模块
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(baseConfig, devConfig) //将公共部分和开发时的部分用merge合并打包导出