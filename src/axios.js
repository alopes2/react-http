import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

//all default interceptors don't work here
axios.interceptors.request.use(request => {
    console.log('Request intercepted in instance', request);

    return request;
}, error => {
    console.error('Intercepted Error in instance', error);
    Promise.reject(error);
});

export default instance;
