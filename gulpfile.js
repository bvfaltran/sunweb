var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

var input = './stylesheets/main.scss';

var pacificoOrigin = ['./assets/pacifico/*.eot','./assets/pacifico/*.svg','./assets/pacifico/*.ttf','./assets/pacifico/*.woff','./assets/pacifico/*.woff2'];
var forsdOrigin = ['./assets/forsd-folly/*.eot','./assets/forsd-folly/*.svg','./assets/forsd-folly/*.ttf','./assets/forsd-folly/*.woff','./assets/forsd-folly/*.woff2'];
var sansaProOrigin = ['./assets/sansa-pro/*.eot','./assets/sansa-pro/*.svg','./assets/sansa-pro/*.ttf','./assets/sansa-pro/*.woff','./assets/sansa-pro/*.woff2'];
var sansaProBoldOrigin = ['./assets/sansa-pro-bold/*.eot','./assets/sansa-pro-bold/*.svg','./assets/sansa-pro-bold/*.ttf','./assets/sansa-pro-bold/*.woff','./assets/sansa-pro-bold/*.woff2'];
var iconsOrigin = ['./assets/sunweb-icons/fonts/*.eot','./assets/sunweb-icons/fonts/*.svg','./assets/sunweb-icons/fonts/*.ttf','./assets/sunweb-icons/fonts/*.woff','./assets/sunweb-icons/fonts/*.woff2'];
var ywftOrigin = ['./assets/ywft-signature/*.eot','./assets/ywft-signature/*.svg','./assets/ywft-signature/*.ttf','./assets/ywft-signature/*.woff','./assets/ywft-signature/*.woff2'];

var output = './public/css';
var fontsTarget = './public/fonts';
var sassTarget = './stylesheets';


gulp.task('bundleFonts1', function () {
  return gulp
    .src(pacificoOrigin)
    .pipe(gulp.dest(fontsTarget));
});
gulp.task('bundleFonts2', function () {
  return gulp
    .src(forsdOrigin)
    .pipe(gulp.dest(fontsTarget))
});
gulp.task('bundleFonts3', function () {
  return gulp
    .src(sansaProOrigin)
    .pipe(gulp.dest(fontsTarget))
});
gulp.task('bundleFonts4', function () {
  return gulp
    .src(sansaProBoldOrigin)
    .pipe(gulp.dest(fontsTarget))
});
gulp.task('bundleFonts5', function () {
  return gulp
    .src(iconsOrigin)
    .pipe(gulp.dest(fontsTarget))
});
gulp.task('bundleFonts6', function () {
  return gulp
    .src(ywftOrigin)
    .pipe(gulp.dest(fontsTarget))
});

gulp.task('jquery', function () {
  return gulp
    .src('./bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./public/js'))
});
gulp.task('prefixfree', function () {
  return gulp
    .src('./bower_components/prefixfree/prefixfree.min.js')
    .pipe(gulp.dest('./public/js'))
});

gulp.task('bundleFonts', ['bundleFonts1', 'bundleFonts2', 'bundleFonts3', 'bundleFonts4', 'bundleFonts5', 'bundleFonts6']);
gulp.task('bundleJs', ['jquery', 'prefixfree']);
gulp.task('bundleAll', ['bundleJs', 'bundleFonts']);


gulp.task('default', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    // Run Sass on those files
    .pipe(sass())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(input, ['default']);
});
