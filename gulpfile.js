'use strict';
const gulp = require('gulp');

const sass = require('gulp-sass');

const sourcemaps = require('gulp-sourcemaps');

const autoprefixer = require('gulp-autoprefixer');

const concat = require('gulp-concat');

const uglify = require('gulp-uglify');


// variables:
const input = 'themes/blank/src/sass/**/*.scss';
const output = 'themes/blank/static/css';
const jsInput = 'themes/blank/src/js/**/*.js';
const jsOutput = 'themes/blank/static/js';

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};

const autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};
// gulp tasks:
gulp.task('js', function () {
  return gulp.src(jsInput)
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest(jsOutput));
});

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
  gulp.watch('themes/blank/src/js/**/*.js', ['js']);
});

gulp.task('default', ['sass', 'js', 'watch']);
