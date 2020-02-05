var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var route = "assets";

var config = {
	dev: {
		sass: {
            precision: 6,
            outputStyle: 'expanded'
		},
        autoprefixer: {
            add: false,
            browsers: ['> 3%', 'last 2 versions', 'ie > 9', 'ios > 5', 'android > 3'],
            cascade: true
		}
	}
};

/**********************************************************/
/************************ DEFAULT *************************/
/**********************************************************/

gulp.task('default', ['sass-to-css', 'watch']);

gulp.task('sass-to-css', function() {
	return gulp.src(route + '/scss/**/*.scss')
    	.pipe(sass(config.dev.sass).on('error', sass.logError))
		.pipe(autoprefixer(config.dev.autoprefixer))
    	.pipe(gulp.dest(route + '/css'));
});

gulp.task('watch', function () {
	gulp.watch(route + '/scss/**/*.scss', ['sass-to-css']);
});
