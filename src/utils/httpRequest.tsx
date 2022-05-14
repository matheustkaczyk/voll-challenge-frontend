import axios from 'axios';

const httpRequest = () => {
  return axios.create({
    baseURL: 'https://vollcoinstoreback.herokuapp.com',
  })
};

export default httpRequest;
