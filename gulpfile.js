var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('default', function (){
  return gulp.src('imgsrc/*')
    .pipe(imagemin({progressive: true, use: [pngquant()]}))
    .pipe(gulp.dest('imgmin'));
});