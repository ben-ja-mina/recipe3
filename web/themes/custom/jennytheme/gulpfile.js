var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('jennytheme/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('jennytheme/css'))
})