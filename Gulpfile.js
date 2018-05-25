var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./scss/*.scss', gulp.series('sass'));
});

// var input = ['./scss/*.scss'];
// var output = './css';

// var sassOptions = {
//   errLogToConsole: true,
//   outputStyle: 'expanded'
// };

// gulp.task('sass', function () {
//   return gulp
//     .src(input)
//     .pipe(sass(sassOptions).on('error', sass.logError))
//     .pipe(autoprefixer())
//     .pipe(gulp.dest(output));
// });

// gulp.task('watch', function() {
//   gulp.watch(input).on('change', function() {
//   	gulp.parallel('sass');
//   });
// });

// // gulp.task('default', ['sass', 'watch']);

