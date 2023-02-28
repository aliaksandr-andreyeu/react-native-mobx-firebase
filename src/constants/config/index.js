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
  default: {
    activeOpacity: 1
  },
  buttons: {
    activeOpacity: 0.7
  }
};

export default config;
