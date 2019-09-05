import axios from 'axios';
import qs from 'qs'

const service = axios.create({
    baseURL: 'https://58coin-support.zendesk.com',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
})

//开始请求设置，发起拦截处理
service.interceptors.request.use(config => {
    // post方法并且数据不是formData，序列化参数
    if (config.method === 'post' && config.headers['Content-Type'] !== 'multipart/form-data') {
        config.data = qs.stringify(config.data)
    }
    return config
    }, error => {
        return Promise.reject(error)
    })
// respone拦截器
service.interceptors.response.use(
    response => {
        // const res = response.data;
        //这里根据后台返回来设置
        // if (res.msg === "success") {
            return response.data;
        // } else {
        //     return Promise.reject();
        // }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service