const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export default axiosInstance;
