---
layout: post
title: Linux
date: 2018-11-20 10:20:42
tags:
---

# Linux

## 1. 目录

<!-- TOC depthFrom:2 -->

- [1. 目录](#1-目录)
- [2. 系统相关](#2-系统相关)
    - [2.1. 系统日志](#21-系统日志)
    - [2.2. 系统启停关](#22-系统启停关)
    - [2.3. 系统进程管理](#23-系统进程管理)
        - [2.3.1. 系统进程后台启动](#231-系统进程后台启动)
        - [2.3.2. `netstat`](#232-netstat)
        - [2.3.3. `lsof`](#233-lsof)
    - [2.4. 文件系统管理](#24-文件系统管理)
        - [2.4.1. `tar -zxvf`](#241-tar--zxvf)
        - [2.4.2. 全局搜索](#242-全局搜索)
        - [2.4.3. `scp`](#243-scp)
- [3. 应用工具](#3-应用工具)
    - [3.1. Docker](#31-docker)
    - [3.2. Nginx](#32-nginx)
    - [3.3. shadowsocks安装配置](#33-shadowsocks安装配置)
- [4. Web相关](#4-web相关)
    - [4.1. NodeJS](#41-nodejs)
    - [4.2. Redis](#42-redis)
    - [4.3. Mysql](#43-mysql)
- [5. 重装系统shell命令集](#5-重装系统shell命令集)
    - [5.1. 安装vim](#51-安装vim)
    - [5.2. 安装gcc/g++](#52-安装gccg)
    - [5.3. 安装node](#53-安装node)
    - [5.4. 安装git](#54-安装git)

<!-- /TOC -->

## 2. 系统相关

### 2.1. 系统日志

```shell
## 查看mcelog守护进程是否检测到错误信息：
mcelog --client

## 系统错误日志
## EDAC，即Error Detection And Correction（错误检测与纠正）
cat /var/log/messages | grep EDAC | wc -l
```

### 2.2. 系统启停关

```shell
## 启动所有sourceCode中node项目
~/startAllNode.sh
```

### 2.3. 系统进程管理

#### 2.3.1. 系统进程后台启动

- `nohup command &` 不挂断后台运行进程
- `jobs -l` 查看当前终端运行的后台进程
- `ps -ef | grep xxx ` 查看所有终端运行的后台进程
- `lsof -i:8090` 查看端口占用

#### 2.3.2. `netstat`

> 用来打印Linux中网络系统的状态信息，可让你得知整个Linux系统的网络情况
- `netstat -ntlp` // 查看当前所有tcp端口
- `netstat -ntulp | grep 80` // 查看所有80端口使用情况
- `netstat -an | grep 3306` // 查看所有3306端口使用情况
- `netstat -nap | grep 8090` 

#### 2.3.3. `lsof`

> lsof（list open files）是一个列出当前系统打开文件的工具

```shell
# 安装
yum install lsof

# 查看端口占用
lsof -i:3000

# 查看文件打开数量
lsof [filename]
```

### 2.4. 文件系统管理

#### 2.4.1. `tar -zxvf` 

> 压缩、解压缩
- 这五个是独立的命令，压缩解压都要用到其中一个，可以和别的命令连用但只能用其中一个。
    - `-c`: 建立压缩档案
    - `-x`：解压
    - `-t`：查看内容
    - `-r`：向压缩归档文件末尾追加文件
    - `-u`：更新原压缩包中的文件
- 下面的参数是根据需要在压缩或解压档案时可选的
    - `-z`：有gzip属性的
    - `-j`：有bz2属性的
    - `-Z`：有compress属性的
    - `-v`：显示所有过程
    - `-O`：将文件解开到标准输出
- 下面的参数-f是必须的
    - `-f`: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。

#### 2.4.2. 全局搜索

- `find / -name  'cd'` 
    - 全局搜索命令
    - `find <指定目录> <指定条件> <指定内容>`
- `whereis grep`

> 使用`whereis`命令可以搜索`linux`系统中的所有可执行文件即二进制文件。

- `which java`

> 使用`which`命令查看系统命令是否存在，并返回系统命令所在的位置。

#### 2.4.3. `scp`

**从Linux服务端下载文件到本地**

> [从Linux服务器下载文件夹到本地](https://blog.csdn.net/qianzhaovic/article/details/79031359)

```shell
# scp [源地址] [目的地址]
# 从192.168.1.101地址，使用root用户，下载/root/download文件夹下的内容；拷贝文件夹，加-r参数
scp -r root@192.168.1.101:/root/downlowd ./  
```

## 3. 应用工具

### 3.1. Docker

```shell
## 列出所有在运行的容器信息
docker ps

## 显示所有的容器，包括未运行的。
docker ps -a

## 创建一个新的容器并运行一个命令
## -d: 后台运行容器，并返回容器ID；
## -i: 以交互模式运行容器；
## -t: 为容器重新分配一个伪输入终端；
docker run -dit [service]

## 启动已被停止的容器
docker start [service]
```

### 3.3. shadowsocks安装配置

> 108.160.143.127
>
> https://my.vultr.com/
> 一键安装参考 https://blog.csdn.net/lihuaichen/article/details/79311785

```shell

yum -y upgrade

yum install python-setuptools

easy_install pip

pip install shadowsocks

yum upgrade

vim /etc/shadowsocks.json

{
  "server":"0.0.0.0",
  "server_port":8888,
  "local_address": "127.0.0.1",
  "local_port":1080,
  "password":"xxxx",
  "timeout":600,
  "method":"aes-256-cfb"
}

ssserver -d restart -c /etc/shadowsocks.json  &
```

## 4. Web相关

### 4.1. NodeJS

### 4.2. Redis

### 4.3. Mysql

## 5. 重装系统shell命令集

### 5.1. 安装vim

```shell
yum install vim
```

### 5.2. 安装gcc/g++

```shell
yum install gcc
yum install gcc-c++ libstdc++-devel
```

### 5.3. 安装node

> https://www.cnblogs.com/liuqi/p/6483317.html
> 
> 从 https://nodejs.org/en/download/ 下载 `Linux二进制文件`

- 下载node源码

```shell
cd /usr/local/node
wget  https://nodejs.org/dist/v8.11.3/node-v8.11.3-linux-x64.tar.xz
```

- 解压缩

```shell
tar xvf node-v8.11.3-linux-x64.tar.xz
```

- 配置环境变量NODE_HOME

```shell
ln -s /usr/local/node/node-v8.11.3-linux-x64/bin/npm /usr/local/bin/
ln -s /usr/local/node/node-v8.11.3-linux-x64/bin/node /usr/local/bin/
```

- 检查

```shell
node -v
```

### 5.4. 安装git

> https://git-scm.com/book/zh/v1/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git

```shell
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel
```
