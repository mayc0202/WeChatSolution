// components/nav/nav.js
const app = getApp()
Component({
    options: {
        multipleSlots: true
    },

    /**
     * 组件的属性列表
     */
    properties: {
        isIndex: { // 是否是首页
            type: Boolean, // 数值类型
            value: false
        },
        navTitle: { // 标题
            type: String,
            value: ''
        },
        isShow: { // 是否展示返回图标
            type: Boolean,
            value: false
        },
        pageNum: { // 页面层级
            type: Number,
            value: 1
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        capsule: {}
    },

    lifetimes: {
        // 判断是否有上一级，如果有显示
        attached: function () {
            console.log("当前页信息", getCurrentPages)
            this.setData({
                isShow: getCurrentPages.length == 1 ? false : true
            })
        }
    },

    ready() {
        // 获取机型状态信息
        const {
            statusBarHeight,
            navBarHeight
        } = app.globalData
        console.log(app.globalData)
        this.setData({
            statusBarHeight,
            navBarHeight,
            left: app.globalData.windowWidth - app.globalData.capsule.right, //胶囊据右边距离
            capsule: app.globalData.capsule
        })
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 返回层级
        back(e) {
            console.log("查看e：")
            console.log(e)
            wx.navigateBack({
              delta: e.currentTarget.dataset.num
            })
        },
        // 跳转到首页
        toIndex() {
            wx.switchTab({
              url: '/miniprogram/pages/index/index',
            })
        }
    }
})