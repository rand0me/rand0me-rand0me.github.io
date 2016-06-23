module.exports = {
    entry: './src/app.es6',
    output: {
        path: './build',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.es6$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};