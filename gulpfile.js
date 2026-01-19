const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imageMin = require('gulp-imagemin');

function compilaSass(){
    return gulp.src('./source/style/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        style: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/style'));
}

function comprimeJs(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'));

}

function comprimeImagem(){
    return gulp.src('./source/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('./build/images'));
}
 
exports.default = gulp.series(compilaSass, comprimeJs, comprimeImagem);