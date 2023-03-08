package com.bokesoft.wechat.config.web;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


// 跨域拦截器
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        //设置允许跨域的路径
        registry.addMapping("/**")
                //设置允许跨域的请求域名
//                .allowedOrigins("*")
                .allowedOriginPatterns("*")
                //设置是否允许证书（是）
                .allowCredentials(true)
                //设置允许的header的属性（任何）
                .allowedHeaders("*")
                //设置允许的方法
                .allowedMethods("PUT","GET","POST","DELETE");
    }

}
