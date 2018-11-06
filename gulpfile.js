'use strict';
const gulp = require('gulp');

const sass = require('gulp-sass');

const sourcemaps = require('gulp-sourcemaps');

const autoprefixer = require('gulp-autoprefixer');

const concat = require('gulp-concat');

// const uglify = require('gulp-uglify');

const imagemin = require('gulp-imagemin');

// variables:
const input = 'themes/blank/src/sass/**/*.scss';
const output = 'themes/blank/static/css';

const jsInput = 'themes/blank/src/js/**/*.js';
const jsOutput = 'themes/blank/static/js';

const imgInput = 'themes/blank/images/**/*.*';
const imgOutput = 'themes/blank/static/images';

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};

const autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};



// gulp tasks:
gulp.task('js', function (){
  return gulp.src(jsInput)
  .pipe(concat('main.js'))
  //.pipe(uglify())
  .pipe(gulp.dest(jsOutput));
});

gulp.task('sass', function (){
  return gulp.src(input)
  .pipe(sass())
  .pipe(autoprefixer(autoprefixerOptions))
  .pipe(sourcemaps.init())
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(output));
});

gulp.task('copy', function(){
  gulp.src(imgInput)
    .pipe(gulp.dest(imgOutput));
});

// gulp.task('images', function(){
//   return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
//   .pipe(imagemin())
//   .pipe(gulp.dest('dist/images'))
// });

gulp.task('watch', function () {
  gulp.watch('themes/blank/src/sass/**/*.scss', ['sass']);
  gulp.watch('themes/blank/src/js/**/*.js', ['js']);
  gulp.watch('themes/blank/images/**/*.*', ['copy']);
});

gulp.task('default', ['copy', 'sass', 'js', 'watch']);
