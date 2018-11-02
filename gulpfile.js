const   gulp        = require('gulp'),
        sass        = require('gulp-sass'),
        pug         = require('gulp-pug'),
        browserSync = require('browser-sync');


gulp.task('sass', function() {
    const header_sass = gulp.src('src/blocks/01-header-sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('src/blocks/01-header/header-css'))
        .pipe(browserSync.reload({ stream: true }));

    const header_media_sass = gulp.src('src/blocks/01-header/header-sass/header-media/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('src/blocks/01-header/header-css/header-media'))
        .pipe(browserSync.reload({ stream: true }));

    const main_sass = gulp.src('src/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('pug', function () {

    gulp.src('src/index/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('src/'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'src/'
        },
        notify: false
    });
});

gulp.task('watch', ['browserSync', 'pug', 'sass'], function () {
    gulp.watch('src/blocks/**/*.sass', ['sass']);
    gulp.watch('src/**/*.pug', ['pug']);
});