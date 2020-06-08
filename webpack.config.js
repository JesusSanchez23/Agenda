const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {

    mode: 'development',
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin()]
    },

    module: {

        rules: [{
                test: /\.css$/,
                exclude: /style\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false, //reduce todo a una linea

                },
            },
            {
                test: /style\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                loader: 'file-loader',
                options: {
                    esModule: false,
                    name: 'assets/[name].[ext]'

                },
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false,

        }),
        new CleanWebpackPlugin(),
    ],

    devServer: {
        open: 'Chrome'
    },

}