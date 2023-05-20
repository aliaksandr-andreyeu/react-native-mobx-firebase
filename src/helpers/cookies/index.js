import CookieManager from '@react-native-cookies/cookies';

import { config } from '@constants';
import environments from '@environments';

const { mode } = config;
const { apiUrl } = environments[mode];

export const getCookies = (cb) => {
  CookieManager.get(apiUrl).then((cookies) => {
    console.log('getCookies: ', cookies);
    cb && typeof cb === 'function' && cb();
  });
};

export const clearCookies = (cb) => {
  CookieManager.clearAll().then((success) => {
    console.log('clearCookies: ', success);
    cb && typeof cb === 'function' && cb();
  });
};
