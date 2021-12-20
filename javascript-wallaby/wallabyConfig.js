module.exports = function () {
    return {
        files: [
            'services/**/*.js'
        ],

        tests: [
            'test/**/*.test.js'
        ],

        env: {
            type: 'node'
        }
    };
};
