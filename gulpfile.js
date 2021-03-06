var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var paths = {
	sass: ['./scss/*.scss']
};

gulp.task('default', []);

gulp.task('watch', function () {
	gulp.watch(paths.sass, ['scss']);
});

gulp.task('scss', function (done) {
	gulp.src(paths.sass)
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(minifyCss({
			keepSpecialComments: 0
		}))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('./www/css/'))
		.on('end', done);
});

gulp.task('install', ['git-check'], function () {
	return bower.commands.install()
		.on('log', function (data) {
			gutil.log('bower', gutil.colors.cyan(data.id), data.message);
		});
});

gulp.task('git-check', function (done) {
	if (!sh.which('git')) {
		console.log(
		  '  ' + gutil.colors.red('Git is not installed.'),
		  '\n  Git, the version control system, is required to download Ionic.',
		  '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
		  '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
		);
		process.exit(1);
	}
	done();
});

gulp.task('ionic_sass', function (done) {
	gulp.src('./lib/ionic/scss/ionic.app.scss')
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(gulp.dest('./lib/ionic/css/'))
		.pipe(minifyCss({
			keepSpecialComments: 0
		}))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('./lib/ionic/css/'))
		.on('end', done);
});

gulp.task('ionic_css', ['ionic_sass'], function (done) {
	gulp.src('./lib/ionic/css/ionic.min.css')
		.pipe(gulp.dest('./www/lib/'))
		.on('end', done);
});

gulp.task('ionic_js', function (done) {
	gulp.src('./lib/ionic/js/ionic.bundle.min.js')
		.pipe(gulp.dest('./www/lib/'))
		.on('end', done);
});

gulp.task('ionic_fonts', function (done) {
	gulp.src('./lib/ionic/fonts/*.*')
		.pipe(gulp.dest('./www/fonts/'))
		.on('end', done);
});

gulp.task('ionic_copy', ['ionic_css', 'ionic_js', 'ionic_fonts']);

gulp.task('fontawesome_fonts', function (done) {
	gulp.src('./lib/fontawesome/fonts/*.*')
		.pipe(gulp.dest('./www/fonts/'))
		.on('end', done);
});

gulp.task('fontawesome_css', function (done) {
	gulp.src('./lib/fontawesome/css/font-awesome.min.css')
		.pipe(gulp.dest('./www/lib/'))
		.on('end', done);
});

gulp.task('fontawesome_copy', ['fontawesome_fonts', 'fontawesome_css']);

gulp.task('copy_libs', ['ionic_copy', 'fontawesome_copy']);