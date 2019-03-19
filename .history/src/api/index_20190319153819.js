import request from "./../libs/axios.js";
export async function getUserInfo {
    // request.post request.get, request.put, request.options
    let userInfo = await request.get('apiUrl', {
        params: param
    })
    console.info()
}