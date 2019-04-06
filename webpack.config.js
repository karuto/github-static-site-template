const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: "./src/Root.js",
    watch: true,
    output: {
        path: path.resolve('dist'),
        filename: 'app.js'
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "app.css",
        chunkFilename: "[id].css"
      })
    ],
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                { loader: MiniCssExtractPlugin.loader },
                { loader: 'css-loader',
                options: {
                    modules: true
                } }
            ]
        }
        ]
    }
};
