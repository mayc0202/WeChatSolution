//package com.bokesoft.wechat.config.jwt;
//
//import io.jsonwebtoken.*;
//import lombok.Data;
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.stereotype.Component;
//
//import java.util.Date;
//import java.util.UUID;
//
//@Data // 将配置的值set到对应的字段
//@Component
//@ConfigurationProperties(prefix = "jwt") // 扫描到application.yml文件中前缀是jwt的
//public class JwtConfig {
//    // 密钥
//    private String tokenSecret;
//    // 过期时间
//    private String expirationTime;
//
//    /**
//     * 生成token(参数1，参数2)
//     * @param userAdmin
//     * @return
//     */
//    public String createToken(String userAdmin) {
//        JwtBuilder jwtBuilder = Jwts.builder(); // 创建一个jwt对象
//        String jwtToken = jwtBuilder
//                //header 头部
//                .setHeaderParam("type","JWT")
//                .setHeaderParam("alg","HS256")
//                //payload 加密
//                .claim("userPassword",userAdmin)
//                //载荷
//                .setSubject("admin-login") // 主题
//                .setExpiration(new Date(System.currentTimeMillis()+Long.valueOf(expirationTime))) // 有效时间 系统时间加上设置的时间
//                .setId(UUID.randomUUID().toString()) // UUID生成
//                // 签名
//                .signWith(SignatureAlgorithm.HS256,tokenSecret) // 套用上面头部指定的HS256签名
//                .compact(); // 字符串拼接
//        return jwtToken;
//    }
//
//    /**
//     * 解析token
//     * @param token
//     * @return
//     */
//    public Claims praseToken(String token) {
//        JwtParser jwtParser = Jwts.parser();
//        // 通过加密盐解析出包含token的Claims类似集合的数据
//        Jws<Claims> claimsJws = jwtParser.setSigningKey(tokenSecret).parseClaimsJws(token);
//        return claimsJws.getBody();
//    }
//
//    /**
//     * 验证token
//     * @param token
//     * @return
//     */
//    public boolean checkToken(String token) {
//        // 为空直接false
//        if (token == null) return false;
//        // 解析有异常也直接false
//        Claims claims;
//        try {
//            claims = praseToken(token);
//        } catch (Exception e) {
//            return false;
//        }
//        return true;
//    }
//}
