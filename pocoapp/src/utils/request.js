// 对axios的二次封装

// 1.引入
import axios from 'axios';
// 
/* 
    2.手动创建axios对象
        * 根据不同环境设置 baseURL, 最终发送请求时的URL为: baseURL + 发送请求时写URL ,比如 get('/test'), 最终发送请求是: /dev-api/test
        * timeout：请求超时
*/
/* const request = axios.create({
    baseURL:'/',
    timeout:5000
}) */

// 4.跨域配置
const request = axios.create({
    baseURL:'/api',
    timeout:5000
})

// 3.导出axios对象
export default request;