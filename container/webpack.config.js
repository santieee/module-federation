const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');

module.exports = {
  mode: "development",
  output: {
    publicPath: "http://127.0.0.1:8080/"
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
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
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        "individual_limit": "individual_limit@http://127.0.0.1:3001/remoteEntry.js",
        "concentration_limit": "concentration_limit@http://127.0.0.1:3002/remoteEntry.js"
      },
      shared: ['react', 'react-dom']
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      publicPath: '/',
    })
  ]
}