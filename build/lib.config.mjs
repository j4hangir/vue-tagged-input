'use strict';
import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
const resolve = src => path.resolve(__dirname, src);

module.exports = {
    mode: 'production',
    entry: [resolve('../vue-tags-input/publish.js')],
    output: {
        path: resolve('../dist'),
        publicPath: '/dist/',
        filename: 'vue-tags-input.js',
        library: 'vueTagsInput',
        libraryTarget: 'umd',
    },
    externals: {
        vue: 'vue',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                        },
                    },
                ],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(ttf|eot|woff|woff2|otf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                    publicPath: 'fonts/',
                },
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['../dist/**/*'],
            dangerouslyAllowCleanPatternsOutsideProject: true,
        })
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': '@vue/runtime-dom',
        },
    },
    devtool: '#source-map',
    optimization: {
        minimize: true,
    },
};
