import request from "./../libs/axios.js";
export async getUserInfo  (data) {
    // request.post request.get, request.put, request.options
    let userInfo = request.get('apiUrl', {
        params: param
    })
    console.info()
}