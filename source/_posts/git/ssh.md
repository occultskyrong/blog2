---
layout: post
title: SSH相关命令
date: 2018-11-20 10:07:05
tags:
---

# SSH相关命令

## 1. 目录

<!-- TOC depthFrom:2 -->

- [1. 目录](#1-目录)
- [2. 秘钥生成](#2-秘钥生成)
- [3. ssh私钥配置](#3-ssh私钥配置)
    - [3.1. 解决问题](#31-解决问题)
    - [3.2. 搜索key](#32-搜索key)
    - [3.3. 参考&引用](#33-参考引用)
    - [3.4. 解决方案](#34-解决方案)
- [4. 传送ssh公钥](#4-传送ssh公钥)

<!-- /TOC -->

## 2. 秘钥生成

> *`COPY FROM`* [服务器上的 Git - 生成 SSH 公钥](https://git-scm.com/book/zh/v1/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E7%94%9F%E6%88%90-SSH-%E5%85%AC%E9%92%A5)

```shell
$ cd ~/.ssh

# -t 加密算法 -C email地址
$ ssh-keygen -t rsa -C [your email]
Generating public/private rsa key pair.

# 存储秘钥对的文件
Enter file in which to save the key (/Users/schacon/.ssh/id_rsa):

# 自定义密码
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

## 3. ssh私钥配置

### 3.1. 解决问题

- 当公司、个人存在多个基于git构建的repository时
- 需要针对不同的域名/IP来使用不同的私钥+公钥对来实现权限管理
- 通过`git config`方式，需要记忆多个私钥的用途，而且命令拼接不方便，具体见 [git-config][3]
- 事先配置好各域名/IP对应使用的私钥，直接使用git命令来完成对不同地址的操作

### 3.2. 搜索key

- **ssh config**

### 3.3. 参考&引用

> - [simplify-your-life-with-an-ssh-config-file][1]
> - [git 指定sshkey访问远程仓库][2]
> - [git-config][3]

[1]: http://nerderati.com/2011/03/17/simplify-your-life-with-an-ssh-config-file/
[2]: https://segmentfault.com/a/1190000005349818
[3]: https://git-scm.com/docs/git-config

### 3.4. 解决方案

- 环境
    - `macOS Sierra 10.12.6 (16G1114)`
    - `git version 2.14.3 (Apple Git-98)`

- 编辑`config`

        ```shell
        vim ~/.ssh/config
        ```

- 配置说明

        ```bash
        Host [alias] # 别名或者repositories地址
            Hostname  [git address] # git地址域名或者IP
            User git # 用户，直接使用git即可
            IdentityFile ~/.ssh/id-rsa # 私钥文件路径
        ```

- 配置栗子,以 `git@gitlab.com:kacha/kacha-demo.git` 为例
    - 第一种配置

        ```bash
        Host gitlab.com # 此处为地址
            User git
            IdentityFile ~/.ssh/gitlab-public-rsa
        ```
        直接使用 `git clone git@gitlab.com:kacha/kacha-demo.git`

    - 第二种配置

        ```bash
        Host gitlab-public # 此处为别名
            Hostname gitlab.com # 此处为地址
            User git
            IdentityFile ~/.ssh/gitlab-public-rsa 
        ```
        需要使用 `git clone git@gitlab-public:kacha/kacha-demo.git`

    - 当地址为IP ( 内网环境自己搭建的git ) 而非域名时

        如 `git@192.168.0.101:kacha/kacha-demo.git`

        将对应的域名 ( `gitlab.com` ) 换成IP ( `192.168.0.101` ) 即可

## 4. 传送ssh公钥

> https://jingyan.baidu.com/article/c275f6ba08267ae33c756758.html

```shell
ssh-copy-id -i ~/.ssh/id_rsa.pub [user]@[ip]
```
