import { Platform } from 'react-native';

const config = {
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
    speed: 25
  }
};

export default config;
