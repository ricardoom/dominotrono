'use strict';
const gulp = require('gulp');

const sass = require('gulp-sass');

const sourcemaps = require('gulp-sourcemaps');

const autoprefixer = require('gulp-autoprefixer');

const concat = require('gulp-concat');

const babel = require('gulp-babel');

const uglify = require('gulp-uglify');

const pump = require('pump');

//const imagemin = require('gulp-imagemin');

//
const input = 'themes/blank/src/sass/**/*.scss';
const output = 'themes/blank/static/css';

const jsInput = 'themes/blank/src/js/**/*.js';
const jsOutput = 'themes/blank/static/js';

const imgInput = 'themes/blank/images/**/*.*';
const imgOutput = 'themes/blank/static/images';

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed',
};

const autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR'],
};

const babelOptions = {
  presets: ['@babel/env'],
};

//
// gulp javascript tasks:
//

// gulp Babel:
gulp.task('babel', () => {
  gulp
    .src(jsInput)
    .pipe(babel(babelOptions))
    .pipe(gulp.dest(jsOutput));
});

// Concact all the files:
gulp.task('js', ['babel'], () => {
  return (
    gulp
      .src(jsInput)
      .pipe(concat('main.js'))
      //.pipe(uglify())
      .pipe(gulp.dest(jsOutput))
  );
});

// Compress using uglify
gulp.task('compress', function (cb) {
  pump([gulp.src(jsInput), uglify(), gulp.dest(jsOutput)], cb);
});

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(output));
});

gulp.task('copy', function () {
  gulp.src(imgInput).pipe(gulp.dest(imgOutput));
});

gulp.task('watch', function () {
  gulp.watch('themes/blank/src/sass/**/*.scss', ['sass']);
  gulp.watch('themes/blank/src/js/**/*.js', ['js']);
  gulp.watch('themes/blank/images/**/*.*', ['copy']);
});

gulp.task('default', ['copy', 'sass', 'js', 'watch']);
