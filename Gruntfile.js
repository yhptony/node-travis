/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    jshint: {
      files: ['server.js'],
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
   
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task.  
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('travis', ['jshint']);
};
