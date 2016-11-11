
var fileConfig = require('./gulpconfig.js');//外部配置文件名为config.js
var gulp = require('gulp');	//基础库
var clean = require('gulp-clean');	//清空文件夹
var gulpSequence = require('gulp-sequence');	//制定了task的执行顺序
var less = require('gulp-less');	//编译less
var autoprefixer = require('gulp-autoprefixer');	//自动处理浏览器前缀
var gulpif = require('gulp-if');	//if判断，用来区别生产环境还是开发环境的
var cleanCSS = require('gulp-clean-css');	//压缩样式
var prefix = require('gulp-prefix');	//替换资源文件前缀路径

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
	src_frame_url_style:	"../" + styleFrameUrl,
	src_frame_style:		"../" + styleFrame,
	src_skins_style:		"../" + styleSkins,

	dist_url: 				targetDirectory,
	dist_frame_style:  		targetDirectory + "/css",
	dist_skins_style:  		targetDirectory + "/css/skins",
};
var ordinaryFileAry = [];
//var ordinaryFileAry = [paths.src_json, paths.src_txt, paths.src_mp3, paths.src_js_pages_no];

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
});
// 清理
gulp.task('clean', function() {
	/*
		dist_framework
		dist_youc_admin
		dist_skins
		dist_fonts
		dist_url
		dist_html
		dist_js
		dist_plugins
		dist_css
		dist_images
		dist_pic
	 */
	return gulp.src([
		// paths.dist_js,
		// paths.dist_html,
		// paths.dist_css,
		// paths.dist_images,
		// paths.dist_pic,
		// paths.dist_framework,
		// //paths.dist_plugins,
		// paths.dist_pages,
		// paths.dist_fonts
	], {read: false})
	.pipe(clean());
});
gulp.task('build', ['clean'], function() {
	gulpSequence(['styles'], 'ordinary-file')(function (err) {
		if (err) console.log(err)
	});
	//	gulpSequence(['scripts', 'styles', 'images', 'pic', 'framework'], 'ordinary-file')(function (err) {
	//		if (err) console.log(err)
 	//	});
});
gulp.task('default',function () {
	gulp.start('build');
});


// 看守
gulp.task('watch', function() {
	gulp.start('build');
	gulp.watch([paths.src_frame_url_style], function(event) {
		gulpSequence('styles')(function (err) {
			if (err) console.log(err)
		});
	});
	// 监听一般文件 html php txt json mp3
	gulp.watch(ordinaryFileAry.concat([paths.src_html, paths.src_php, paths.src_htaccess]), function(event) {
		gulpSequence('ordinary-file')(function (err) {
	    	if (err) console.log(err)
	 	});
	});
	// 由于某些js控件或库的样式放置在js同空间名目录
	// 看守所有css档
	// gulp.watch([paths.src_css, paths.src_less, paths.src_js_css, paths.src_js_less, paths.src_less_all, paths.src_fonts], function(event) {
	// 	gulpSequence('styles', 'ordinary-file')(function (err) {
	// 	if (err) console.log(err)
	// 	});
	// });

	// 看守所有.js档
	// gulp.watch([paths.src_js], ['scripts']);
	// // 看守所有图片档
	// gulp.watch(paths.src_images, ['images']);
	// gulp.watch(paths.src_pic, ['pic']);

});
























































