package com.bokesoft.common.status;

/**
 * 返回消息,需要的可以自行添加
 */
public class ResultMsg {

    public static final String WEBSOCKET_MESSAGE_USER_UNREAD = "用户未读取数据已存入Redis";

    public static final String SUCCESS_MSG = "操作成功";
    public static final String ERROR_MSG = "操作失败";
    public static final String SYSTEM_ERROR_MSG = "系统异常";
    public static final String DATA_NULL = "返回值为空";

    public static final String COUPON_STOCK_NULL = "库存量不足";

    public static final String LOGIN_SUCCESS = "登录成功";
    public static final String LOGIN_FAIL = "登录失败";
    public static final String REGISTER_SUCCESS = "注册成功";
    public static final String REGISTER_FAIL = "注册失败";
    public static final String TOKEN_INVALID = "token失效";

    public static final String SYYSTEM_DEAD = "服务器宕机";

    public static final String PHONE_CODE_SUCCESS = "手机验证码发送成功";
    public static final String PHONE_CODE_FAIL = "手机验证码发送失败";
    public static final String PHONE_NUMBER_NONE = "手机号为空";
    public static final String PHONE_CODE_NONE = "验证码为空";
}
