# 技术栈

## 1. 目录

<!-- TOC depthFrom:2 -->

- [1. 目录](#1-目录)
- [2. 底层原理](#2-底层原理)
    - [2.1. 操作系统](#21-操作系统)
    - [2.2. Linux](#22-linux)
        - [2.2.1. Linux下各文件夹功能](#221-linux下各文件夹功能)
        - [2.2.2. Shell命令](#222-shell命令)
    - [2.3. Http协议](#23-http协议)
    - [2.4. JVM](#24-jvm)
- [3. 基础知识](#3-基础知识)
    - [3.1. 数据处理](#31-数据处理)
        - [3.1.1. MapReduce](#311-mapreduce)
- [4. 工具](#4-工具)
    - [4.1. ZooKeeper](#41-zookeeper)
    - [4.2. Kafka](#42-kafka)
    - [4.3. Git](#43-git)
        - [4.3.1. 常用命令](#431-常用命令)
        - [4.3.2. 不常用命令](#432-不常用命令)
        - [4.3.3. `git commit`](#433-git-commit)
        - [4.3.4. `git rm & git rm --cached`](#434-git-rm--git-rm---cached)
        - [4.3.5. 分支操作](#435-分支操作)
        - [4.3.6. 自定义`Git`](#436-自定义git)
    - [4.4. Maven](#44-maven)
- [5. 工程化](#5-工程化)
    - [5.1. Docker](#51-docker)
    - [5.2. 单元测试](#52-单元测试)
        - [5.2.1. Mocha](#521-mocha)
        - [5.2.2. Jest](#522-jest)
        - [5.2.3. SuperTest](#523-supertest)
- [6. 开发语言](#6-开发语言)
    - [6.1. Java](#61-java)
    - [6.2. JavaScript](#62-javascript)
    - [6.3. NodeJS](#63-nodejs)
        - [6.3.1. 内存泄漏](#631-内存泄漏)
        - [6.3.2. 编码问题](#632-编码问题)
    - [6.4. TypeScript](#64-typescript)
- [7. 数据库](#7-数据库)
    - [7.1. MySQL](#71-mysql)
        - [7.1.1. 锁机制](#711-锁机制)
    - [7.2. Moongo](#72-moongo)
    - [7.3. ElasticSearch](#73-elasticsearch)
    - [7.4. Spark](#74-spark)
    - [7.5. Hadoop](#75-hadoop)

<!-- /TOC -->

## 2. 底层原理

### 2.1. 操作系统

### 2.2. Linux

#### 2.2.1. Linux下各文件夹功能

> **`COPY FROM`**[Linux文件系统](http://c.biancheng.net/cpp/html/2779.html)

<!-- markdownlint-disable MD013 -->
| 目录  | 说明                                                                                                                                                                              |
| :---- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /     | 根目录，只能包含目录，不能包含具体文件。                                                                                                                                          |
| /bin  | binary，二进制/可执行文件。很多命令就对应/bin目录下的某个程序，例如 ls、cp、mkdir。/bin目录对所有用户有效。                                                                       |
| /boot | 系统启动文件，例如Linux内核、引导程序等。                                                                                                                                         |
| /dev  | device，硬件驱动程序。例如声卡、磁盘驱动等，还有如 /dev/null、/dev/console、/dev/zero、/dev/full 等文件。                                                                         |
| /etc  | etcetera，主要包含系统配置文件和用户、用户组配置文件。                                                                                                                            |
| /home | 用户工作目录（主目录），每个用户都会分配一个目录。                                                                                                                                |
| /lib  | library，主要包含共享库文件，类似于Windows下的DLL；有时也会包含内核相关文件。                                                                                                     |
| /mnt  | mount，临时挂载文件系统。这个目录一般是用于存放挂载储存设备的挂载目录的，例如挂载CD-ROM的cdrom目录。                                                                              |
| /opt  | option，可择的文件目录，一般使用用于安装自定义软件包或者第三方工具                                                                                                                |
| /proc | process，操作系统运行时，进程（正在运行中的程序）信息及内核信息（比如cpu、硬盘分区、内存信息等）存放在这里。<br>/proc目录伪装的文件系统proc的挂载目录，proc并不是真正的文件系统。 |
| /sbin | superuser binary，和 /bin 类似，主要包含可执行文件，不过一般是系统管理所需要的，不是所有用户都需要。                                                                              |
| /tmp  | temporary，临时文件目录，系统重启后不会被保存。                                                                                                                                   |
| /usr  | user，该目录下的文件比较混杂，包含了管理命令、共享文件、库文件等，可以被很多用户使用。                                                                                            |
| /var  | variable，主要包含一些可变长度的文件，会经常对数据进行读写，例如日志文件和打印队列里的文件。                                                                                      |
<!-- markdownlint-enable MD013 -->

#### 2.2.2. Shell命令

- `tree`

### 2.3. Http协议

### 2.4. JVM

## 3. 基础知识

### 3.1. 数据处理

#### 3.1.1. MapReduce

> [MapReduce: Simplified Data Processing on Large Clusters](https://ai.google/research/pubs/pub62)
>
> [[翻译]MapReduce: Simplified Data Processing on Large Clusters](https://www.cnblogs.com/fuzhe1989/p/3413457.html)

## 4. 工具

### 4.1. ZooKeeper

### 4.2. Kafka

### 4.3. Git

> **`COPY FROM`**[Git教程 - By 廖雪峰](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

#### 4.3.1. 常用命令

```shell

## 查询缓存区状态
git status
## 添加文件到缓存区
git add .
```

#### 4.3.2. 不常用命令

```shell

## 查看提交日志
git log --pretty=oneline
## 查看命令历史
git reflog
```

#### 4.3.3. `git commit`

> **`COPY FROM`** [git commit 规范指南](https://segmentfault.com/a/1190000009048911)

```shell

## 全局安装CLI向导
npm install -g commitizen

## 然后，在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式。
commitizen init cz-conventional-changelog --save --save-exact

```

#### 4.3.4. `git rm & git rm --cached`

> **`COPY FROM`** [git rm与git rm --cached](https://www.cnblogs.com/toward-the-sun/p/6599656.html)

#### 4.3.5. 分支操作

```shell
## 查看分支
git branch

## 创建分支
git branch <name>

## 切换到分支
git checkout <name>

## 创建+切换分支
git checkout -b <name>

## 合并分支到当前分支
git marge <name>

## 删除分支
git branch -d <name>
```

#### 4.3.6. 自定义`Git`

- 自定义配置

```shell
## git命令显示颜色
git config --global color.ui true
```

- 配置命令别名

```shell

## 定义git lg别名
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

## 定义常用别名
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.br branch
git config --global alias.last 'log -1'
```

```shell

## 切换到dev
## 提交dev
## 合并dev到master
## 提交master

```

### 4.4. Maven

## 5. 工程化

### 5.1. Docker

> [Docker run 命令 | 菜鸟教程](http://www.runoob.com/docker/docker-run-command.html)

```shell

## 查询是否有对应的image，及其版本信息
docker search redis

## 下载最新版本
docker pull redis

## 启动镜像，并中转接口，指定启动名称
docker run -it --name redis-server -p 6379:6379 redis
docker run -it --name mongodb -p 27017:27017 mongo
## 进入容器
docker exec -it mongodb mongo admin

## CTRL+Q+P 退出

## 查看已启动镜像
docker ps
## 查看所有镜像
docker ps -a
```

### 5.2. 单元测试

> [全栈测试实战：用Jest测试Vue+Koa全栈应用](https://blog.csdn.net/itheima_Wujie/article/details/78566617)

#### 5.2.1. Mocha

#### 5.2.2. Jest

> [Async testing Koa with Jest](https://hackernoon.com/async-testing-koa-with-jest-1b6e84521b71)
>
> [A clear and concise introduction to testing Koa with Jest and Supertest](https://www.valentinog.com/blog/testing-api-koa-jest/)

#### 5.2.3. SuperTest

## 6. 开发语言

### 6.1. Java

### 6.2. JavaScript

### 6.3. NodeJS

#### 6.3.1. 内存泄漏

#### 6.3.2. 编码问题

因为`Node`的编码统一使用`UTF-8`，所以极少有可能遇到编码的问题，但是也非绝对，当上传、下载文件时，文件内部的编码一般不是`UTF-8`，导致`Node`文件流生成的`Buffer`对象时产生乱码。
解决方式：

- 上传文件
- 下载文件

```javascript
  const json={}; // 生成对应json或者其他数据
  const iconv = new Iconv('UTF-8', 'GBK//IGNORE'); // 定义buffer的转码器
  const content = iconv.convert(json);
  const filename = iconv.convert('文件名.csv').toString('binary');
  res.setHeader('Pragma', 'public');
  res.setHeader('Expires', '0');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  res.setHeader('Content-Type', 'text/csv; charset=GBK');
  res.setHeader('Content-Disposition', 'attachment;filename="' + filename + '"');
  res.setHeader('Content-Length', content.length);
  res.end(content);
```

### 6.4. TypeScript

## 7. 数据库

### 7.1. MySQL

#### 7.1.1. 锁机制

> [『浅入浅出』MySQL 和 InnoDB](https://draveness.me/mysql-innodb)

### 7.2. Moongo

### 7.3. ElasticSearch

### 7.4. Spark

### 7.5. Hadoop
