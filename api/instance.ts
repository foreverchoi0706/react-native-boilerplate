import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(
  response => {
    console.log(1);
    return response;
  },
  response => {
    return response;
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  response => {
    return response;
  },
);

export default instance;
