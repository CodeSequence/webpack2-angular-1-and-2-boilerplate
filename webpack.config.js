const {resolve} = require('path')

module.exports = function createWebpackConfig(env) {
  return {
    entry: './app/index',
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    resolve: {
      extensions: ['.ts', '.js', '.json'],
    },
    module: {
      loaders: [
        {test: /\.ts$/, loader: 'babel!ts', exclude: /node_modules/},
        {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
        {test: /\.css$/, loader: 'style!css'},
      ],
    },
  };
};
