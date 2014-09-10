module.exports = function(grunt) {

  // Default task(s).
  grunt.registerTask('test', 'just a test task', function(){
    var a = 2;
    var b = 3;
    var c = a + b;
    grunt.log.write("Sum is " + c);
  });

};