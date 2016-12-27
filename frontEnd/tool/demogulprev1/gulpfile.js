var gulp = require('gulp');
var configJs = require('./gulpconfig').js;
var configRev = require('./gulpconfig').rev;
var rev = require('gulp-rev');
var revCollector = require("gulp-rev-collector");
var gulpsync = require('gulp-sync')(gulp);

gulp.task('js', function(){
    return gulp.src(configJs.src)
        .pipe(rev())  //set hash key
        .pipe(gulp.dest(configJs.dest))
        .pipe(rev.manifest()) //set hash key json
        .pipe(gulp.dest(configJs.rev)); //dest hash key json
});
gulp.task('rev', function() {
    return gulp.src([configRev.revJson, configRev.src])
    .pipe(revCollector({
        replaceReved: true
    }))
    .pipe(gulp.dest(configRev.dest));
});

gulp.task('default', gulpsync.sync(['clean', ['less', 'js'], 'rev', 'watch']));
gulp.task('deploy', gulpsync.sync(['clean', ['less-deploy', 'imagemin', 'uglify'], 'rev']));
// gulp.task('default', function() {
//     gulp.start('js');
// });