'use strict';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import ip from 'ip';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';


const resolve = src => path.resolve(__dirname, src);
const port = 3000;

module.exports = {
    mode,
    entry: ['@babel/polyfill', resolve('../docs/main.js')],
    output: {
        path: resolve('../docs-dist'),
        filename: '[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.demo\./,
                type: 'asset/source',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|\.demo\.)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread'],
                    },
                },
            },
            {
                test: /\.(scss|css)$/,
                exclude: /\.demo\./,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer'),
                                ],
                            },
                            sourceMap: true,
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|mp3|mp4|webm)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[name]-[hash][ext]',
                },
            },
            {
                test: /\.(gif|png|jpe?g|svg|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'static/images/[name]-[hash][ext]',
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: mode === 'production' ? {
                            mozjpeg: {
                                progressive: true,
                                quality: 75,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.75, 0.90],
                                speed: 4,
                            },
                            svgo: {
                                plugins: [
                                    {removeViewBox: false},
                                    {cleanupIDs: true},
                                ],
                            },
                        } : {disable: true},
                    },
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyWebpackPlugin({patterns: [{from: resolve(__dirname, '../docs/.htaccess')}]}),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['../docs-dist/**/*'],
            dangerouslyAllowCleanPatternsOutsideProject: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            template: resolve('../docs/index.html'),
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(mode),
            },
        }),
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@components': resolve('../docs/components'),
            '@j4hangir/vue-tags-input': resolve('../vue-tags-input/vue-tags-input.vue'),
            '@tag-input': resolve('../vue-tags-input/tag-input.vue'),
            'colors': resolve('../docs/colors.scss'),
            'vue': '@vue/runtime-dom',
        },
    },
    devServer: {
        historyApiFallback: true,
        port: port, // Ensure 'port' is a defined variable
        host: '0.0.0.0',
        // after(app, server, compiler) {
        //     console.log(`\nServing on: http://localhost:${port}`);
        //     console.log(`IP: http://${ip.address()}:${port}`);
        // },
    },
    performance: {
        hints: false,
    },
    devtool: 'eval-source-map',
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};

if (mode === 'production') {
    module.exports.devtool = false;
    module.exports.optimization = {
        minimize: true,
    };
}
if (process.env.ANALYZE === 'true') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new BundleAnalyzerPlugin(),
    ]);
}
