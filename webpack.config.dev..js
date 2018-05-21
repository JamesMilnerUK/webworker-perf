var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/run.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webworker.bench.bundle.js'
  }
};