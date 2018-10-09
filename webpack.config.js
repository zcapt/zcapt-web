const path = require('path');

module.exports = {

  entry: './index.js',  // Entry file

  output: {  // compiled file in ./dist
    path: path.resolve(__dirname, 'dist'),
    filename: 'zcapt.js'
  },
    module: {
        rules: [
            { // module for sass
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
            ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};

