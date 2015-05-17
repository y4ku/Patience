var gulp = require('gulp'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass');
 
gulp.task('webserver', function() {
  connect.server({
  	root: 'app',
  	livereload: true
  });
});

gulp.task('browserify', function() {
    browserify('./app/src/js/app.js').on('error', errorHandler)
    .transform('reactify', { 'es6': true }).on('error', errorHandler)
    .bundle().on('error', errorHandler)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('sass', function() {
    gulp.src('./app/src/scss/**/*.scss')
        .pipe(sass()).on('error', errorHandler)
        .pipe(gulp.dest('./app/dist'));
});
 
gulp.task('html', function () {
    gulp.src('./app/*.html').pipe(connect.reload());
});

gulp.task('js', function () {
    gulp.src('./app/dist/**/*.js').pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src('./app/dist/**/*.css').pipe(connect.reload());
});


gulp.task('watch', function() {
    gulp.watch('./app/index.html', ['html']);
    gulp.watch('./app/dist/**/*.js', ['js']);
    gulp.watch('./app/dist/**/*.css', ['css']);
    gulp.watch('./app/src/**/*.scss', ['sass']);
    gulp.watch('./app/src/**/*.js', ['browserify']).on('error', errorHandler);
})

 
gulp.task('default', ['browserify', 'sass', 'webserver', 'watch']).on('error', errorHandler);

// Handle the error
function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}