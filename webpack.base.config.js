const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: __dirname + "/app/main.js", // 入口文件
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // 时间
        new webpack.BannerPlugin(new Date().getFullYear() + '/' + parseInt(new Date().getMonth() + 1, 10) + '/' + new Date().getDate() + '--' + new Date().getHours() + ':' + new Date().getMinutes()),
        // 每次打包前，先清空原来目录中的内容
        new CleanWebpackPlugin(['public'], {
            root: __dirname,
            verbose: false
        }),
        // 模板
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"  //new 一个这个插件的实例，并传入相关的参数
        }),
        // 启用 CommonChunkPlugin
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        })
    ]
};