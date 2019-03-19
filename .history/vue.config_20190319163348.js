const path = require("path");
const webpack = require("webpack");
const resolve = dir => {
  // eslint-disable-next-line no-undef
  return path.join(_dirname, dir);
};
const BASE_URL = "/";
module.exports = {
  publicPath: BASE_URL,
  configureWebpack: config => {
    config.entry.app = ["babel-polyfill", "./src/main.js"];
  },
  chainWebpack: config => {
    config.plugin("provide").use(webpack.ProvidePlugin, [
      {
        introJs: ["intro.js", "introlJs"]
      }
    ]);
    config.resolve.alias
      .set("@", resolve("src"))
      .set("src", resolve("src"))
      .set("_c", resolve("src/components"))
      .set("_conf", resolve("config"))
      .set("_img", resolve("src/assets/img"));
  },
  devServer: {
    proxy: {
      "/api/..": {
        target: "192.168.1.0"
      }
    }
  }
};
