var path = require('path')
 
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),    
    publicPath: '/dist/',                      
    filename: 'build.js'                
  },
  module: {                     
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
          options: {
            loaders: {
              scss: 'vue-style-loader!css-loader!sass-loader', 
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
            }
          }
      }
    ]
  }
}