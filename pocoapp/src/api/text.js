import request from '../utils/request';
const baseURL="https://web-api.poco.cn"

function getdata(){
    return request.get(baseURL+"/v1_1/works/get_works_list")
}

export default{
    getdata
}