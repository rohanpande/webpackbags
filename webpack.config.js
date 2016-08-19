module.exports = {
    entry: './src',
    devtool: 'source-map',
    output: {
        path: 'builds',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js/,
            loader: 'babel',
            include: __dirname + '/src',
        }, {
            test: /\.scss/,
            loaders: ['style', 'css', 'sass'],
        }, {
            test: /\.html/,
            loader: 'html',
        }]

    }
};
