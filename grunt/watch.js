module.exports = {
    sass: {
        files: ['<%= conf.devStyles %>/**/*.scss', ],
        tasks: ['sass'],
        options: {
            livereload: false
        }
    },
    js: {
        files: '<%= conf.distScripts %>/all.js',
        tasks: []
    },
    css: {
        files: ['<%= conf.distStyles %>/all.css'],
        tasks: []
    },
    twig: {
        files: ['<%= conf.htmlDir %>/**/*.twig'],
        tasks: []
    },
    options: {
        livereload: true
    }
};
