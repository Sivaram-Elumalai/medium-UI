const path = require("path");
// import css from 'file.css';

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    historyApiFallback: true
  },
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {test: /\.js$/,use: "babel-loader"},
      {test : /\.css$/, use:['style-loader', 'css-loader']},
      {
                 test: /\.(png|svg|jpeg|jpg|gif)$/,
                 use: [
                   'file-loader',
                 ],
               },
    ]
  },
  output: {
    filename: "bundle.js"
  }
};
