'use strict';
import path from 'path';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import {VueLoaderPlugin} from 'vue-loader';
import {fileURLToPath} from 'url';
import webpack from "webpack";


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
        new DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
            __VUE_PROD_DEVTOOLS__: false,
        }),
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
