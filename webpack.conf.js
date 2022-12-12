const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  context: __dirname, // to automatically find tsconfig.json
  entry: "./src/index.ts",
  resolve: {
    modulesDirectories: ["node_modules", "src"],
    extension: [".ts", ".tsx", ".js"],
  },
  node: {
    fs: "empty",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
};
