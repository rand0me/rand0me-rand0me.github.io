var path = require('path');
var webpack = require('webpack');

var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
  pixi = path.join(phaserModule, 'build/custom/pixi.js'),
  p2 = path.join(phaserModule, 'build/custom/p2.js');

var config = {
    entry: {
        app: ['./src/app.es6']
    },
    output: {
        path: './build',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.es6$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        },{
          test: /pixi.js/,
          loader: 'script'
        }]
    },
    resolve: {
        extensions: ['', '.es6', '.scss']
    }
};

/*
if (!process.env.DEBUG) {
    config.module.loaders.push({
        loader: 'uglify'
    });
}
*/
module.exports = config;
