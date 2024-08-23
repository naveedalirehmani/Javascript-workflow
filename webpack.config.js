const path = require('path');

module.exports = {
  entry: './dist/react2.js',
  mode:"development",
  // module: {
  //   rules: [
  //     {
  //       test: /\.ts?$/,
  //       use: 'ts-loader',
  //       exclude: /node_modules/
  //     },
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['@babel/react']
  //         }
  //       }
  //     }
  //   ]
  // },
  // resolve: {
  //   extensions: ['.tsx', '.ts', '.js']
  // },
  output: {
    filename: 'react3.js',
    path: path.resolve(__dirname, 'dist')
  }
};
