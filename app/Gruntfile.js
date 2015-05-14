'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concurrent: {
      dev: {
        tasks   : ['nodemon', 'watch'],
        options : {
          logConcurrentOutput: true
        }
      }
    },
    nodemon: {
      dev: {
        script: 'app/server/web.js',
        options : {
          ignore : ['node_modules/**']
        }
      }
    },
    sass: {
      dist: {
        files: [
          {
            expand : true,
            cwd    : 'app/src/scss',
            src    : 'style.scss',
            dest   : 'app/public/css',
            ext    : '.css'
          }
        ]
      }
    },
    watch: {
      sass: {
        files : ['app/src/scss/**/*.scss'],
        tasks : ['sass'],
        options: {
          livereload: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', ['sass', 'concurrent']);
};