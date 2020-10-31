import axios from 'axios';

const baseURL="https://www.poco.cn";  // 要修改

const request=axios.create({
    baseURL:baseURL,
});

export default request;