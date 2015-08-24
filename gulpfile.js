var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var reactify = require('reactify');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');


gulp.task('scripts', function () {

  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './app/main.js',
    debug: true,
    transform: [reactify]
  });

  return b.bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    // .pipe(sourcemaps.init({loadMaps: true}))
      // Add transformation tasks to the pipeline here.
    // .pipe(uglify())
    .on('error', gutil.log)
    // .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build'))
    .pipe(notify('JS compiled'));
});

gulp.task('css', function () {
    gulp.src('css/**/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('build'))
        .pipe(notify('CSS concatenated'));
});

gulp.task('watch', function() {
  gulp.watch('css/**/*.css', ['css']);
  gulp.watch('app/**/*.js', ['scripts']);
})

// Just running the two tasks
gulp.task('default', ['scripts', 'css', 'watch']);

