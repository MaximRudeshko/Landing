"use strict";

const gulp = require("gulp");
const sass = require('gulp-sass');

const dist = './dist/'

gulp.task('copy-html', () => {
  return gulp.src('./src/index.html')
              .pipe(gulp.dest(dist))

})

gulp.task('compille-sass', () => {
    return gulp.src('./src/assets/scss/*.*')
                .pipe(sass())
                .pipe(gulp.dest('./src/assets/css'))
})

gulp.task('copy-assets', () => {
    return gulp.src('./src/assets/**/*.*')
                .pipe(gulp.dest(dist + '/assets'))
})


gulp.task('default', gulp.parallel('copy-html', 'copy-assets', 'compille-sass'))