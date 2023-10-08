module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], // This is the root directory of your source files, adjust as per your project structure
        extensions: ['.ios.js', '.android.js', '.js', '.json', '.ts', '.tsx'],
        alias: {
          '@app': './src/app',
          '@entities': './src/entities',
          '@shared': './src/shared',
          '@pages': './src/pages',
          '@widgets': './src/widgets',
          '@features': './src/features',
        },
      },
    ],
  ],
};