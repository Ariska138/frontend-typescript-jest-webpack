import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { TsConfigPathsPlugin } from 'awesome-typescript-loader'

const config: webpack.Configuration = {
    mode: "development",
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [
            new TsConfigPathsPlugin()
        ]
    },
    entry: './src/index.ts',
    // plugins: [
    //     new CleanWebpackPlugin(),
    //     new HtmlWebpackPlugin({
    //         template: 'src/index.html'
    //       })
    // ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname+"/public", 'dist')
    },

    module: {
        rules: [
            { test: /\.tsx?$/, use: 'awesome-typescript-loader' },
            { test: /\.s[ac]ss$/, use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]},
            { test: /\.(png|jpg|svg|gif)$/, use: 'file-loader'}
        ]
    },
    devServer: {
        stats: {
            assets: false,
            hash: false,
            chunks: false,
            errors: true,
            errorDetails: true,
        },
        overlay: true
    },
    optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 20000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
      }
}

export default config;