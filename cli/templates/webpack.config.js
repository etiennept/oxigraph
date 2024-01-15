const path = require("path");
module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: "./query.ts",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: 'tsconfig.json'
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss']
    },
    output: {
        filename: 'query.js',
        path: path.resolve(__dirname, )
    }
}