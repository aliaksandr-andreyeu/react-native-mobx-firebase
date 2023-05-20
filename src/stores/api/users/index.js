import { requests } from '@constants';

const users = {
  getUsers: (url) => requests.get(url),
  getUser: (url, id) => requests.get(url(id)),
  createUser: (url, payload) => requests.post(url, payload),
  modifyUser: (url, id, payload) => requests.put(url(id), payload),
  updateUser: (url, id, payload) => requests.patch(url(id), payload),
  deleteUser: (url, id) => requests.delete(url(id))
};

export default users;
