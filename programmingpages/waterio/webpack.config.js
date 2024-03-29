const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },  
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),    
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Waterio',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpng|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
