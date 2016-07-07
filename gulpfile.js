// // var gulp = require('gulp');
// // var connect = require('gulp-connect'); //Runs a local dev server
// // var open = require('gulp-open'); //Open a URL in a web browser
// var browserify = require('browserify'); // Bundles JS
// var reactify = require('reactify');  // Transforms React JSX to JS
// var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
// // var concat = require('gulp-concat'); //Concatenates files
//
// var gulp = require('gulp');
// var babel = require('gulp-babel');
// var concat = require('gulp-concat');
// var sass = require('gulp-sass');
//
// var config = {
//     port: 9005,
//     devBaseUrl: 'http://localhost',
//     paths: {
//         html: './src/*.html',
//         js: './src/**/*.js',
//         css: [
//             './src/styles/*.css'
//         ],
//         dist: './dist',
//         mainJs: './src/index.js'
//     }
// };
//
// gulp.task('es6', function () {
//     return gulp.src('./src/**/*.js')
//         .pipe(babel({
//             "presets": ['es2015']
//         }))
//         .pipe(gulp.dest('dist'))
//         //.pipe(concat('bundle.js'))
//
// });
//
// gulp.task('js', function() {
//     browserify('./dist/index.js')
//         //.transform(reactify)
//         .bundle()
//         .on('error', console.error.bind(console))
//         //.pipe(source('bundle.js'))
//         .pipe(gulp.dest('dist'))
//
// });
//
//
//
// gulp.task('sass', function () {
//     return gulp.src('./src/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('css'))
// })
//
//
// gulp.watch('./src/styles/*.scss', ['sass'])
// gulp.watch('./src/**/*.js', ['es6'])
//
// gulp.task('default', ['es6', 'js', 'sass'])


var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');

function compile(watch) {
    var bundler = watchify(browserify('./src/index.js', { debug: true }).transform(babel));

    function rebundle() {
        bundler.bundle()
            .on('error', function(err) { console.error(err); this.emit('end'); })
            .pipe(source('build.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./build'));
    }

    if (watch) {
        bundler.on('update', function() {
            console.log('-> bundling...');
            rebundle();
        });
    }

    rebundle();
}

function watch() {
    return compile(true);
};

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });

gulp.task('default', ['watch']);