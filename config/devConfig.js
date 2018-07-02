const path = require('path');

const devConfig = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.bundle.js'
    },
};

module.exports = devConfig;

