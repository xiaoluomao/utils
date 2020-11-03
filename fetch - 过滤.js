import axios from 'axios'

let baseURL='http://localhost:8090/api/v1'
const instance = axios.create({
    baseURL: baseURL,
    timeout: 7000,
    headers: {}
})

//请求拦截器：在请求被发送出去之前，做一些验证工作。
instance.interceptors.request.use(function (config) {
    //加token  ----- token作用：是用户鉴权
    config.headers.Authorization=localStorage.getItem('token')|| ''
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  //响应拦截器：在响应到达之前，先进行数据过滤
instance.interceptors.response.use(function (response) {
    if(response.status === 200){
        if(response.data && response.data.err==0){
            return response.data;
        }else{
            //此处通常会用UI框架做一个弹框.
            alert('网络异常，请稍后再试')
        }
    }
  }, function (error) {
    return Promise.reject(error);
  });

export default instance