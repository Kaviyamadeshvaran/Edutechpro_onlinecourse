import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://edutechpro-onlinecourse-backend.onrender.com', 
});

export default axiosInstance;
