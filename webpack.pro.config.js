const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = merge(webpackBaseConfig, {
    output: {
        path: __dirname + '/public',
        filename: "build.js-[hash].js",
        //publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    /*
                    ExtractTextPlugin.extract,要用这个
                    Extract text from bundle into a file.从bundle中提取出特定的text到一个文件中。
                    使用 extract-text-webpack-plugin就可以把css从js中独立抽离出来
                    */
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }, {
                        loader: "postcss-loader"
                    }],
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("main.css"),
        // 官方文档推荐使用下面的插件确保 NODE_ENV
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
            }
        })
    ]
});
