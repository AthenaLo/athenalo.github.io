var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

gulp.task('css', function() {
  return gulp.src(['./sass/**/*.scss', '!./sass/**/_*.scss'])
             .pipe(sass())
	     .pipe(cleanCSS({compatibility: 'ie8'}))
	     .pipe(gulp.dest('./css'));
});

gulp.task('html', function() {
  var templateData = {}
  var options = {
    batch: ['./handlebars/partials']
  }
  return gulp.src(['./handlebars/**/*.hbs', '!./handlebars/partials/*'])
	     .pipe(handlebars(templateData, options))
	     .pipe(rename(function(path) {
	     	path.extname = ".html";
	      }))
	     .pipe(gulp.dest('./'));
});

var paths = {
  css: './sass/**/*.scss',
  html: './handlebars/**/*.hbs'
};

gulp.task('watch', function() {
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['watch', 'css', 'html']);
