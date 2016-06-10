var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './stylesheets/**/*.scss';

var pacificoOrigin = ['./assets/pacifico/*.eot','./assets/pacifico/*.svg','./assets/pacifico/*.ttf','./assets/pacifico/*.woff','./assets/pacifico/*.woff2'];
var pacificoOriginStyles = './assets/pacifico/*.scss';
var forsdOrigin = ['./assets/forsd-folly/*.eot','./assets/forsd-folly/*.svg','./assets/forsd-folly/*.ttf','./assets/forsd-folly/*.woff','./assets/forsd-folly/*.woff2'];
var forsdOriginStyles = './assets/forsd-folly/*.scss';
var sansaProOrigin = ['./assets/sansa-pro/*.eot','./assets/sansa-pro/*.svg','./assets/sansa-pro/*.ttf','./assets/sansa-pro/*.woff','./assets/sansa-pro/*.woff2'];
var sansaProOriginStyles = './assets/sansa-pro/*.scss';
var sansaProBoldOrigin = ['./assets/sansa-pro-bold/*.eot','./assets/sansa-pro-bold/*.svg','./assets/sansa-pro-bold/*.ttf','./assets/sansa-pro-bold/*.woff','./assets/sansa-pro-bold/*.woff2'];
var sansaProBoldOriginStyles = './assets/sansa-pro-bold/*.scss';
var iconsOrigin = ['./assets/sunweb-icons/*.eot','./assets/sunweb-icons/*.svg','./assets/sunweb-icons/*.ttf','./assets/sunweb-icons/*.woff','./assets/sunweb-icons/*.woff2'];
var iconsOriginStyles = './assets/sunweb-icons/scss/*.scss';
var ywftOrigin = ['./assets/ywft-signature/*.eot','./assets/ywft-signature/*.svg','./assets/ywft-signature/*.ttf','./assets/ywft-signature/*.woff','./assets/ywft-signature/*.woff2'];
var ywftOriginStyles = './assets/ywft-signature/*.scss';

var output = './public/css';
var fontsTarget = './public/fonts';
var sassTarget = './stylesheets';

gulp.task('default', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    // Run Sass on those files
    .pipe(sass())
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(fontsTarget));
});

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
gulp.task('bundleStyles1', function () {
  return gulp
    .src(pacificoOriginStyles)
    .pipe(gulp.dest(sassTarget))
});
gulp.task('bundleStyles2', function () {
  return gulp
    .src(forsdOriginStyles)
    .pipe(gulp.dest(sassTarget))
});
gulp.task('bundleStyles3', function () {
  return gulp
    .src(sansaProOriginStyles)
    .pipe(gulp.dest(sassTarget))
});
gulp.task('bundleStyles4', function () {
  return gulp
    .src(sansaProBoldOriginStyles)
    .pipe(gulp.dest(sassTarget))
});
gulp.task('bundleStyles5', function () {
  return gulp
    .src(iconsOriginStyles)
    .pipe(gulp.dest(sassTarget))
});
gulp.task('bundleStyles6', function () {
  return gulp
    .src(ywftOriginStyles)
    .pipe(gulp.dest(sassTarget))
});

gulp.task('bundleStyles', ['bundleStyles1', 'bundleStyles2', 'bundleStyles3', 'bundleStyles4', 'bundleStyles5', 'bundleStyles6']);
gulp.task('bundleFonts', ['bundleFonts1', 'bundleFonts2', 'bundleFonts3', 'bundleFonts4', 'bundleFonts5', 'bundleFonts6']);


// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(input, ['default']);
});
