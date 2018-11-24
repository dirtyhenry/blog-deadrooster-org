module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      jquery: {
        files: {
          'assets/js/jquery.min.js': 'node_modules/jquery/dist/jquery.js'
        }
      },
      bootstrap: {
        files: {
          'assets/js/bootstrap.min.js': ['node_modules/bootstrap/js/dist/collapse.js',
            'node_modules/bootstrap/js/dist/scrollspy.js',
            'node_modules/bootstrap/js/dist/tooltip.js',
            'node_modules/bootstrap/js/dist/button.js',
            'node_modules/bootstrap/js/dist/affix.js'
          ]
        }
      },
      deadrooster: {
        files: {
          'assets/js/deadrooster.min.js': 'assets/_javascript/deadrooster.js'
        }
      }
    },
    copy: {
      fontawesome: {
        files: [{
            expand: true,
            cwd: 'node_modules/@fortawesome/fontawesome-free/css/',
            src: ['all.min.css'],
            dest: 'assets/vendors/fontawesome/css/'
          },
          {
            expand: true,
            cwd: 'node_modules/@fortawesome/fontawesome-free/webfonts/',
            src: ['*'],
            dest: 'assets/vendors/fontawesome/webfonts/'
          }
        ]
      }
    },
    coffee: {
      compile: {
        files: {
          'assets/_javascript/deadrooster.js': 'assets/_coffeescript/deadrooster.js.coffee'
        }
      }
    }  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('default', ['coffee', 'uglify', 'copy' ]);
};
