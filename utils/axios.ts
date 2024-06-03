import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/5-4/',
  timeout: 1000,
});

export default instance;
