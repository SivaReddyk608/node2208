import * as path from 'path';
import * as webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'

const outputDir = path.resolve(__dirname, '../resources/webapp/dist');

const config: webpack.Configuration = {
    context: path.resolve(__dirname, 'entry'),
    entry: {
        App: './App.tsx'
    },
    output: {
        filename: '[name].js',
        path: outputDir
    },
    resolve: {
        extensions: [
            '.tsx', '.ts', '.js', '.css', '.scss',
            '.png', '.svg', '.jpg', '.gif', 
            '.woff', '.woff2', '.eot', '.ttf', '.otf'],
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ],
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: {
                            typeRoots: [
                                "./node_modules/@types/",
                                "./types/"
                            ]
                        }
                    }
                }
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    { 
                        loader: 'postcss-loader',
                        options: {
                            plugins: function(){
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        removeAvailableModules: true
    }
}

export default config;
