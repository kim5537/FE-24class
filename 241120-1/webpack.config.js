const { watch } = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
// console.log(__dirname); // __dirname = 현재 경로를 전체로 찾아오는 명령어이다
// console.log(path.resolve(__dirname, "assets", "js")); // 노드내에 path.resolve() 맞춤형 경로를 만들어준다.
// console.log(path.resolve(__dirname, "assets", "js"));

module.exports = {
  entry: {
    main: "./src/client/js/main.js",
    videoPlayer: "./src/client/js/videoPlayer.js",
  },
  mode: "development",
  watch: true,
  plugins: [new MiniCssExtractPlugin({ filename: "css/style.css" })],
  output: {
    filename: "js/[name].js", // [name] = 변수의 값으로 남기겠다.
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
