'use strict';
const gulp = require('gulp');

// SCSS / CSS operations
// run sass
const sass = require('gulp-sass');
// minify css
const postCSS = require('gulp-postcss');
// prefixer for css
const autoprefixer = require('gulp-autoprefixer');
// 
const critical = require('critical');

// sourcemaps for CSS & JS
const sourcemaps = require('gulp-sourcemaps');

// Javascript
// concactenate all the JS
const concat = require('gulp-concat');

// babel js
const babel = require('gulp-babel');

// uglify js
const uglify = require('gulp-uglify');
const pump = require('pump');

// minify the html
const htmlmin = require('gulp-htmlmin');

// utility to delete stuff
const del = require('del');

// utility for listing all the defined tasks
const tasks = require('gulp-task-listing');

//
// Options
//
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


// Performance workflow plugins
//var concat = require('gulp-concat');
//var mincss = require('gulp-minify-css');

var uncss = require('gulp-uncss');
//var uglify = require('gulp-uglify');




const paths = {
  root: 'themes/blank',
  src: {
    styles: ['themes/blank/src/sass/**/*.scss'],
    scripts: ['themes/blank/src/js/**/*.js', 'the'],
  },
  dev: {
    styles: ['themes/blank/static/css/'],
    scripts: ['themes/blank/static/js/'],
  },
  prod: {
    styles: [],
    scripts: [],
  }
};

///
/// Tasks
///


// set up the SASS task:
gulp.task('sass', () => gulp
  .src(paths.styles.source)
  .pipe(sass())
  .pipe(autoprefixer(autoprefixerOptions))
  .pipe(sourcemaps.init())
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(paths.styles.development)));

///
/// Watch
///

///
/// Build
///


//
// override the default `gulp` command and send a list of all the available commands
//
gulp.task('help', tasks);
gulp.task('default', ['help']);