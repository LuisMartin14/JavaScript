const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");

module.exports = {

    mode: 'development',

    output: {
        clean: true
    },
    
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    // Disables attributes processing
                    sources: false,
                },
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ],
            },
            {
                test: './styles\.css$/',
                use: [ 
                    MiniCssExtract.loader, 
                    "css-loader" 
                ]
            }
        ],
    },

    plugins: [
        new HtmlWebpack({
            title: 'Mi Webpack App',
            template: './src/index.html'
        }),
        new MiniCssExtract({
            filename: 'new-style.css',
            ignoreOrder: false
        })
    ],

}