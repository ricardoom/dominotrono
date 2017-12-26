'use strict';
const gulp = require('gulp');

const sass = require('gulp-sass');

const sourcemaps = require('gulp-sourcemaps');

//const autoprefixer = require('gulp-autoprefixer');

// variables:
const input = 'themes/blank/src/sass/**/*.scss';
const output = 'themes/blank/static/css';

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

const autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};
// gulp tasks:

gulp.task('sass', function () {
  return gulp.src(input)
  .pipe(sass())
  .pipe(autoprefixer(autoprefixerOptions))
  .pipe(sourcemaps.init())
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(output));
});

gulp.task('watch', function () {
  gulp.watch('themes/blank/src/sass/**/*.scss', ['sass']);

});

gulp.task('default', ['sass', 'watch']);
