

/**
 * 错误弹窗
 * @param {*} title 
 * @param {*} icon 
 * @param {*} time 
 */
const showErrorToast = (title,icon,time) => {
    var paramer = {
        title: title || '错误',
        duration: time || 2500 // 展示时常/毫秒
    }
    if (icon == '') {
        Object.assign(paramer,{
            icon: 'none'
        });
    } else {
        Object.assign(paramer, {
            icon:'none',
            image: icon
        });
    }
    wx.showToast(paramer);
}

// 非空验证
const isEmpty = (param) => {
    // 先判断该参数属于什么类型

}

// 正则表达式

// 身份证验证

// 手机号验证

// 邮箱验证






module.exports = {
    isEmpty: isEmpty,
    showErrorToast: showErrorToast,
}