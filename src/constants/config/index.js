import { Platform } from 'react-native';

const config = {
  mode: (process && process.env && process.env.NODE_ENV) || 'development',
  isAndroid: Platform.OS === 'android',
  isIOS: Platform.OS === 'ios',
  platform: {
    os: Platform.OS,
    version: Platform.Version
  },
  header: {
    height: 56
  },
  bottomBar: {
    height: 56
  },
  common: {
    activeOpacity: 1
  },
  buttons: {
    activeOpacity: 0.75
  },
  animation: {
    duration: 250,
    speed: 50
  }
};

export default config;
