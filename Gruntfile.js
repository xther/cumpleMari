module.exports=function(grunt){
	require ('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		express: {
			all: {
				options: {
					port: 9000,
					livereload: true,
					bases: ['public']
				}
			}
		},
		watch: {
			all: {
				files: 'public/**',
				options: {
					livereload: true
				}
			}
		}


	});


	grunt.registerTask('default', ['express', 'watch']);
};
