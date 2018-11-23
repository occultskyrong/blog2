---
layout: post
title: nginx
date: 2018-11-23 12:06:52
tags: nginx
---
# Nginx

## 1. 参考

> [nginx安装及使用](http://www.linuxidc.com/Linux/2016-09/134907.htm)

## 2. 目录

<!-- TOC depthFrom:2 -->

- [1. 参考](#1-参考)
- [2. 目录](#2-目录)
- [3. 命令](#3-命令)
- [4. 配置](#4-配置)
    - [4.1. 加密访问](#41-加密访问)

<!-- /TOC -->

## 3. 命令

```shell
cd /usr/local/nginx/

# 测试配置是否正确
/usr/local/nginx/sbin/nginx -t
# 启动
/usr/local/nginx/sbin/nginx  
# 强行停止
/usr/local/nginx/sbin/nginx -s stop
# 正常退出，重启时先quit后启动
/usr/local/nginx/sbin/nginx -s quit
# 重新加载配置文件
/usr/local/nginx/sbin/nginx -s reload
# 查询nginx进程
ps aux|grep nginx
# 配置nginx
vim /usr/local/nginx/conf/nginx.conf
```

## 4. 配置

```shell
    server {
        listen       80;
        server_name  zaiyiqi.sky91.cn;
        location / {
            proxy_pass http://127.0.0.1:15210;
            root zaiyiqi;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```

### 4.1. 加密访问

> http://www.ttlsa.com/nginx/nginx-basic-http-authentication/
> https://blog.csdn.net/u011078940/article/details/51252005
> https://blog.csdn.net/sinat_21302587/article/details/54599135

```shell
# 安装加密工具
yum install httpd

# 加密文件 [文件路径] [用户名] [密码]
htpasswd -b -c passwordFile username password

# 修改配置
location /
{
     auth_basic "密码提示语";  
     # 密码文件路径，使用绝对路径，否则会报403
     auth_basic_user_file /vhost/nginx_passwd;  
}

# !!!先test后reload
```
