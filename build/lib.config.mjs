'use strict';
import path from 'path';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import {VueLoaderPlugin} from 'vue-loader';

import {fileURLToPath} from 'url';
import webpack from "webpack";
import autoprefixer from "autoprefixer";


const {DefinePlugin} = webpack;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolve = src => path.resolve(__dirname, src);

export default {
    mode: 'production',
    entry: [resolve('../vue-tags-input/publish.js')],
    output: {
        path: resolve('../dist'),
        publicPath: '/dist/',
        filename: 'vue-tags-input.js',
        library: 'vueTagsInput',
        libraryTarget: 'umd',
        assetModuleFilename: 'assets/fonts/[hash][ext][query]'

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
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['@babel/plugin-proposal-object-rest-spread'],
                        presets: ['@babel/preset-env']
                    },
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    autoprefixer(),
                                ],
                            },
                            sourceMap: true,
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(ttf|eot|woff|woff2|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 100000,
                },
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash][ext][query]'
                }

            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['../dist/**/*'],
            dry: false,
            dangerouslyAllowCleanPatternsOutsideProject: true,
        })
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': '@vue/runtime-dom',
        },
    },
    devtool: 'source-map',
    optimization: {
        minimize: true,
    },
};
