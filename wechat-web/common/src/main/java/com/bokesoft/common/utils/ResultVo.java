package com.bokesoft.common.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResultVo<T> { // 泛型约束，返回的数据类型不确定
    private String msg; // 操回信息
    private int code; // 状态码
    private T data; // 泛型约束 返回值
}

