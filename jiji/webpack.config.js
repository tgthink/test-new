// 一个简单的 webpack.config.js 文件
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var oEnvironment = {
    source: "src",  //源码目录
    develop: "dist" //开发生成目录
};

// var node_modules = path.resolve(__dirname, 'node_modules');
// var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var public_dir = __dirname + '/src/public';
var node_dir = __dirname + '/node_modules';
// console.log(__dirname + '/node_modules/react/dist/react.min.js');
// console.log("=====================");
// var deps = [ 
//   'react/dist/react.min.js',
//   // 'react-router/dist/react-router.min.js',
//   // 'moment/min/moment.min.js'
// ];
//console.log(public_dir + "/circle-progress/dist/");
let extractCSS = new ExtractTextPlugin(__dirname + "/dist/css/[name].css");
let extractLESS = new ExtractTextPlugin(__dirname + "/dist/css/[name].less");
var cssLoader = extractCSS.extract(['css']);
var lessLoader = extractCSS.extract(['css', 'less']);
var config = {
    // resolve: {
    //     alias: {
    //         'react': path.join(node_dir, '/react/dist/react.min'),
    //     }
    // },
    // resolve: {
    //     alias: {
    //         // react: node_dir + '/react/dist/react.min.js',
    //         reactDom: node_dir + '/react-dom/dist/react-dom',
    //         //react: node_modules_dir + '/react/dist/react.min.js',
    //         //reactDom: node_dir + '/react-dom/react-dom.min.js',
    //     }
    // },
    resolve: {
        alias: {
            //jquery: node_dir + "/jquery/dist/jquery.min.js",
            circleProgress: public_dir + "/circle-progress/dist/circle-progress.js",
        }
    },
    entry: {
        stats: './' + oEnvironment.source + '/js/stats.js',
        //vendors: ['circleProgress'],
    },
    // webpack 打包后的输出文件的路径
    output: {
        path: path.join(__dirname, 'dist/js'), // 文件放至当前路径下的 dist 文件夹
        filename: '[name].bundle.js',  // 将打包后的输出文件命名为 name.bundle.js
    },
    module: {
        // noParse: [
        //     /jquery/,
        // ],
        // noParse: [
        //     // /react/,
        //     // /react-dom/,
        //     //new RegExp(node_dir + '/react'),
        //     new RegExp(node_dir + '/react-dom')
        // ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                },
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                //loader: 'style!css'
                //loader: ExtractTextPlugin.extract("style", "css")
                loader: cssLoader
            },
            {
                test: /\.less$/,
                //loader: 'style!css!less'
                //loader: ExtractTextPlugin.extract("style", "css", "less")
                loader: lessLoader
            }
        ]
    },
    // externals: {
    //     // require("jquery") is external and available
    //     //  on the global var jQuery
    //     "jquery": "$"
    // },
    // externals: [
    //     {
    //         'jquery': 'jquery',
    //     },
    // ],
    plugins: [
        extractCSS,
        new webpack.ProvidePlugin({
            '$': "jquery",
            'window.jQuery': "jquery",
            'jQuery': 'jquery',
            'window.$': 'jquery',
        }),
        new webpack.optimize.CommonsChunkPlugin("commons.js", [
            "stats",
        ]),
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

// deps.forEach(function (dep) {
//     var depPath = path.resolve(node_modules_dir, dep);
//     config.resolve.alias[dep.split(path.sep)[0]] = depPath;
//     config.module.noParse.push(depPath);
// });

module.exports = config;









