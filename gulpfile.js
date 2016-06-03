var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './stylesheets/**/*.scss';
var output = './public/css';

gulp.task('default', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    // Run Sass on those files
    .pipe(sass())
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(input, ['default']);
});
