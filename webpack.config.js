// var autoprefixer = require('autoprefixer-core');

module.exports = {
  entry: ['./src/app.jsx'],

  output: {
    path: __dirname,
    filename: 'bundle.js', // this is the default
    publicPath: 'http://localhost:8090/assets'
  },

  module: {
    loaders: [{ 
      test: /\.jsx$/, 
      loaders: ['jsx-loader?harmony'] 
    }, { 
      test: /\.s?css$/, 
      loader: "style!css!sass" 
    }]
  },

  // postcss: [autoprefixer({ browsers: ['last 2 version'] })],

  externals: {
    'react': 'React' // use external react package
  },

  resolve: {
    // allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx']
  }
}
