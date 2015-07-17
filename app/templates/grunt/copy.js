module.exports = {
    config: {
        dist: {
            files: [{
              expand: true,
              // dot: true,
              cwd: '<%= product.app %>',
              dest: '<%= product.dist %>',
              src: [
                'images/**'
                ,'view/**'
                ,'css/**'
                ,'scripts/**'
              ]
            }]
        }
    }
}