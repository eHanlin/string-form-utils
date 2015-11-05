var gulp = require('gulp');
var mocha = require('gulp-mocha');
var uglify = require('gulp-uglify');
var header = require('gulp-header');
var del = require('del');
var pack = require('./package.json');

gulp.task('clean', function(cb) {
  return del(['dist'], cb);
});

gulp.task('test', function () {
  return gulp.src('tests/test.js', {read: false})
         .pipe(mocha({reporter: 'spec'}));
});

gulp.task('build', ['clean', 'test'], function(){
  return gulp.src([pack.main])
         .pipe(uglify())
         .pipe(header('//author: <%= author %>\n//verion: <%= version %>\n',{author:pack.author,version:pack.version}))
         .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build']);

