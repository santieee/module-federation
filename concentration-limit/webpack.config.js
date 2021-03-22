const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');

module.exports = {
  mode: "development",
  output: {
    publicPath: "http://127.0.0.1:3002/"
  },
  devServer: {
    port: 3002
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      public: path.resolve(__dirname, 'public/'),
    },
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: "bundle-loader",
        options: {
          lazy: true,
        },
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "concentration_limit",
      filename: "remoteEntry.js",
      exposes: {
        './App': "./src/App"
      },
      shared: ['react', 'react-dom']
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
}