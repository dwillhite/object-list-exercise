const series = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

function css() {
  gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });
}

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

exports.default = series(css);

