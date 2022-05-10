import axios from 'axios';

const httpRequest = async (method: string, headers: any, url: string, data: any) => {
  return await axios({
    method,
    headers,
    url,
    data
  })
};

export default httpRequest;
