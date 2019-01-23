'use strict';
var gulp = require('gulp');

var sass = require('gulp-sass');

var sourcemaps = require('gulp-sourcemaps');

var autoprefixer = require('gulp-autoprefixer');

var concat = require('gulp-concat');

var babel = require('gulp-babel');

var uglify = require('gulp-uglify');

var pump = require('pump');

//var imagemin = require('gulp-imagemin');

// variables:
var input = 'themes/blank/src/sass/**/*.scss';
var output = 'themes/blank/static/css';

var jsInput = 'themes/blank/src/js/**/*.js';
var jsOutput = 'themes/blank/static/js';

var imgInput = 'themes/blank/images/**/*.*';
var imgOutput = 'themes/blank/static/images';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed',
};

var autoprefixerOptions = {
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
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(gulp.dest(jsOutput));
});

// gulp.task('default', () =>
// gulp.src('src/app.js')
// .pipe(babel({
// presets: ['@babel/env']
// }))
// .pipe(gulp.dest('dist'))
// );

// Compress using uglify
gulp.task('compress', function(cb) {
  pump([gulp.src(jsInput), uglify(), gulp.dest(jsOutput)], cb);
});

// Concact all the files:
gulp.task('js', function() {
  return (
    gulp
      .src(jsInput)
      .pipe(concat('main.js'))
      //.pipe(uglify())
      .pipe(gulp.dest(jsOutput))
  );
});

gulp.task('sass', function() {
  return gulp
    .src(input)
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(output));
});

gulp.task('copy', function() {
  gulp.src(imgInput).pipe(gulp.dest(imgOutput));
});

// gulp.task('images', function(){
//   return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
//   .pipe(imagemin())
//   .pipe(gulp.dest('dist/images'))
// });

gulp.task('watch', function() {
  gulp.watch('themes/blank/src/sass/**/*.scss', ['sass']);
  gulp.watch('themes/blank/src/js/**/*.js', ['js']);
  gulp.watch('themes/blank/images/**/*.*', ['copy']);
});

gulp.task('default', ['copy', 'sass', 'js', 'watch']);
