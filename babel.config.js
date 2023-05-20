module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: '.',
        alias: {
          '@images': './src/images',
          '@environments': './src/environments',
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
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    ['react-native-reanimated/plugin']
  ]
};
