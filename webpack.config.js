/* eslint-disable no-undef */
const path = require("path")
//const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    plugins: [],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        library: {
            name: 'myLibrary',
            type: 'global',
        },
    },
    resolve: {
        alias: {
          'node_modules': path.join(__dirname, 'node_modules'),
        }
    }
    // module: {
    //     rules: [{
    //         test: /\.m?js$/,
    //         exclude: /node_modules/,
    //         use: {
    //             loader: 'babel-loader',
    //             options: {
    //                 presets: [
    //                     ['@babel/preset-env', { targets: "defaults" }]
    //                 ],
    //                 plugins: ['@babel/plugin-transform-class-properties']
    //             }
    //         }
    //     }]
    // }
}