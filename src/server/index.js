// eslint-disable-next-line no-unused-vars
import React from 'react';
import axios from 'axios';
axios.defaults.headers['Content-Type'] = "application/json";

let config = {
    baseURL: '',
    timeout: 10 * 1000, // 超时时间
};
const request = axios.create(config);

// 添加请求拦截器
request.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = '';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 添加响应拦截器
request.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject();
    }
);

export default request;
