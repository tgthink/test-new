var fileConfig = require('./gulpconfig.js');//外部配置文件名为config.js
var webpackConfig = require("./webpack.config.js");
var gulp = require('gulp');
var clean = require('gulp-clean');	//清空文件夹
var webpack = require("gulp-webpack");
var prefix = require('gulp-prefix');	//替换资源文件前缀路径
var gulpSequence = require('gulp-sequence');	//制定了task的执行顺序
var autoprefixer = require('gulp-autoprefixer');	//自动处理浏览器前缀
var less = require('gulp-less');	//编译less
var gulpif = require('gulp-if');	//if判断，用来区别生产环境还是开发环境的
var cleanCSS = require('gulp-clean-css');	//压缩样式

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
	src_less: 				source + "/css/**/*.less",

	src_js: 				source + "/js/**/*.js",
	src_jsx: 				source + "/js/**/*.jsx",
	src_components:         source + "/js/components/**/*.*",
	src_webpack_all:        source + "/js/**/*.*",

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
// 处理样式
gulp.task('styles', function() {
	/*src_frame_style start*/
	gulp.src([paths.src_frame_style])
	.pipe(less())
	.pipe(autoprefixer('> 1%', 'IE 8'))
	.pipe(gulpif(true, cleanCSS({
			debug: true,
			keepSpecialComments: "*"
		}, function(details) {
	        console.log(details.name + ': ' + details.stats.originalSize);
	        console.log(details.name + ': ' + details.stats.minifiedSize);
	    })
    ))
	.pipe(gulp.dest(paths.dist_frame_style));
	/*src_frame_style end*/
	/*皮肤样式处理 start*/
	gulp.src([paths.src_skins_style])
	.pipe(less())
	.pipe(autoprefixer('> 1%', 'IE 8'))
	.pipe(gulpif(true, cleanCSS({
			debug: true,
			keepSpecialComments: "*"
		}, function(details) {
	        console.log(details.name + ': ' + details.stats.originalSize);
	        console.log(details.name + ': ' + details.stats.minifiedSize);
	    })
    ))
	.pipe(gulp.dest(paths.dist_skins_style));
	/*皮肤样式处理 end*/

	/*处理less start*/
	gulp.src([paths.src_less])
	.pipe(less())
	.pipe(autoprefixer('> 1%', 'IE 8'))
	.pipe(gulp.dest(paths.dist_css));
	/*处理less end*/

	/*项目内样式 start*/
	gulp.src([paths.src_css])
	.pipe(gulp.dest(paths.dist_css));
	/*项目内样式 end*/
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
	gulpSequence(['webpack', 'styles'], 'ordinary-file')(function (err) {
		if (err) console.log(err)
	});
	// gulpSequence(['scripts', 'styles'], 'ordinary-file')(function (err) {
	// 	if (err) console.log(err)
	// });
	//	gulpSequence(['scripts', 'styles', 'images', 'pic', 'framework'], 'ordinary-file')(function (err) {
	//		if (err) console.log(err)
 	//	});
});

// 看守
gulp.task('watch', function() {
	gulp.start('build');
	// 由于某些js控件或库的样式放置在js同空间名目录
	// 看守所有css档
	gulp.watch([paths.src_css, paths.src_less/*, paths.src_js_css, paths.src_js_less, paths.src_less_all, paths.src_fonts*/], function(event) {
		gulpSequence('styles', 'ordinary-file')(function (err) {
			if (err) console.log(err)
		});
	});

	// 看守有关webpack操作的
	gulp.watch([paths.src_webpack_all], ['webpack']);
	// 看守所有图片档
	// gulp.watch(paths.src_images, ['images']);
	// gulp.watch(paths.src_pic, ['pic']);

	// 监听一般文件 html php txt json mp3
	gulp.watch(ordinaryFileAry.concat([paths.src_html, paths.src_php]), function(event) {
		//gulp.run('ordinary-file');
		gulpSequence('ordinary-file')(function (err) {
	    	if (err) console.log(err)
	 	});
	});

});
gulp.task('default',function () {
	gulp.start('build');
});

// 注册缺省任务
//gulp.task('default', ['webpack']);








