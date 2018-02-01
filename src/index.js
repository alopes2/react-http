import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log('Request intercepted', request);

    return request;
}, error => {
    console.error('Intercepted Error', error);
    Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log('Response intercepted', response);

    return response;
}, error => {
    console.error('Intercepted response Error', error);
    Promise.reject(error);
});

//let myInterceptor = axios.interceptors.request.use(function () {/*...*/});
//axios.interceptors.request.eject(myInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
