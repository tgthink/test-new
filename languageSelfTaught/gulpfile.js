var fileConfig = require('./gulpconfig.js');//外部配置文件名为config.js
var webpackConfig = require("./webpack.config.js");
var gulp = require('gulp');
var clean = require('gulp-clean');	//清空文件夹
var webpack = require("gulp-webpack");
var prefix = require('gulp-prefix');	//替换资源文件前缀路径
var gulpSequence = require('gulp-sequence');	//制定了task的执行顺序

var argv = require('yargs').argv;	//用于获取启动参数，针对不同参数，切换任务执行过程时需要

var oEnvironment = fileConfig.oEnvironment;
var oFile = fileConfig.oFile;

var source = oEnvironment.source;
var styleFrameUrl = oFile.styleFrameUrl;
var styleFrame = oFile.styleFrame;
var styleSkins = oFile.styleSkins;

var targetDirectory = "";//目标目录

if ( argv.p ) {
	targetDirectory = oEnvironment.production;
} else if ( argv.t ) {
	targetDirectory = oEnvironment.test;
} else {
	targetDirectory = oEnvironment.develop;
}

var paths = {
	src_htaccess: 			source + "/.htaccess",
	src_html: 				source + "/**/*.html",
	src_php: 				source + "/**/*.php",
	src_fonts: 				source + "/css/fonts/**/*.*",
	src_css: 				source + "/css/**/*.css",
	src_js: 				source + "/js/**/*.js",

	src_frame_url_style:	"../" + styleFrameUrl,
	src_frame_style:		"../" + styleFrame,
	src_skins_style:		"../" + styleSkins,

	dist_url: 				targetDirectory,
	dist_css: 				targetDirectory + "/css",
	dist_js: 				targetDirectory + "/js",
	dist_fonts: 			targetDirectory + "/css/fonts",
	dist_frame_style:  		targetDirectory + "/css",
	dist_skins_style:  		targetDirectory + "/css/skins",
};
var ordinaryFileAry = [];

gulp.task('webpack', function () {
    var myConfig = Object.create(webpackConfig);
    console.log(paths.src_js);
    return gulp
        .src(paths.src_js)
        .pipe(webpack(myConfig))
        .pipe(gulp.dest(paths.dist_js));
});
gulp.task('ordinary-file', function() {
	var oUrl = fileConfig.oUrl;
	var prefixUrl;
	if ( argv.p ) {
		prefixUrl = oUrl.production.prefix;
	} else if ( argv.t ) {
		prefixUrl = oUrl.test.prefix;
	} else {
		prefixUrl = oUrl.develop.prefix;
	}
	gulp.src([paths.src_html, paths.src_php])
	.pipe(prefix(prefixUrl, [
		{ match: "script[src]", attr: "src" },
		{ match: "link[href]", attr: "href"},
		{ match: "img[src]", attr: "src"},
		{ match: "input[src]", attr: "src"}
	], '{{'))
	.pipe(gulp.dest(paths.dist_url));

	//console.log(paths.src_htaccess);
	gulp.src([paths.src_htaccess])
    .pipe(gulp.dest(paths.dist_url));
});
// 说明
gulp.task('help', function () {
	console.log('	gulp build			文件打包');
	console.log('	gulp watch			文件监控打包');
	console.log('	gulp help			gulp参数说明');
	console.log('	gulp clean			清理生成目录');
	//console.log('	gulp server			测试server');
	console.log('	gulp -p				生产环境（发布环境）');
	console.log('	gulp -d				开发环境（默认开发环境）');
	//console.log('	gulp -m <module>		部分模块打包（默认全部打包）');
});
// 清理
gulp.task('clean', function() {
	return gulp.src(paths.dist_url, {read: false})
	.pipe(clean());
});

gulp.task('build', ['clean'], function() {
	gulpSequence(['webpack'], 'ordinary-file')(function (err) {
		if (err) console.log(err)
	});
	// gulpSequence(['scripts', 'styles'], 'ordinary-file')(function (err) {
	// 	if (err) console.log(err)
	// });
	//	gulpSequence(['scripts', 'styles', 'images', 'pic', 'framework'], 'ordinary-file')(function (err) {
	//		if (err) console.log(err)
 	//	});
});
gulp.task('default',function () {
	gulp.start('build');
});

// 注册缺省任务
//gulp.task('default', ['webpack']);








