const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //  плагин для сборки Html
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //  плагин который при сборке каждый  раз удаляет dist
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: { main: './src/pages/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
        compress: true, // это ускорит загрузку в режиме разработки
        port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, 
        open: true // сайт будет открываться сам при запуске npm run dev
    },

    module: {
        rules: [ // rules — это массив правил

            //  правило для обработки файлов
            {
                test: /\.(svg|jpg)$/,
                type: 'asset/resource', // => позволяет переносить исходные файлы в конечную сборку в том же формате.
                generator: {
                    filename: 'image/[name].[hash][ext]',
                }
            },
            {
                test: /\.js$/,
                // при обработке этих файлов нужно использовать babel-loader
                use: 'babel-loader',
                // исключает папку node_modules, файлы в ней обрабатывать не нужно
                exclude: '/node_modules/'

            },
            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[hash][ext]',
                }
            },
            {
                test: /\.css$/,

                use: [MiniCssExtractPlugin.loader, {
                        loader: 'css-loader',
                        options: { importLoaders: 1 } //Если не передать опцию importLoaders, PostCSS не будет работать с css-файлами, в которых есть @import
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
            template: './src/index.html' // путь к файлу index.html

        }),
        new CleanWebpackPlugin(), // использовали плагин который при сборке каждый  раз удаляет dist
        new MiniCssExtractPlugin() // подключение плагина для объединения файлов
    ]

}