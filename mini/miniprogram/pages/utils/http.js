const app = getApp();
import Util from "./util"

module.exports = class Customer {
    constructor() {
        this.globalUrl = app.globalData.globalUrl;
    }

    /**
     * Post请求
     * @param {*} params 
     */
    $httpPost(params) {
        params.method = 'POST'
        params.contentType = true
        return this.$http(params)
    }

    /**
     * Get请求
     * @param {*} params 
     */
    $httpGet(params) {
        params.method = 'GET'
        params.contentType = true
        return this.$http(params)
    }

    $http(params) {
        if (params.url == undefined) {
            console.log("请求错误----")
            return false
        }
        var hosts = this.globalUrl // 定义url前半截
        var header = { // 定义前端返回数据格式
            'content-type': params.contentType ? 'application/json' : 'application/x-www-form-urlencoded'
        }
        var apiToken = wx.getStorageSync('key')
        if (true) { // apiToken
            header.Authorization = 'Bearer' + apiToken
        }
        return new Promise((resolve, reject) => {
            wx.request({
                method: params.method || 'GET',
                url: `${hosts}${params.url}`,
                header: header,
                data: params.data || {},
                success: resolve,
                fail: err => {
                    reject(err)
                    if(err.errMsg == "request:fail timeout") {
                        Util.showErrorToast('数据请求失败，请稍后再试')
                    }
                }
            })
        })
    }
}