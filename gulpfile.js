'use strict';
//Llamar plugins necesarios
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');
//Configuración de la función SASS
gulp.task('sass', function() {
	return gulp.src('./css/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css'));
}); 
//Configuración de sass:watch para vigilar archivos
gulp.task('sass:watch', function() {
	gulp.watch('./css/*.scss', ['sass']);
});

gulp.task('browser-sync', function () {
   var files = [
      './*.html',
      './css/*.css',
      './img/*.{png,jpg,gif}',
      './js/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: "./"
      }
   });

});

// Default task
gulp.task('default', ['browser-sync'], function() {
    gulp.start('sass:watch');
});
