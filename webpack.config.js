module.exports = {
  entry: './main.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: '/\.css$/',
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"}
        ]
      }, {
        test: '/\.js,\.jsx$/',
        exclude: /(node_modules|bower_components|dist)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env']
          }
        }
      }]
  }
};
