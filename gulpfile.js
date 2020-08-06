
const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const { FALSE } = require('node-sass');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "C:/WebDeveloper/pulsars/src"
        }
    });

    
});

gulp.task('styles', function() {
    return gulp.src("C:/WebDeveloper/pulsars/src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("C:/WebDeveloper/pulsars/src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("C:/WebDeveloper/pulsars/src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));