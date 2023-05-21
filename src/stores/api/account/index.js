import { requests } from '@helpers';

const account = {
  contactUs: (url, payload) => requests.post(url, payload),
  getAccount: (url) => requests.get(url),
  editAccount: (url, payload) => requests.put(url, payload),
  changePassword: (url, payload) => requests.post(url, payload)
};

export default account;
