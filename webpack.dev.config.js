const webpack = require('webpack');
const merge = require('webpack-merge');
// 读取同一目录下的 base config
const webpackBaseConfig = require('./webpack.base.config');
module.exports = merge(webpackBaseConfig, {
    output: {
        path: __dirname + "/public",
        filename: "build.js-[hash].js",
        //publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true
    },
    devtool: "source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ]
});
