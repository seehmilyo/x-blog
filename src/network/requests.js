import axios from 'axios'






//axios的Promise用法
export function $axios(config) {
  let instance = axios.create({
    //定义默认配置
    // baseURL: 'http://localhost:8000',
    baseURL: 'http://106.15.195.12:8000',
    // baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // console.log(config);
  if (config.url.includes('multidata')) {
    //创建axios实例
     instance = axios.create({
      //定义默认配置
      // baseURL: 'http://localhost:8000',
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
  }


  //拦截器
  //实例拦截
  instance.interceptors.request.use(config => {
    //对请求数据的操作
    //config中的数据不符合要求...
    return config
  },error => {
    console.log(error);
  })

  instance.interceptors.response.use(res => {
    // console.log(res.data);
    return res
  }, error => {
    console.log(error);
  })



  //Promise的axios的用法
  return new Promise((resolve, reject) =>{
    instance(config)
      .then(res =>{
        resolve(res)
      })
      .catch(err =>{
        reject(err)
      })
  })
}






// //axios的原始用法
// export function $axios(config) {
//   //创建axios实例
//   const instance = axios.create({
//     //定义默认配置
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   //原始的axios的用法
//   instance(config)
//     .then(res =>{
//       console.log(res);
//     })
//     .catch(err =>{
//       console.log(err);
//     })
// }
