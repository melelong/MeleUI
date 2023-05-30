const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-minify-css');

gulp.task('sass', async () => gulp.src('examples/assets/theme-chalk/**/*.scss')
  .pipe(sass())
  .pipe(minifyCSS())
  .pipe(gulp.dest('dist/theme-chalk')));
gulp.task('fonts', async () => gulp.src('examples/assets/theme-chalk/fonts/**/*')
  .pipe(gulp.dest('dist/theme-chalk/fonts')));
