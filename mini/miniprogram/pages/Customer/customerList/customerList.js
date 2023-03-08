// pages/Customer/customerList/customerList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        customer: {
            OID: '', // 对象标识
            Code: '', // 编码
            Name: '', // 姓名
            IndustryID: '', // 行业
            DeptID: '', // 部门
            SalesmanID: '', // 所属销售
            CustomerSourceID: '', // 客户来源
            RegisteredCapital: 0, // 注册资金
            EnterpriseNature: '', // 企业性质
            Location: '', // 详细地址
            Bank: '', // 银行
            BankCardNumber: '', // 卡号
        },
        customerInfo: {
            customer: {},
            contactList: [] // 联系人集合
        },
        customerArr: [], // 客户集合
    },

    // 添加
    addCustomer() {
        wx.setStorageSync('customerArr', JSON.stringify(this.data.customerArr))
        wx.navigateTo({
            url: '../newCustomer/newCustomer',
        })
    },

    // 详情页面
    customerIndodeatil(e) {
        var that = this
    },

    // 查询页面
    search() {
        var that = this
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
        var customerInfo = {
            customer: {},
            contactList: [] // 联系人集合
        }
        var array = []
        var customerArr = JSON.parse(wx.getStorageSync('customerArr'))
        for(var i = 0;i < customerArr.length;i++) {
            array[i] = customerArr[i]
        }
        if (that.judgePage()) {
            customerInfo = JSON.parse(wx.getStorageSync('customerInfo'))
            array.push(customerInfo)
        }
        that.setData({
            customerArr: array
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