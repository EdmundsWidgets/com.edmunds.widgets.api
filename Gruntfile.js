module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // https://github.com/gruntjs/grunt-contrib-jshint
        jshint: {
            options: {
                jshintrc: true
            },
            grunt: {
                src: ['Gruntfile.js']
            },
            dev: {
                src: ['src/**/*.js']
            },
            test: {
                src: ['test/**/*.js']
            }
        },

        // https://github.com/brandonramirez/grunt-jsonlint
        jsonlint: {
            pkg: {
                src: ['package.json']
            },
            bower: {
                src: ['bower.json']
            },
            jshintrc: {
                src: [
                    'src/.jshintrc',
                    'test/unit/.jshintrc'
                ]
            }
        },

        // https://github.com/gruntjs/grunt-contrib-qunit
        qunit: {
            all: ['test/*.html']
        },

        // https://github.com/gruntjs/grunt-contrib-watch
        watch: {
            // javascript files
            grunt: {
                files: ['<%= jshint.grunt.src %>'],
                tasks: ['jshint:grunt']
            },
            dev: {
                files: ['<%= jshint.dev.src %>'],
                tasks: ['jshint:dev']
            },
            test: {
                files: ['<%= jshint.test.src %>'],
                tasks: ['jshint:test']
            },
            // json files
            pkg: {
                files: ['<%= jsonlint.pkg.src %>'],
                tasks: ['jsonlint:pkg']
            },
            bower: {
                files: ['<%= jsonlint.bower.src %>'],
                tasks: ['jsonlint:bower']
            },
            jshintrc: {
                files: ['<%= jsonlint.jshintrc.src %>'],
                tasks: ['jsonlint:jshintrc']
            }
        }

    });

    // plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsonlint');

    // tasks
    grunt.registerTask('default', 'watch');

    grunt.registerTask('test', [
        'jsonlint',
        'jshint',
        'qunit'
    ]);

};
