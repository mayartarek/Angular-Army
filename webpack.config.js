const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle[contenthash].js",
        path: path.resolve(__dirname, "./dist")
    },

    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'web Pack',
        }),

    ],
    devServer: {

        historyApiFallback: {
            index: 'index.html'
            , contentBase: path.resolve(__dirname, "./dist"),
        },
        port: 4200
    }

};