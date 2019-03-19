// import { Toast } from 'vant';
import { BASE_URL } from '../common/path.config'
import axios from 'axios'
import { UPDATE_REQUEST_COUNT } from '../store/common/types'
import store from '../store'
// 请求超时时间
const TIMEOUT = 10000
let http = axios.create({
    BASE_URL,
    timeout: TIMEOUT,
    headers: {
        common: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        post: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
})
// http 响应拦截器
http.interceptors.request.use(
    config => {
        if (config.loading) {
            store.commit(UPDATE_REQUEST_COUNT, 1)
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
// http 响应拦截器
http.interceptors.response.use(
    response => {
        console.log(response)
        let result = response.data
        // 输出每次的请求
        console.info([${ response.config.method }], result, ${ response.config.url })
        store.commit(UPDATE_REQUEST_COUNT, -1)
        // 请求失败
        if (![200, 201].includes(result.status.code)) {
            let msg = result.status.message || '服务器内部错误！'
            // Toast(${msg})
            throw new Error(msg)
        }
        // 请求成功
        return result.data
    },
    error => {
        console.log(error)
        // TODO 统一处理全部的错误代码
        // if (error.response) {
        //   switch (error.response.status) {
        //     case 403:
        //     case 401:
        //       let url = ${error.response.data.data}&state=${encodeURIComponent(window.location.href)}
        //       window.location = url;
        //       // Toast('403 登陆失效');
        //       break
        //   }
        // }
        store.commit(UPDATE_REQUEST_COUNT, -1)
        return Promise.reject(error)
    }
)
let request = {};
['get', 'post', 'put', 'delete'].forEach(method => {
    if (method === 'get') {
        request[method] = (url, params, extra = { headers: {}, loading: true }) => {
            return http({
                url,
                params,
                method,
                headers: extra.headers,
                loading: extra.loading
            })
        }
        return;
    }
    // post 请求使用request body 传递
    request[method] = (url, data, extra = { headers: {}, loading: true }) => {
        return http({
            url,
            method,
            data,
            headers: extra.headers,
            loading: extra.loading
        })
    }
})
export default request