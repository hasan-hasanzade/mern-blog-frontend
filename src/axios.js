import axios from 'axios';

// I do this action so that I don’t have to add the whole path http://localhost:4444 during the execution of the axios request

const instance = axios.create({
  baseURL: 'http://localhost:4444',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token')

  return config
})

export default instance;
