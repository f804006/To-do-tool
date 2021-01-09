const baseConfig = require('./webpack.base.js')
const {merge} = require('webpack-merge') //新版要加大括号

const prodConfig = {
    mode: 'production'
}

module.exports = merge(baseConfig,prodConfig)