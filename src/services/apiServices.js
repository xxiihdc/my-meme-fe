import axios from 'axios';

const apiService = axios.create({
  // baseURL: 'https://ductvh-golang-api.onrender.com',
  baseURL: 'http://localhost:8888'
});

export default apiService;
