var path = require('path');
var webpack = require('webpack');

module.exports = {
    watchOptions: {
        poll: 1000 
    },
    cache: true,
    entry: {
        app: './src/App/index.tsx',
        vendor: [
            'babel-polyfill',
            'react',
            'react-dom'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].js',
        publicPath: '/dist/',
        chunkFilename: '[chunkhash].js'
    },
    module: {
        loaders: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            loader: 'babel-loader!ts-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            /* '@atom': path.resolve(__dirname, 'src/component/atom') */
          }
    },
    devServer: {
        inline:true,
        port: 9003,
        stats: 'errors-only',
      },
};
