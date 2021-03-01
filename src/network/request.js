import axios from 'axios'

//最终封装方法
export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    baseURL: "http://152.136.185.210:8000/api/w6",
    timeout: 5000
  })

  instance.interceptors.response.use(res => {
    // console.log(config);
    return res.data
  }, error => {
    // console.log(error);
    return error
  })

  //3.真正发送网络请求。因为create返回的是Promise对象，所以可以直接return
  return instance(config)
}
