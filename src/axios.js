import axios from 'axios';

// I do this action so that I don’t have to add the whole path http://localhost:4444 during the execution of the axios request

const instance = axios.create({
  baseURL: 'http://localhost:4444',
});

export default instance;
