package com.bokesoft.common.status;

/**
 * 状态码，其他的可以自行添加
 */
public class StatusCode {
    // 请求成功
    public static final int SUCCESS_CODE = 200;
    // 服务器内部错误
    public static final int SYSTEM_ERROR_CODE = 500;
    // 无登录权限
    public static final int NO_LOGIN = 600;
    // 无权限
    public static final int NO_AUTH = 700;
    // 服务宕机
    public static final int SERVICE_DEAD = 505;
}
