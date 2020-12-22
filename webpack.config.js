const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    mode: 'development',
    entry: {
        app: ['babel-polyfill', path.resolve(__dirname, 'src/index.js')]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                // include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader'
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
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'})
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        // hot: true,
        port: 9000,
        // proxy: {
        //     '/api/*': {
        //         target: 'http://localhost:8880'
        //     }
        // }
    }
}