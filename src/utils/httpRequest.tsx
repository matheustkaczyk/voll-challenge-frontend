import axios from 'axios';

const httpRequest = (method: string, url: string, data: any) => {
  return axios({
    method,
    url,
    data
  })
};

export default httpRequest;
