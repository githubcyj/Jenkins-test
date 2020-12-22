const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'production',

    entry: {
        app: path.resolve(__dirname, 'src/index.js')
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        // uniqueName: "module-federation-one"
        // pathinfo: false
    },

    devtool: false,

    plugins: [
        // HTML文件的创建
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'), // src文件
            filename: 'index.html' // dist文件
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.(css|less)$/,
                include: path.resolve(__dirname, 'node_modules'),
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            // lessOptions: {
                                // modifyVars: theme,
                                javascriptEnabled: true
                            // }
                        }
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            options: {
                                modules: true,
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            // lessOptions: {
                                // modifyVars: theme,
                                javascriptEnabled: true
                            // }
                        }
                    }
                ]
            }
        ]
    },
};
