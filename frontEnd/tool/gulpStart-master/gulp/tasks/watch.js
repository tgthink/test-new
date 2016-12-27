var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');
var gulpSequence = require('gulp-sequence');	//制定了task的执行顺序

gulp.task('watch', function() {
	watch(config.less.all, function(){	//监听所有less
		//gulp.start(['less', 'rev']);	//出现修改、立马执行less任务
		//gulpSequence();
		gulpSequence(['less'], 'rev')(function (err) {
	    	if (err) console.log(err)
	 	});
	});
	watch(config.images.src, function(){	//监听所有image
		gulp.start('images');
	});
	watch(config.js.src, function(){	//监听所有js
		gulp.start(['js', 'rev']);
		//gulp.start('rev');
	});
	watch(config.rev.src, function(){	//监听所有js
		gulp.start('rev');
	});
})















