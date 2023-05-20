import { requests } from '@constants';

const auth = {
  signIn: (url, payload) => requests.post(url, payload),
  signUp: (url, payload) => requests.post(url, payload),
  resetPassword: (url, payload) => requests.post(url, payload),
  refreshToken: (url) => requests.get(url),
  signOut: (url) => requests.get(url)
};

export default auth;
