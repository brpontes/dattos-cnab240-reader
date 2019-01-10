const path = require('path')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        app: ['@babel/polyfill', './app/assets/js/main.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new UglifyWebpackPlugin()
    ]
}