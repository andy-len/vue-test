import request from "./../libs/axios.js";
export asyn function getUserInfo () {
    // request.post request.get, request.put, request.options
    let userInfo = await request.get('apiUrl', {
        params: param
    })
}