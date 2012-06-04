/*global module:false*/
module.exports = function(grunt){

    // Project configuration.
    grunt.initConfig({
		pkg: '<json:package.json>',
        meta: {
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
        },
        lint: {
            files: ['js/helper1.js', 'js/helper2.js']
        },
        //qunit: {
        //   files: ['test/**/*.html']
        //},
        concat: {
            dist: {
                src: ['js/helper1.js', 'js/helper2.js'],
                dest: 'js/helper.cat.js'
            }
        },
        min: {
            dist: {
                src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
                dest: 'js/helper.min.js'
            }
        },
        watch: {
            files: '<config:lint.files>',
            tasks: 'lint'
        },
        jasmine: {
            all: {
                src: ['tests/test.html'],
                timeout: 20000 //in milliseconds
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: false,
                boss: true,
                eqnull: true,
                browser: true
            },
            globals: {
                jQuery: true
            }
        },
        uglify: {}
    });
    
    // Default task.
	grunt.loadNpmTasks('grunt-jasmine-task'); 
	grunt.registerTask('default', 'lint jasmine concat min');
	   
};
