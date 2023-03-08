// pages/Customer/contacts/contacts.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 联系人
        contact: {
            OID: '', // 对象标识
            SOID: '', // 客户OID
            ContactName: '', // 联系人姓名
            Sex: '', // 性别
            Department: '', // 部门
            Job: '', // 职务
            Telephone: '', // 电话
            Email: '', // 邮箱
            Other: '', // 其他信息
            Crux: false, // 是否关键联系人
        },
        // 联系人集合
        contactList: [],
        // 性别
        SexArr: [{
                OID: '',
                Name: '男'
            },
            {
                OID: '',
                Name: '女'
            }
        ],
        // 部门
        DeptArr: [{
                OID: '',
                Name: '销售部'
            },
            {
                OID: '',
                Name: '人事部'
            }
        ],
        // 职务
        JobArr: [{
                OID: '',
                Name: '管理人员'
            },
            {
                OID: '',
                Name: '普通职员'
            }
        ],
        isFlag: false, // 是否展示添加联系人
        isKeyContact: false, // 是否已存在关键联系人
    },

    // 添加联系人
    addContact() {
        this.setData({
            isFlag: true
        })
    },

    // 添加
    inset() {
        var that = this
        const array = []
        for (var i = 0; i < that.data.contactList.length; i++) {
            array[i] = that.data.contactList[i]
        }
        array.push(that.data.contact)
        that.setData({
            contactList: array,
            isFlag: false,
            contact: null
        })
    },

    // 保存
    saveBtn() {
        var that = this
        const jsonObject = JSON.stringify(that.data.contactList)
        wx.setStorageSync('contactList', jsonObject)
        wx.navigateTo({
            url: '../newCustomer/newCustomer',
        })
    },

    // 姓名赋值
    inputContactName(e) {
        this.setData({
            ['contact.ContactName']: e.detail.value
        })
    },

    // 性别赋值
    bindSex(e) {
        this.setData({
            ['contact.Sex']: this.data.SexArr[e.detail.value]
        })
    },

    // 部门赋值
    bindDept(e) {
        this.setData({
            ['contact.Department']: this.data.DeptArr[e.detail.value]
        })
    },

    // 职务赋值
    bindJob(e) {
        this.setData({
            ['contact.Job']: this.data.JobArr[e.detail.value]
        })
    },

    // 电话赋值
    inputTelephone(e) {
        this.setData({
            ['contact.Telephone']: e.detail.value
        })
    },

    // 邮箱赋值
    inputEmail(e) {
        this.setData({
            ['contact.Email']: e.detail.value
        })
    },

    // 其他信息
    inputOther(e) {
        this.setData({
            ['contact.Other']: e.detail.value
        })
    },

    // 是否关键联系人
    checkCrux(e) {
        if (!this.data.isKeyContact) {
            this.setData({
                ['contact.Crux']: e.detail.value,
                isKeyContact: true
            })
        } else {
            this.setData({
                ['contact.Crux']: false
            })
        }
    },

    // 删除临时联系人
    delete(e) {
        var index = e.currentTarget.dataset.index
        this.data.contactList[index]
        var array = []
        for (let i = 0; i < this.data.contactList.length; i++) {
            if (i != index) array.push(this.data.contactList[i])
            else continue
        }
        console.log(array)
        this.setData({
            contactList: array
        })
        // 清空缓存
        // wx.removeStorageSync('key')
    },


    // 关闭添加弹窗
    close() {
        this.setData({
            isFlag: false
        })
    },

    // 返回上一页
    back() {
        var pages = getCurrentPages()
        var num = pages.length
        wx.navigateBack({
            delta: num
        })
    },

    // 判断是否来自
    judgePage() {
        // 获取当前页面路径
        let pages = getCurrentPages();
        // 获取上个页面路径
        let prevpage = pages[pages.length - 2];
        if (prevpage.route === 'pages/Customer/newCustomer/newCustomer') {
            return true
        } else return false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this
        var contactList = [];
        if(that.judgePage()) contactList = JSON.parse(wx.getStorageSync('contactList'))
        var OID = JSON.parse(options.jsonObject)
        that.setData({
            isKeyContact: false,
            contactList: contactList,
            ['contact.SOID']: OID
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})