/**
 * dependencies
 */
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    ts = require('gulp-typescript'),
    include = require('gulp-file-include'),
    htmlmin = require('gulp-htmlmin'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    browserSync = require('browser-sync');


var libs = {
    css: [
        './node_modules/font-awesome/css/font-awesome.min.css',
        './node_modules/mdb-ui-kit/css/mdb.min.css',
        './node_modules/bootstrap/dist/css/bootstrap.min.css'
    ],
    js: [
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js'
    ],
    fonts: [
        './node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
        './node_modules/font-awesome/fonts/fontawesome-webfont.woff',
        './node_modules/font-awesome/fonts/fontawesome-webfont.woff2',
    ]
};

/**
 *  html
 */
gulp.task('html', function() {
    return gulp.src('./src/*.html')
    .pipe(include({prefix: '@@'}))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('htmlWatch', function(){
    return gulp.watch('./src/**/*.html', gulp.series('html'));
});

gulp.task('htmlBuild', function() {
    return gulp.src('./src/*.html')
    .pipe(include({prefix: '@@'}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'));
});

/**
 * scss
 */
gulp.task('scss', function() {
    return gulp.src('./src/assets/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error ', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/assets/css/'))
    .pipe(browserSync.reload({stream: true}));
})

gulp.task('scssWatch', function() {
    gulp.watch('./src/assets/scss/**/*.scss', gulp.series('scss'));
});

gulp.task('scssBuild', function() {
    return gulp.src('./src/assets/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error ', sass.logError))
    .pipe(gulp.dest('./dist/assets/css/'));
});

/**
 * typescript
 */
gulp.task('typescript', function() {
    return gulp.src('./src/assets/ts/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./dist/assets/js/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('typescriptWatch', function() {
    gulp.watch('./src/assets/ts/**/*.ts', gulp.series('typescript'));
});

gulp.task('typescriptBuild', function() {
    return gulp.src('./src/assets/ts/**/*.ts')
    .pipe(ts())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/js/'));
});

/**
 * images
 */
gulp.task('copyImages', function() {
    return gulp.src('./src/assets/img/**/*')
    .pipe(gulp.dest('./dist/assets/img/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('copyImagesWatch', function() {
    gulp.watch('./src/assets/img/**/*', gulp.series('copyImages'));
});

/**
 * fonts
 */
gulp.task('copyFonts', function() {
    return gulp.src('./src/assets/fonts/**/*')
    .pipe(gulp.dest('./dist/assets/fonts/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('copyFontsWatch', function() {
    gulp.watch('./src/assets/fonts/**/*', gulp.series('copyFonts'));
});

/**
 * copy libs to dist
 */ 
gulp.task('copyLibsCSS', function() {
    return gulp.src(libs.css)
    .pipe(gulp.dest('./dist/assets/css/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('copyLibsJS', function() {
    return gulp.src(libs.js)
    .pipe(gulp.dest('./dist/assets/js/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('copyLibsFont', function() {
    return gulp.src(libs.fonts)
    .pipe(gulp.dest('./dist/assets/fonts/'))
    .pipe(browserSync.reload({stream: true}));
});

/**
 * services
 */

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'dist'
        },
        port: 3080,
		notify: false
	});
});


/**
 * custom commands
 */
gulp.task('clean', function() {
    return del('./dist');
});

gulp.task('serve',
    gulp.series(
        'clean',
        gulp.parallel(
            'html', 
            'scss', 
            'typescript', 
            'copyImages', 
            'copyFonts',
            'copyLibsCSS', 
            'copyLibsJS',
            'copyLibsFont'
            ),
            gulp.parallel(
                'htmlWatch',
                'scssWatch',
                'typescriptWatch',
                'copyImagesWatch',
                'copyFontsWatch',
                'browser-sync')
            
    )
);

gulp.task('build',
    gulp.series('clean',
        gulp.parallel(
            'htmlBuild', 
            'scssBuild', 
            'typescriptBuild', 
            'copyImages',
            'copyFonts',
            'copyLibsCSS', 
            'copyLibsJS',
            'copyLibsFont'
            ))
);