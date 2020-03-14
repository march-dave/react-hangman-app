var HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//     devtool: 'source-map',
//     mode: 'development',
//     entry: {
//         main: __dirname + '/src/index.js'},
//     output: {
//         path: __dirname + '/public',
//         filename: '[name]-[hash].js'
//     },

//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /(node_modules|bower_components)/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env', '@babel/preset-react'],
//                         plugins: ['@babel/plugin-proposal-object-rest-spread']
//                     }
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                   { loader: "style-loader" },
//                   { loader: "css-loader", options: { modules: true } }
//                 ]
//             }

//         ]
//     },

//     // plugins : [
//     //     new HtmlWebpackPlugin({
//     //         title : '직원 정보 조회2',
//     //         template : __dirname + '/assets/index.html',
//     //         filename : 'index.html'
//     //    }),
//     // ],

//     // devServer: {
//     //     contentBase: "./public",
//     //     inline: true,
//     //     port: 3000,
//     //     historyApiFallback: true
//     // }
//  };

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]_[local]_[hash:base64]"
              }
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  }
};
