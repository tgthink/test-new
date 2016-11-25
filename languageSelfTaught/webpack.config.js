// 一个简单的 webpack.config.js 文件
//var path = require('path')
var webpack = require('webpack')

var oEnvironment = {
    source: "src",  //源码目录
    develop: "dist" //开发生成目录
};
module.exports = {
    entry: {
        demo1: './' + oEnvironment.source + '/js/demo1.js',
    },
    // webpack 打包后的输出文件的路径
    output: {
        //path: path.join(__dirname, 'dist'), // 文件放至当前路径下的 dist 文件夹
        filename: '[name].bundle.js',  // 将打包后的输出文件命名为 name.bundle.js
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    // externals: {
    //     // require("jquery") is external and available
    //     //  on the global var jQuery
    //     "jquery": "$"
    // },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("commons.js", [
            "demo1",
        ]),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // new webpack.DefinePlugin({
        //     'process.env':{
        //         'NODE_ENV': JSON.stringify('production')
        //     }
        // }),
    ]

}


