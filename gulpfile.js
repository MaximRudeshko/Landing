"use strict";

const gulp = require("gulp");
const sass = require('gulp-sass');
const browserSync = require("browser-sync");

const dist = './dist/'

gulp.task('copy-html', () => {
  return gulp.src('./src/index.html')
              .pipe(gulp.dest(dist))
              .pipe(browserSync.stream())
              .on('end', browserSync.reload)
})

gulp.task('compille-sass', () => {
    return gulp.src('./src/assets/scss/*.*')
                .pipe(sass())
                .pipe(gulp.dest('./src/assets/css'))
                .on('end', browserSync.reload)
})

gulp.task('copy-assets', () => {
    return gulp.src('./src/assets/**/*.*')
                .pipe(gulp.dest(dist + '/assets'))
                .on('end', browserSync.reload)
})



gulp.task('watch', () => {
    browserSync.init({
        server: './dist/',
        port: 4000,
        notify:true
    })

    gulp.watch('./src/index.html', gulp.parallel('copy-html'))
    gulp.watch('./src/assets/scss/*.*', gulp.parallel('compille-sass'))
    gulp.watch("./src/assets/**/*.*", gulp.parallel("copy-assets"));

})

gulp.task('build', gulp.parallel("copy-html", 'compille-sass', 'copy-assets'))



gulp.task('default', gulp.parallel('watch', 'build'))