module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      production: {
        options: {
          paths: ["node_modules/bootstrap/less"],
          yuicompress: true
        },
        files: {
          "assets/css/application.min.css": "assets/_less/application.less"
        }
      }
    },
    uglify: {
      jquery: {
        files: {
          'assets/js/jquery.min.js': 'node_modules/jquery/dist/jquery.js'
        }
      },
      bootstrap: {
        files: {
          'assets/js/bootstrap.min.js': ['node_modules/bootstrap/js/collapse.js',
            'node_modules/bootstrap/js/scrollspy.js',
            'node_modules/bootstrap/js/tooltip.js',
            'node_modules/bootstrap/js/button.js',
            'node_modules/bootstrap/js/affix.js'
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
      },
      littlefoot: {
        files: [{
            expand: true,
            cwd: 'node_modules/littlefoot/dist/',
            src: ['littlefoot.min.js'],
            dest: 'assets/js/'
          },
          {
            expand: true,
            cwd: 'node_modules/littlefoot/dist/',
            src: ['littlefoot.css'],
            dest: 'assets/css/'
          },
        ]
      },
      requirejs: {
        files: [{
          expand: true,
          cwd: 'node_modules/requirejs/',
          src: ['require.js'],
          dest: 'assets/vendors/requirejs/'
        }]
      }
    },
    coffee: {
      compile: {
        files: {
          'assets/_javascript/deadrooster.js': 'assets/_coffeescript/deadrooster.js.coffee'
        }
      }
    },
    exec: {
      build: {
        cmd: 'jekyll build'
      },
      serve: {
        cmd: 'jekyll serve --watch'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('javascript', ['coffee', 'uglify'])
  grunt.registerTask('default', ['less', 'coffee', 'uglify', 'copy', 'exec:build']);
  grunt.registerTask('deploy', ['default', 'exec:deploy']);

};
