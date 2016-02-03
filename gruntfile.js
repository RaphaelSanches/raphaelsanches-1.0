// My first workflow
// Raphael Sanches - 2015


module.exports = function( grunt ) {
 
  grunt.initConfig({
    // Tasks que o Grunt deve executar

    uglify : {
    	options: {
    		mangle: false
    	},
    
    	my_target : {
    		files : {
          'assets/js/script-min.js' : ['src/js/*.js'], // arquivo minificado [ arquivo original]
    		}
    	}
    },

    watch : {
      dist : {
        files : [
          'src/stylus/**/*',
          'src/js/**/*',
        ],

        tasks : [
          'stylus',
          'uglify',
        ]

      }
    },


    stylus: {
      dev: {
        options: {
          compress: false,
          paths: [
            'node_modules/rupture'
          ]
        },
        files : {
				'assets/css/style.css': 'src/stylus/main.styl' // 1:1 compile 
        }
      }
    },

  });

  // Declaração do plugin
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  // grunt.loadNpmTasks('grunt-contrib-imagemin');

  //Tarefas a serem executadas
  grunt.registerTask('min', ["uglify"]);
  grunt.registerTask('css', ["stylus"]);
  grunt.registerTask('w', [ "watch" ]);

};