---
layout: post
title: ES6.2安装
date: 2018-11-20 10:07:05
tags:
---

# ES6.2安装

> 务必保证ELK中所有组件，即`ElasticSearch、Logstash、Kibana、Filebeat`的版本都是相同的！

## 1. 目录

<!-- TOC depthFrom:2 -->

- [1. 目录](#1-目录)
- [2. 安装说明](#2-安装说明)
- [3. 安装ElasticSearch](#3-安装elasticsearch)
    - [3.1. 安装说明](#31-安装说明)
    - [3.2. 配置](#32-配置)
    - [3.3. 生成一个非root用户](#33-生成一个非root用户)
    - [3.4. 启动报错](#34-启动报错)
    - [3.5. 运行](#35-运行)
- [4. 安装ElasticSearch-head](#4-安装elasticsearch-head)
    - [4.1. 浏览器端](#41-浏览器端)
    - [4.2. 服务器端](#42-服务器端)
- [5. `Logstash`](#5-logstash)
- [6. `Kibana`](#6-kibana)
    - [6.1. 安装](#61-安装)
    - [6.2. 启动，kibana基于nodeJs， 使用命令以自定义环境变量启动](#62-启动kibana基于nodejs-使用命令以自定义环境变量启动)
    - [6.3. 停止](#63-停止)
- [7. `filebeat`](#7-filebeat)

<!-- /TOC -->

## 2. 安装说明

> version 6.2

## 3. 安装ElasticSearch

### 3.1. 安装说明

> [Elasticsearch Reference [6.2] » Getting Started » Installation](https://www.elastic.co/guide/en/elasticsearch/reference/current/_installation.html)

### 3.2. 配置

> [Elasticsearch Reference [6.2] » Set up Elasticsearch » Configuring Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/settings.html)
- JVM 内存配置
> [Elasticsearch Reference [6.2] » Set up Elasticsearch » Configuring Elasticsearch » Setting JVM options](https://www.elastic.co/guide/en/elasticsearch/reference/current/jvm-options.html)
- ES集群配置
> [Elasticsearch Reference [6.2] » Set up Elasticsearch » Important Elasticsearch configuration](https://www.elastic.co/guide/en/elasticsearch/reference/current/important-settings.html)

### 3.3. 生成一个非root用户

- 分配目录权限 `chmod -R 777`
- 切换到非root用户进行运行
> - 添加用户 https://www.cnblogs.com/clicli/p/5943788.html
> - 添加文件夹权限 http://man.linuxde.net/chmod
> - 添加权限 https://www.cnblogs.com/zox2011/archive/2013/05/28/3103824.html

### 3.4. 启动报错

> - [《ElasticSearch 5.0.0 安装部署常见错误或问题》](http://www.dajiangtai.com/community/18136.do?origin=csdn-geek&dt=1214)
> - [《Elasticsearch5.2.0部署过程的坑》](http://www.jianshu.com/p/89f8099a6d09)

### 3.5. 运行

- 后台运行

```shell
$ES_HOME/bin/elasticsearch -d
```

- 查看进程

```shell
ps -ef | grep elasticsearch
```

## 4. 安装ElasticSearch-head

**以下两种择一即可**

### 4.1. 浏览器端

> chrome浏览器安装扩展应用参见 https://chrome.google.com/webstore/detail/ffmkiejjmecolpfloofpjologoblkegm

### 4.2. 服务器端

> 服务端安装ES-head工具 参见 https://github.com/mobz/elasticsearch-head

**需要安装`grunt`和`grunt-cli`**

```shell
cnpm i grunt grunt-cli -g
```

- 配置`ES-cors`

`config/elasticsearch.yml`中

```conf
http.cors.enabled: true
http.cors.allow-origin: "*"
```

- 后台运行

`ElasticSearch-head`下

```shell
npm run start
```

- 查看进程

```shell
ps -ef | grep grunt
```

## 5. `Logstash`

> [【技术实验】mysql准实时同步数据到Elasticsearch](https://yq.aliyun.com/articles/276730)

- 安装

> [使用 `Installing from a Downloaded Binary`方式安装](https://www.elastic.co/guide/en/logstash/6.2/installing-logstash.html#installing-binary)

```shell
# 下载二进制源码
curl -L -O https://artifacts.elastic.co/downloads/logstash/logstash-6.2.4.tar.gz
# 解压缩
tar -zxvf logstash-6.2.4.tar.gz
# 在logstash路径下安装插件
./bin/logstash-plugin install logstash-input-jdbc
./bin/logstash-plugin install logstash-output-elasticsearch
```

- 下载jdbc.jar
> https://dev.mysql.com/downloads/connector/j/

- 启动

具体查看对应 `.conf` 文件中

在 `logstash` 目录下：

```shell
# The --config.test_and_exit option parses your configuration file and reports any errors.

bin/logstash -f xfa-login.logstash.conf --config.test_and_exit

# The --config.reload.automatic option enables automatic config reloading
# so that you don’t have to stop and restart Logstash every time you modify the configuration file.

bin/logstash -f xfa-login.logstash.conf --config.reload.automatic
```

- 配置定时任务文件

## 6. `Kibana`

### 6.1. 安装

> - [Installation Steps](https://www.elastic.co/downloads/kibana)

```shell
# 下载二进制源码
curl -L -O https://artifacts.elastic.co/downloads/kibana/kibana-6.2.2-linux-x86_64.tar.gz
# 解压缩
tar -zxvf kibana-6.2.2-linux-x86_64.tar.gz
```

### 6.2. 启动，kibana基于nodeJs， 使用命令以自定义环境变量启动

```shell
NODE_ENV=development ./bin/kibana
```

- 改变 `/config/kibana.yml` 中 `server.host: "0.0.0.0"`
- 关闭kibana，[linux下停止kibana](http://blog.csdn.net/wzygis/article/details/51706635)
- 后台运行

```shell
NODE_ENV=development nohup ./bin/kibana &
```

### 6.3. 停止

```shell
ps -ef | grep node
```

  查看 `./bin/../node/bin/node --no-warnings ./bin/../src/cli` 对应的`PID`，然后`kill`

## 7. `filebeat`

- 安装

```shell
curl -L -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-6.2.3-x86_64.rpm

sudo rpm -vi filebeat-6.2.3-x86_64.rpm

vim /etc/filebeat/filebeat.yml
```

- 启停关

```shell
# 启动
sudo service filebeat start
# 停止
sudo service filebeat stop
# 重启
sudo service filebeat restart
```
