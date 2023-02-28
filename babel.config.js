module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: '.',
        alias: {
          '@images': './src/images',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@containers': './src/containers',
          '@stores': './src/stores',
          '@context': './src/context'
        }
      }
    ],
    ['react-native-reanimated/plugin']
  ]
};
