const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.tsx", // Your main JS file
    output: {
        path: path.resolve(__dirname, "./static/frontend"),
        filename: "bundle.js",
        clean: true // Clears old builds
    },
    mode: "development", // or "production"
    module: {
        rules: [
            {
                test: /\.(tsx)$/, // Process TSX
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
            },
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".tsx"] // Allow imports without extensions
    },
    devtool: "source-map", // Helpful for debugging
    devServer: {
        static: path.resolve(__dirname, "dist"),
        hot: true,
        port: 3000
    }
};
