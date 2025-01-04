import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://edutechpro-backend.onrender.com', 
});

export default axiosInstance;
