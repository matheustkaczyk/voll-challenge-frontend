import axios from 'axios';

const httpRequest = (url: string) => {
  return axios.create({
    baseURL: url,
  })
};

export default httpRequest;
