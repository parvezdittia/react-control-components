const path = require('path');

module.exports = {
  entry: './src/components/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'MyComponent',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};
