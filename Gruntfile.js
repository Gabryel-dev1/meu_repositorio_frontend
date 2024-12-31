const uglify = require("grunt-contrib-uglify");

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'style.css': 'style.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'style.css': 'style.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'main.min.js': ['main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['less', 'uglify']);
};