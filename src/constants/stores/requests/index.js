import axios from 'axios';

const getResponseData = (response) => (Boolean(response) && response.data ? response.data : null);

const requests = {
  get: (url) => {
    console.log('---------------------------------- API GET url:', url);
    return axios.get(url).then(getResponseData);
  },
  post: (url, body = {}) => {
    console.log('---------------------------------- API POST url:', url);
    console.log('---------------------------------- API POST body:', body ? body : {});
    return axios.post(url, body).then(getResponseData);
  }
};

export default requests;
