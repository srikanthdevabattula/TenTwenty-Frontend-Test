const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production", // ✅ Use production mode for deployment
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), // ✅ Output folder for build
    filename: "main.js",
    clean: true, // ✅ Cleans old builds
  },
  target: "web",
  devServer: {
    port: 3000,
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"], // Tailwind support
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"], // Optional SCSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Automatically injects bundle
    }),
  ],
};
