const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const deps = require("./package.json").dependencies;
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    // filename: "remoteEntry.js",
    uniqueName: "rolesManagementPortal",
    publicPath: "http://localhost:4200/",
  },
  devServer: {
    compress: true,
    port: 4200,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*", // 允許跨網域
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    historyApiFallback: true,
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },
      name: "rolesManagementPortal",
      filename: "remoteEntry.js",
      exposes: {
        "./RolesSelectorComponent": "./src/app/selector/selector.module.ts",
      },
      // For remotes (please adjust)
      // name: "rolesManagementPortal",
      // filename: "remoteEntry.js",
      // exposes: {
      //     './Component': './/src/app/app.component.ts',
      // },

      // For hosts (please adjust)
      // remotes: {
      //     "mfe1": "http://localhost:3000/remoteEntry.js",

      // },

      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/elements": {
          singleton: true,
          strictVersion: true,
          requiredVersion: deps["@angular/elements"],
          eager: true,
        },
        "Zone.js": {
          singleton: true,
          strictVersion: true,
          requiredVersion: deps["Zone.js"],
          eager: true,
        },
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
