module.exports = function(grunt) {
    // set up grunt

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js','index.js', 'test/**/*.js', 'lib/**/*.js'],

            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                globals: {
                    module: true,
                    exports: true,
                    require: true,
                    describe: true,
                    beforeEach: true,
                    it: true,
                    setTimeout: true,
                    setInterval: true,
                    console: true,
                    before: true,
                    after: true,
                    afterEach: true,
                    process: true,
                    __dirname: true
                }
            }
        },
        mochaTest: {
            src: ['test/**/*_test.js'],
        }
    });

    grunt.registerTask('default', ['jshint', 'mochaTest']);

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
};
