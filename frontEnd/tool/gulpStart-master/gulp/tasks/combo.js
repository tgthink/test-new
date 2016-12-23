var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
//'imagemin', 'images', 
gulp.task('default', gulpsync.sync(['clean', ['less', 'js'], 'rev', 'watch']));

gulp.task('deploy', gulpsync.sync(['clean', ['less-deploy', 'uglify'], 'rev']));















