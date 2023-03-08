package com.bokesoft.common.utils;

import com.bokesoft.common.status.ResultMsg;
import com.bokesoft.common.status.StatusCode;

public class ResultVoUtil {
    // 封装ResultVo返回值参数类  操作消息      状态码     返回值
    public static ResultVo Vo(String msg,int code,Object data) {
        return new ResultVo(msg,code,data);
    }

    /*succes专区*/
    // 1.
    public static ResultVo success() {
        return Vo(ResultMsg.DATA_NULL, StatusCode.SUCCESS_CODE,null);
    }
    // 2.
    public static ResultVo success(String msg) {
        return Vo(msg,StatusCode.SUCCESS_CODE,null);
    }
    // 3.
    public static ResultVo success(String msg,Object data) {
        return Vo(msg,StatusCode.SUCCESS_CODE,data);
    }
    // 4.
    public static ResultVo success(String msg,int code,Object data) {
        return Vo(msg,code,data);
    }


    /*fail专区*/
    // 1.
    public static ResultVo error() {
        return Vo(ResultMsg.DATA_NULL,StatusCode.SYSTEM_ERROR_CODE,null);
    }
    // 2.
    public static ResultVo error(String msg) {
        return Vo(msg,StatusCode.SYSTEM_ERROR_CODE,null);
    }
    // 3.
    public static ResultVo error(String msg,Object data) {
        return Vo(msg,StatusCode.SYSTEM_ERROR_CODE,data);
    }
    // 4.
    public static ResultVo error(String msg,int code,Object data) {
        return Vo(msg,code,data);
    }
}
