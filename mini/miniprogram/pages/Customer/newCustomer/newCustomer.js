// pages/Customer/newCustomer/newCustomer.js
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
            Province: '', // 省份
            Region: '', // 区域
            Location: '', // 详细地址
            Bank: '', // 银行
            BankCardNumber: '', // 卡号
            IdentifyNumber: '', // 纳税人识别号
            Remark: '', // 说明
        },
        contactList: [], // 联系人集合
        // 所属行业数组
        IndustryIDArr: [{
                OID: '0112',
                Name: '制造业'
            },
            {
                OID: '21213',
                Name: '物流'
            }
        ],
        // 所属数组部门
        DeptIDArr: [{
                OID: '34535',
                Name: '销售部'
            },
            {
                OID: '312213',
                Name: '供应链'
            }
        ],
        // 所属销售
        SalesmanIDArr: [{
                OID: '34234',
                Name: '小胡'
            },
            {
                OID: '54765',
                Name: '小马'
            }
        ],
        // 客户来源
        CustomerSourceIDArr: [{
                OID: '44353',
                Name: '线上'
            },
            {
                OID: '657',
                Name: '线下'
            }
        ],
        region: [], // 省市区
        customItem: '全部'
    },

    // 客户名称
    inputName(e) {
        var name = e.detail.value
        this.setData({
            ['customer.Name']: name
        })
    },

    // 客户编码
    inputCode(e) {
        var code = e.detail.value
        this.setData({
            ['customer.Code']: code
        })
    },

    // 所属行业
    bindIndustry(e) {
        const index = e.detail.value
        this.setData({
            ['customer.IndustryID']: this.data.IndustryIDArr[index].Name
        })
    },

    // 所属部门
    bindDept(e) {
        const index = e.detail.value
        this.setData({
            ['customer.DeptID']: this.data.DeptIDArr[index].Name
        })
    },

    // 所属销售
    bindSalesman(e) {
        const index = e.detail.value
        this.setData({
            ['customer.SalesmanID']: this.data.SalesmanIDArr[index].Name
        })
    },

    // 客户来源
    bindCustomerSource(e) {
        const index = e.detail.value
        this.setData({
            ['customer.CustomerSourceID']: this.data.CustomerSourceIDArr[index].Name
        })
    },

    // 所属销售
    bindSalesman(e) {
        const index = e.detail.value
        this.setData({
            ['customer.SalesmanID']: this.data.SalesmanIDArr[index].Name
        })
    },

    // 省市区
    bindAddress(e) {
        const address = e.detail.value
        console.log(address)
        this.setData({
            region: address,
            ['customer.Province']: this.data.region[0],
            ['customer.Redion']: this.data.region[1],
        })
    },

    // 注册资金
    inputRegisteredCapital(e) {
        var money = e.detail.value
        this.setData({
            ['customer.RegisteredCapital']: money
        })
    },

    // 企业性质
    inputEnterpriseNature(e) {
        const text = e.detail.value
        this.setData({
            ['customer.EnterpriseNature']: text
        })
    },

    // 详细地址
    bindLocation(e) {
        const text = e.detail.value
        this.setData({
            ['customer.Location']: text
        })
    },

    // 银行
    inputBank(e) {
        const text = e.detail.value
        this.setData({
            ['customer.Bank']: text
        })
    },

    // 卡号
    inputBankCardNumber(e) {
        const text = e.detail.value
        this.setData({
            ['customer.BankCardNumber']: text
        })
    },

    // 纳税人识别
    inputIdentifyNumber(e) {
        const text = e.detail.value
        this.setData({
            ['customer.IdentifyNumber']: text
        })
    },

    // 说明
    bindRemark(e) {
        const text = e.detail.value
        this.setData({
            ['customer.Remark']: text
        })
    },

    // 添加联系人
    contacts() {
        // 临时存储客户信息
        wx.setStorageSync('customer', JSON.stringify(this.data.customer))
        var OID = '111'
        // 转成json数据对象
        var object = JSON.stringify(OID) // 将OID转换JSON格式
        wx.navigateTo({
            url: `/pages/Customer/contacts/contacts?jsonObject=${object}`,
        })
    },

    // 保存
    save() {
        var that = this
        // 封装
        var customerInfo = {
            customer: {},
            customerList: []
        }
        customerInfo.customer = that.data.customer
        customerInfo.customerList = that.data.contactList
        wx.setStorageSync('customerInfo', JSON.stringify(customerInfo))
        wx.navigateTo({
            url: '../customerList/customerList',
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
        if (prevpage.route === 'pages/Customer/contacts/contacts') {
            return true
        } else return false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
       
    },



    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        var that = this
        var contactArr = []
        var customer = null
        if (that.judgePage()) {
            contactArr = JSON.parse(wx.getStorageSync('contactList'))
            customer = JSON.parse(wx.getStorageSync('customer'))
        }
        var array = []
        that.setData({
            customer: customer,
            region: array,
            contactList: contactArr
        })
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