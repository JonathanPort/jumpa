const path = require('path');

module.exports = {
  entry: './src/Jumpa.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Jumpa.js',
    libraryExport: 'default',
    libraryTarget: 'umd',
    library: 'Jumpa'
  },
  module: {
  rules: [
    {
       use: {
          loader:'babel-loader',
          options: { presets: ['env'] }
       },
       test: /\.js$/,
       exclude: /node_modules/
    }
  ]
},

};