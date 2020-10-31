import request from '../utils/request';
// 1.验证用户名是否存在
function checkname(username) {
    return request.get("/user/checkname", {
      params: {
        username,
      },
    });
  }
  
// 2.注册
function reg(data) {
    return request.post("/user/reg", {
      ...data,
    });
  }
//3.登录
function login(data){
  return request.get("/user/login",{
    ...data,
  })
}
  // 7.获取用户列表信息(包含模糊查询)
function getUserData(data) {
    return request.get("/user/list", {
      params: {
        ...data,
      },
    });
  }

  export default {
    checkname,
    getUserData,
    reg,
    login,
  }