const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);

    const dev = require('../config/webpack.config.dev');
    config.resolve = dev.resolve;
    config.module = dev.module;

    config.module.rules.push({
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: [/stories/, /components/],
        loader: "ts-loader"
    });

    return config;
};
