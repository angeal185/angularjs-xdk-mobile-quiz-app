var gulp = require('gulp');
var  connect = require('gulp-connect');
var  stylus = require('gulp-stylus');
 
gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});
 
gulp.task('stylus', function () {
  //gulp.src('./app/stylus/*.styl')	//development
  gulp.src('./app/stylus/production/final.styl')  //production
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./app/css'))
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  //gulp.watch(['./app/stylus/*.styl'], ['stylus']);	//development
  gulp.watch(['./app/stylus/production/final.styl'], ['stylus']);	//production
});
 
gulp.task('default', ['stylus', 'watch', 'connect']);