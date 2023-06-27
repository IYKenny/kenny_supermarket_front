import Axios from 'axios';

const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    if (typeof window !== 'undefined' && localStorage) {
      const token = localStorage.getItem('access_token');
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosInstance;