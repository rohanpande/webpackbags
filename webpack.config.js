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
            test: /\.scss/,
            loaders: ['style', 'css', 'sass'],
        }, {
            test: /\.html/,
            loader: 'html',
        }, {
            test: /\.js/,
            loader: 'babel-loader',
            query: {
                presets: ["react", "es2015", "stage-1"]
            },
            exclude: /node_modules/
        }, ]

    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
