import { config } from '@constants';
import environments from '@environments';

const { mode } = config;
const { apiUrl } = environments[mode];

const endpoints = {
  auth: {
    signIn: {
      url: `${apiUrl}/signin`,
      method: 'POST'
    },
    signUp: {
      url: `${apiUrl}/signup`,
      method: 'POST'
    },
    resetPassword: {
      url: `${apiUrl}/reset-password`,
      method: 'POST'
    },
    refreshToken: {
      url: `${apiUrl}/refresh-token`,
      method: 'GET'
    },
    signOut: {
      url: `${apiUrl}/signout`,
      method: 'GET'
    }
  },
  account: {
    contactUs: {
      url: `${apiUrl}/contact`,
      method: 'POST'
    },
    getAccount: {
      url: `${apiUrl}/account`,
      method: 'GET'
    },
    editAccount: {
      url: `${apiUrl}/account`,
      method: 'PUT'
    },
    changePassword: {
      url: `${apiUrl}/change-password`,
      method: 'POST'
    }
  },
  users: {
    getUsers: {
      url: `${apiUrl}/users`,
      method: 'GET'
    },
    getUser: (id) => ({
      url: `${apiUrl}/users?id=${id}`,
      method: 'GET'
    }),
    createUser: {
      url: `${apiUrl}/users`,
      method: 'POST'
    },
    modifyUser: (id) => ({
      url: `${apiUrl}/users?id=${id}`,
      method: 'PUT'
    }),
    updateUser: (id) => ({
      url: `${apiUrl}/users?id=${id}`,
      method: 'PATCH'
    }),
    deleteUser: (id) => ({
      url: `${apiUrl}/users?id=${id}`,
      method: 'DELETE'
    })
  }
};

export default endpoints;
