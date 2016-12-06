
// importer les modules NPM
var gulp = require('gulp');
var babel = require('gulp-babel');
var babelify = require('babelify');
var transform = require('vinyl-transform');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

// Config of project folders
    var config = {
        desDir:    './dist' /* répértoire de destination (prod) */
    }

// Task to build JS files
    gulp.task("build-js", function(){

      return browserify("dev/app/app.js",{
                 debug: true
             })
             .transform(babelify.configure({
                 presets : ["es2015"]
             }))
             .bundle()
             .pipe(source("bundle.js"))
             .pipe(gulp.dest(config.desDir + '/js'));
    });
