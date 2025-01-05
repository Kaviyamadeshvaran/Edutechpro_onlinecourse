import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://edutechpro-onlinecourse-backend.onrender.com', // Backend Render URL
});

export default axiosInstance;
