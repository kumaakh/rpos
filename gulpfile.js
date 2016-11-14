var gulp = require('gulp'),
    rename = require('gulp-rename'),
    zip = require('gulp-zip'),
    pkg = require('./package.json'),
    ts = require('gulp-typescript'),
    typings = require('typings'),
    runSequence = require('run-sequence'),
    sourcemaps = require('gulp-sourcemaps'),
    ip = require('ip');

const spawn = require('child_process').spawn;

var version = 'rpos-' + pkg.version;
var releaseDir = 'release/' + version;

// Run task: serve node server after calling default task compiling all the ts files; Use this.
gulp.task('run', function(cb) {
    runSequence('default', 'serve', cb);
});

// Serve task: serve node server by calling rpos.js
gulp.task('serve', function(cb) {
    spawn('node', ['rpos.js'], { stdio: 'inherit' });
});

//Default task: runs the typings and compile task, started when running "gulp" without any parameters.
gulp.task('default', function(cb) {
    runSequence('typings', 'compile', cb);
});

//Compile task: compiles all .ts files to .js and generates sourcemaps to aid in debugging.
gulp.task('compile', function() {
    return gulp.src(["**/*.ts", "!./node_modules/**/*", "!./typings/**/*"])
        .pipe(sourcemaps.init())
        .pipe(ts('tsconfig.json'))
        .js
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./"));
});

//Typings task: Downloads all type definitions used for development.
gulp.task('typings', function(done) {
    var cwd = process.cwd();
    typings.install({ cwd: cwd, production: false }).then(function(result) {
        done();
    })
});

//Release task: generates a release package.
gulp.task('release', ['copy-release-js', 'copy-release-bin', 'copy-release-modules', 'copy-release-views',
    'copy-release-web', 'copy-release-wsdl', 'copy-release-config'
], function() {
    return gulp.src([releaseDir + '/**/*', releaseDir + '/*.zip'])
        .pipe(zip(version + '.zip'))
        .pipe(gulp.dest('release'));
});

// --- all partial taks to generate a release.
gulp.task('copy-release-js', function() {
    return gulp.src(['**/*.js', '!release/**', '!gulpfile.js', 'README.md', 'package.json', '!node_modules/gulp*/**'])
        .pipe(gulp.dest(releaseDir));
});
gulp.task('copy-release-config', function() {
    return gulp.src('rposConfig.release.json')
        .pipe(rename("rposConfig.json"))
        .pipe(gulp.dest(releaseDir));
});
gulp.task('copy-release-bin', function() {
    return gulp.src('bin/*')
        .pipe(gulp.dest(releaseDir + '/bin'));
});
gulp.task('copy-release-modules', function() {
    return gulp.src(['node_modules/**/*', '!node_modules/gulp*/**', '!node_modules/gulp**'])
        .pipe(gulp.dest(releaseDir + '/node_modules'));
});
gulp.task('copy-release-views', function() {
    return gulp.src('views/**/*')
        .pipe(gulp.dest(releaseDir + '/views'));
});
gulp.task('copy-release-web', function() {
    return gulp.src('web/**/*')
        .pipe(gulp.dest(releaseDir + '/web'));
});
gulp.task('copy-release-wsdl', function() {
    return gulp.src('wsdl/**/*')
        .pipe(gulp.dest(releaseDir + '/wsdl'));
});