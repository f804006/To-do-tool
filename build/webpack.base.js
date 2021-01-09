//开发与生产的公共部分
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//引入html-webpackplugin  打包结束时，自动生成index.html，并引入js
const HtmlWebpackPlugin = require('html-webpack-plugin')
//引入clean-webpack-plugin,打包时清除之前的dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: './src/main.js',   //entry：入口文件
    output: {
        filename: 'main.js', //clean-webpack-plugin清除之前dist目录里的内容（打包之前执行）
        path: path.resolve(__dirname, '../dist')
    },
    module: {   //loader 处理文件方式
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(jpg|jpeg|svg|gif|svg)$/,
            loader: 'url-loader', //依赖于file-loader
            options: {
                name: '[name].[ext]',
                limit: 2048, //小于2048字节(btye)直接打包成Base64格式文件，减少http请求次数
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader'] //将多个css整合到一个文件中
        }, {
            test: /\.styl(us)?$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'stylus-loader']
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': path.resolve(__dirname, '../src'),
            'styles': path.resolve(__dirname, '../src/assets/styles'),
            'images': path.resolve(__dirname, '../src/assets/images')
        }
    },
}