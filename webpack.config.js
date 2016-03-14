var ExtractTextPlugin = require("extract-text-webpack-plugin");
var dist_dir = __dirname + '/dist'; 
 
module.exports = [{
  entry: "./src/scripts/index.tsx",
  output: { 
    path: dist_dir + '/scripts',
    publicPath: '/scripts/',
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
}, {
  entry: {
    style: './src/styles/loader.js'
  },
  output: {
    path: dist_dir + '/styles',
    publicPath: '/styles/',
    filename: 'app.css'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
}];
