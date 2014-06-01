module.exports = function( grunt ){
	grunt.initConfig({
		"pkg": {
            "name": "resume",
            "files": function(){
                var files = grunt.file.expand(
                    {
                        cwd: 'js/src/'
                    },
                    [
                        'events/*.js',
                        'routers/*.js',
                        'controllers/*.js'
                    ]
                ),
                newFiles = [];

                for( var i = 0; i < files.length; i++ ){
                    newFiles[ i ] = files[ i ].replace( ".js", "" );
                }

                return newFiles;
            }()
        },
        "bower": {
            "install":{
                "options":{
                    "layout": "byComponent",
                    "targetDir": "./vendor",
                    "cleanBowerDir": true,
                    "verbose": true
                }
            }
        },
        "copy": {
            "main": {
                "files": [
                    {
                        "expand": true,
                        "src": ['**'],
                        "dest": 'js/build/',
                        "cwd": 'js/src/'
                    }
                ]
            },
            "vendor": {
            	"files": [
            		{
            			"expand": true, 
			            "cwd": 'vendor/intro/', 
			            "src": ['*.css'], 
			            "dest": 'style/sass/external/intro/', 
			            "rename": function(dest, src) {
			            	return dest + "_" + src.substring(0, src.indexOf('.css')) + '.scss';
			            }
            		}
            	]
            }
        },
        "replace": {
            "dev-root": {
                "src": ['index.html-preformat'],
                "dest": 'index.html',
                "replacements": [
                    {
                        "from": '@@application-main@@',
                        "to": "bootstrap"
                    }
                ]
            }
        },
        "sass": {
            "compile": {
                "options": {
                    "style": 'expanded'
                },
                "files": {
                    "style/screen.css": "style/sass/screen.scss"
                }
            }
        },
        "cssmin": {
        	"default": {
        		"files": {
			    	'style/screen.min.css': ['style/screen.css']
			    }
        	}
        },
        "watch": {
            "scripts": {
                "files": ['js/src/**/*.js', 'js/test/**/*.js', 'style/**/*.scss', 'Gruntfile.js', 'index.html-preformat'],
                "tasks": ['build']
            }
        }
	});

	// manual tasks
	grunt.registerTask( 'clean', "Wipe the build directory", function(){
		grunt.file.delete( "./js/build" );
        grunt.file.mkdir( "./js/build" );
	});

	grunt.registerTask( 'prepare', "Prepare directory structure for anything necessary", function(){
        grunt.task.run( ['clean'] );
        grunt.file.mkdir( "./vendor" );
    });

	// grunt-contrib Npm tasks
	grunt.loadNpmTasks( 'grunt-contrib-requirejs' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-copy' );
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );

    // other Npm tasks
    grunt.loadNpmTasks( 'grunt-text-replace' );
    grunt.loadNpmTasks( 'grunt-bower-task' );

    // aliases
    grunt.registerTask( 'default', ['build', 'watch'] );
    grunt.registerTask( 'setup', ['prepare', 'bower:install'] );

    grunt.registerTask( 'build', [
    	'copy',
    	'replace:dev-root',
    	'sass:compile',
    	'cssmin'
    ]);
};