const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

function compilaSass(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(
        {outputStyle: 'compressed'}))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}


function padrao(callback){
    console.log('executando via gulp');
    callback();
}

function olaMudo(){
    console.log('hello wolrd...');
    olaMudo();
    callback();
}
function comprime(){
    return gulp.src('/source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}



exports.default = gulp.series(padrao,olaMudo);
exports.sass = compilaSass;

exports.watch = function(){
    gulp.watch('./source/styles/*.scss', gulp.series(compilaSass))
}
exports.javascript = comprime;