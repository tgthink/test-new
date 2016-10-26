/*
 * npm install gulp-less --save-dev
 * 
 */
var fileConfig = require('./gulpconfig.js');//外部配置文件名为config.js
var gulp = require('gulp');	//基础库
var less = require('gulp-less');	//编译less
var clean = require('gulp-clean');	//清空文件夹
var autoprefixer = require('gulp-autoprefixer');	//自动处理浏览器前缀
var gulpSequence = require('gulp-sequence');	//制定了task的执行顺序
var notify = require('gulp-notify');	//
var gulpif = require('gulp-if');	//if判断，用来区别生产环境还是开发环境的
var prefix = require('gulp-prefix');	//替换资源文件前缀路径
var cleanCSS = require('gulp-clean-css');	//压缩样式
//var imagemin = require('gulp-imagemin');	//压缩图片

var argv = require('yargs').argv;	//用于获取启动参数，针对不同参数，切换任务执行过程时需要


var oEnvironment = fileConfig.oEnvironment;
var oFile = fileConfig.oFile;

var source = oEnvironment.source;
var styleFrame = oFile.styleFrame;
var styleSkins = oFile.styleSkins;

var evr = argv.d || !argv.p; //开发环境为true，生产环境(发布环境)为false，默认为true
// console.log(argv.p);
// console.log(evr);

var targetDirectory = "";//目标目录
if ( evr ) {
	targetDirectory = oEnvironment.develop;
} else {
	targetDirectory = oEnvironment.production;
}
var paths = {
	src_framework:  		source + "/framework/**/*.*",
	src_pages: 				source + "/pages/**/*.*",
	src_fonts: 				source + "/fonts/**/*.*",
	src_html: 				source + "/**/*.html",
	src_php: 				source + "/**/*.php",
	src_json: 				source + "/**/*.json",
	src_txt: 				source + "/**/*.txt",
	src_mp3: 				source + "/**/*.mp3",
	src_js: 				source + "/js/**/*.js",
	src_js_total: 			source + "/js/**/*.*",
	//src_plugins: 			source + "/plugins/**/*.*",
	src_css: 				source + "/css/**/*.css",
	src_less_all: 			source + "/css/**/*.less",
	src_less: 				source + "/css/*.less",
	src_frame_style:		source + styleFrame,
	src_skins_style:		source + styleSkins,
	src_fonts:				source + "/fonts/**/*",

	src_js_css: 			source + "/js/**/*.css",
	src_js_less: 			source + "/js/**/*.less",
	src_images: 			source + "/images/**/*",
	src_pic: 				source + "/pic/**/*",

	dist_framework: 		targetDirectory + "/framework",
	dist_pages: 			targetDirectory + "/pages",
	dist_fonts: 			targetDirectory + "/fonts",
	dist_frame_style:  		targetDirectory + "/css",
	dist_skins_style:  		targetDirectory + "/css/skins",
	dist_url: 				targetDirectory,
	dist_html: 				targetDirectory + "/**/*.html",
	dist_js: 				targetDirectory + "/js",
	//dist_plugins: 			targetDirectory + "/plugins",
	dist_css: 				targetDirectory + "/css",
	dist_images: 			targetDirectory + "/images",
	dist_pic: 				targetDirectory + "/pic"
	// main_js: "main.js",
	// rev_css: "dist/rev/css"
};
//var ordinaryFileAry = [paths.src_html, paths.src_php, paths.src_json, paths.src_txt, paths.src_mp3];
var ordinaryFileAry = [paths.src_json, paths.src_txt, paths.src_mp3];
// 框架
gulp.task('framework', function() {
	// gulp.src(paths.src_plugins)
 //    .pipe(gulp.dest(paths.dist_plugins));
	return gulp.src(paths.src_framework)
    .pipe(gulp.dest(paths.dist_framework));
});
// 图片
gulp.task('images', function() {
	var isImagemin = !evr;
	return gulp.src(paths.src_images)
	//.pipe(gulpif(isImagemin, imagemin()))
	//.pipe(imagemin())
    .pipe(gulp.dest(paths.dist_images));
});
gulp.task('pic', function() {  
	return gulp.src(paths.src_pic)
    .pipe(gulp.dest(paths.dist_pic));
});
// 脚本
gulp.task('scripts', function() {
	return gulp.src([paths.src_js_total])
	.pipe(gulp.dest(paths.dist_js))
	.pipe(notify({ message: 'Scripts task complete' }));
});

// gulp.task('minify-css', function() {
//     return gulp.src('styles/*.css')
//         .pipe(cleanCSS({debug: true}, function(details) {
//             console.log(details.name + ': ' + details.stats.originalSize);
//             console.log(details.name + ': ' + details.stats.minifiedSize);
//         }))
//         .pipe(gulp.dest('dist'));
// });
// 处理样式
gulp.task('styles', function() {
	/*js内css start*/
	gulp.src([paths.src_js_less])
	.pipe(less())
	.pipe(autoprefixer('> 1%', 'IE 8'))
	.pipe(gulp.dest(paths.dist_js));
	gulp.src([paths.src_js_css])
	.pipe(gulp.dest(paths.dist_js));
	/*js内css end*/
	//处理less
	gulp.src([paths.src_less])
	.pipe(less())
	.pipe(autoprefixer('> 1%', 'IE 8'))
	.pipe(gulp.dest(paths.dist_css));
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
	/*字体处理 start*/
	gulp.src([paths.src_fonts])
	.pipe(gulp.dest(paths.dist_fonts));
	/*字体处理 end*/
	//处理普通css
	return gulp.src([paths.src_css])
	.pipe(gulp.dest(paths.dist_css));
});
// 一般文件处理 html php txt json mp3
gulp.task('ordinary-file', function() {
	var oPrefixUrl = fileConfig.oPrefixUrl;
	var prefixUrl;
	if ( evr ) {
		prefixUrl = oPrefixUrl.develop;
	} else {
		prefixUrl = oPrefixUrl.production;
	}
	// console.log(prefixUrl);
	gulp.src([paths.src_html, paths.src_php])
    .pipe(prefix(prefixUrl, [
		{ match: "script[src]", attr: "src" },
		{ match: "link[href]", attr: "href"},
		{ match: "img[src]", attr: "src"},
		{ match: "input[src]", attr: "src"}
	], '{{'))
    .pipe(gulp.dest(paths.dist_url));

    return gulp.src(ordinaryFileAry)
    .pipe(gulp.dest(paths.dist_url));
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
		paths.dist_js,
		paths.dist_html,
		paths.dist_css,
		paths.dist_images,
		paths.dist_pic,
		paths.dist_framework,
		//paths.dist_plugins,
		paths.dist_pages,
		paths.dist_fonts
	], {read: false})
	.pipe(clean());
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
gulp.task('build', ['clean'], function() {
	// var evr = argv.d || !argv.p; //开发环境为true，生产环境(发布环境)为false，默认为true
	// console.log(argv.p);
	// console.log(evr);
    gulpSequence(['scripts', 'styles', 'images', 'pic', 'framework'], 'ordinary-file')(function (err) {
    	if (err) console.log(err)
 	});
	// gulpSequence(['scripts', 'styles', 'images', 'pic'], 'ordinary-file')(function (err) {
 //    	if (err) console.log(err)
 // 	});
});
gulp.task('default',function () {
	//gulp.start('help');
	gulp.start('build');
});

// 看守
gulp.task('watch', function() {
	gulp.start('build');
	// 由于某些js控件或库的样式放置在js同空间名目录
	// 看守所有css档
	gulp.watch([paths.src_css, paths.src_less, paths.src_js_css, paths.src_js_less, paths.src_less_all, paths.src_fonts], function(event) {
		gulpSequence('styles', 'ordinary-file')(function (err) {
		if (err) console.log(err)
		});
	});

	// 看守所有.js档
	gulp.watch([paths.src_js], ['scripts']);
	// 看守所有图片档
	gulp.watch(paths.src_images, ['images']);
	gulp.watch(paths.src_pic, ['pic']);

	// 监听一般文件 html php txt json mp3
	gulp.watch(ordinaryFileAry.concat([paths.src_html, paths.src_php]), function(event) {
		//gulp.run('ordinary-file');
		gulpSequence('ordinary-file')(function (err) {
	    	if (err) console.log(err)
	 	});
	});

	// gulpSequence('a', 'b')(function (err) {
	//   if (err) console.log(err)
	// })
});































