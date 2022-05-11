import axios from 'axios';

const httpRequest = () => {
  return axios.create({
    baseURL: 'http://localhost:3001',
  })
};

export default httpRequest;
