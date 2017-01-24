var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  cache: debug,
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/webpack_entry.js", //This uses src as .
  // watch: false, //probably shouldn't set this true since npm dev script does dev-server after
  module: {
    loaders: [
      {
        test: [/\.es6$/, /\.jsx?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  output: {
    // filename: debug ? "./src/js/webpack_build/myre.js" : "./src/js/webpack_build/myre_min.js"
      filename: "./src/js/webpack_build/myre.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  resolve: {
    extensions: ['', '.js', '.es6']
  },

}

if (!debug) {
  var WebpackStripLoader = require('strip-loader');

  var stripLoader = {
   test: [/\.es6$/, /\.jsx?$/],
   exclude: /(node_modules|bower_components)/,
   loader: WebpackStripLoader.loader('console.log')
  }

  module.exports.module.loaders.push(stripLoader);
}
