import axios from 'axios';

const baseURL="https://wap.poco.cn";

const request=axios.create({
    baseURL:baseURL+'/api',
});

export default request;