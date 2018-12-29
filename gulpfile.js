const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

sass.compiler = require('node-sass')

gulp.task('sass', () => {
    return gulp.src('./app/assets/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'))
})

gulp.task('watch', () => {
    gulp.watch('./app/assets/scss/*.scss', gulp.series('sass'))
})

gulp.task('default', gulp.series('sass', 'watch'))