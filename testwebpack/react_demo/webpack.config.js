// 一个简单的 webpack.config.js 文件
var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        index: './js/index.js',
        demo1: './js/demo1.js',
        demo2: './js/demo2.js',
        demo3: './js/demo3.js',
        demo4: './js/demo4.js',
        demo5: './js/demo5.js',
        demo6: './js/demo6.js',
        demo7: './js/demo7.js',
        demo8: './js/demo8.js',
        demo9: './js/demo9.js',
        demo10: './js/demo10.js',
        demo11: './js/demo11.js',
        demo12: './js/demo12.js',
        redux1: './js/redux1.js',
    },
    // webpack 打包后的输出文件的路径
    output: {
        path: path.join(__dirname, 'dist'), // 文件放至当前路径下的 dist 文件夹
        filename: '[name].bundle.js',  // 将打包后的输出文件命名为 name.bundle.js
    },
    // output: {
    //     path: __dirname,
    //     filename: '[name].bundle.js'
    // },
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
            "index",
            "demo1",
            "demo2",
            "demo3",
            "demo4",
            "demo5",
            "demo6",
            "demo7",
            "demo8",
            "demo9",
            "demo10",
            "demo11",
            "demo12",
            "redux1",
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
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
    ]

}


