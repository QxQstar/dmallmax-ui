import axios from 'axios';
import { logout } from '@/lib/account.js'
import Vue from 'vue';
import router from '@/router';
import QS from 'qs';

function httpRequestIntercept(config) {
  return config
}
const httpConfig = {
  timeout: 6000,
  withCredentials:true,
  headers:{
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
}
/**
 * 有错误提示的 http 请求对象
 */
const http = axios.create(httpConfig);


http.interceptors.request.use(httpRequestIntercept,function (err) {
  return Promise.reject(err)
})

http.interceptors.response.use(function (response) {
  const resData = response.data || {};
  if(resData.ret + '' === '0') { // 请求成功
    return resData.content
  } else if(['50001', '100021'].indexOf(resData.ret + '') > -1) { // 登录失效
    Vue.prototype.$alert(resData.msg || '登录已失效，请重新登录!!!',{
      callback() {
        logout();
      }
    })
    return Promise.reject(resData);
  } else if(resData.ret  === -20000000) { // 提示修改密码
    Vue.prototype.$alert(resData.msg || '为了您的账号安全，请及时修改密码',{
      callback(action) {
        if(action === 'confirm') {
          router.replace({
            path:'/account/modifyPw'
          })
        }
      }
    })
    return resData.content;
  } else {
    Vue.prototype.$message.error(resData.msg || '网络错误，请稍后再试')
    return Promise.reject(resData)
  }
},function (err) {
  Vue.prototype.$message.error(err.msg || '请求错误！请稍后重试');
  return Promise.reject(err)
});

/**
 * 无错误提示的 http 错误提示
 */

const silenceHttp = axios.create(httpConfig);

silenceHttp.interceptors.request.use(httpRequestIntercept,function (err) {
  return Promise.reject(err)
});
silenceHttp.interceptors.response.use(function (response) {
  const resData = response.data;
  if(resData.ret + '' !== '0') return Promise.reject(resData)
  else return resData.content
})
/**
 * 封装 get 请求
 * @param url 请求的地址
 * @param params 请求的参数
 * @param config 其他配置，详情查看 https://www.npmjs.com/package/axios
 * @returns {*}
 */
function fetch(url,params = {},config = {}) {
  return http.get(url,{
    params,
    ...config
  })
}

/***
 * 封装 post 请求
 * @param url 请求地址
 * @param data 请求的参数
 * @param config 其他配置，详情查看 https://www.npmjs.com/package/axios
 * @returns {*}
 */
function post(url, data = {}, config = {}) {
  return http.post(url,QS.stringify(data),{
    ...config
  })
}

export {http,silenceHttp,fetch,post}
