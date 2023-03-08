// app.js
const app = getApp();
App({

    onLaunch: function () {
        // 获取机型信息
        wx.getSystemInfo({
            success: (res) => {
                console.log(res)
                this.globalData.windowWidth = res.windowWidth // 设置全局窗口长度
                this.globalData.statusBarHeight = res.statusBarHeight // 设置全局状态栏高度
                this.globalData.windowHeight = 44 + res.statusBarHeight // 设置全局窗口高度
            },
        })
        this.globalData.capsule = wx.getMenuButtonBoundingClientRect() // 获取胶囊宽高及位置
    },
    // 全局变量
    globalData: {
        openId: '', // openid
        userInfo: null, // 用户信息
        windowWidth: 0, // 窗口长度
        windowHeight: 0, // 窗口高度
        statusBarHeight: 0, // 状态栏高度
        userInfoKey: '', // 用户登录信息key
        globalUrl: 'http://localhost:8080', // 服务器环境
        
        capsule: null, // 窗口胶囊
    }
});