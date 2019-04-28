# 技术栈

========================

## 1. 方法论

- 知其然，知其所以然
- 系统化学习
- 周期性总结

### 1.1. 知其然，知其所以然

- **What** ：是什么？这个技术点是什么，如何理解。
- **Where** ：这个技术点可以应用到什么场景，引出这个技术点的问题或者错误。
- **How** ：如何使用这个技术点？一步下一步的操作和使用。
- **Why** ：为什么使用这个技术点解决这个问题？

## 2. 目录

<!-- TOC depthFrom:2 depthTo:5 -->

- [1. 方法论](#1-方法论)
  - [1.1. 知其然，知其所以然](#11-知其然知其所以然)
- [2. 目录](#2-目录)
- [3. 底层原理](#3-底层原理)
  - [3.1. 操作系统原理](#31-操作系统原理)
  - [3.2. `Linux`](#32-linux)
    - [3.2.1. 操作系统](#321-操作系统)
      - [3.2.1.1. `CentOS`](#3211-centos)
      - [3.2.1.2. `Mac OS`](#3212-mac-os)
      - [3.2.1.3. `Ubuntu`](#3213-ubuntu)
    - [3.2.2. 文件系统](#322-文件系统)
      - [3.2.2.1. 文件权限](#3221-文件权限)
      - [3.2.2.2. Linux下各文件夹功能](#3222-linux下各文件夹功能)
    - [3.2.3. Shell命令](#323-shell命令)
      - [3.2.3.1. 工具命令](#3231-工具命令)
      - [3.2.3.2. 实用命令](#3232-实用命令)
      - [3.2.3.3. 自定义命令](#3233-自定义命令)
  - [3.3. `Http` 协议](#33-http-协议)
    - [3.3.1. 版本](#331-版本)
    - [3.3.2. `Headers`](#332-headers)
      - [3.3.2.1. `General` 通用首部字段](#3321-general-通用首部字段)
      - [3.3.2.2. `Request` 请求首部字段](#3322-request-请求首部字段)
      - [3.3.2.3. `Response` 响应首部字段](#3323-response-响应首部字段)
      - [3.3.2.4. `Entity` 实体首部字段](#3324-entity-实体首部字段)
  - [3.4. JVM](#34-jvm)
  - [3.5. 浏览器](#35-浏览器)
    - [3.5.1. 同源策略](#351-同源策略)
- [4. 基础知识](#4-基础知识)
  - [4.1. 数据结构](#41-数据结构)
  - [4.2. 架构](#42-架构)
    - [4.2.1. `Remote Procedure Calls`](#421-remote-procedure-calls)
    - [4.2.2. `ELK`](#422-elk)
  - [4.3. 算法](#43-算法)
    - [4.3.1. 复杂度](#431-复杂度)
      - [4.3.1.1. 时间复杂度](#4311-时间复杂度)
      - [4.3.1.2. 空间复杂度](#4312-空间复杂度)
    - [4.3.2. `MapReduce`](#432-mapreduce)
    - [4.3.3. `Bit-map`](#433-bit-map)
    - [4.3.4. `Bloom Filter`](#434-bloom-filter)
    - [4.3.5. 排序算法](#435-排序算法)
      - [4.3.5.1. 冒泡法](#4351-冒泡法)
      - [4.3.5.2. 插入法](#4352-插入法)
      - [4.3.5.3. 快速排序](#4353-快速排序)
  - [4.4. 各种锁机制](#44-各种锁机制)
    - [4.4.1. 乐观锁](#441-乐观锁)
    - [4.4.2. 悲观锁](#442-悲观锁)
    - [4.4.3. 分布式锁](#443-分布式锁)
- [5. 架构设计](#5-架构设计)
  - [5.1. 分布式](#51-分布式)
    - [5.1.1. 取号器](#511-取号器)
    - [5.1.2. 幂等性](#512-幂等性)
  - [5.2. 高并发](#52-高并发)
    - [5.2.1. 消息队列](#521-消息队列)
      - [5.2.1.1. `RabbitMQ`](#5211-rabbitmq)
- [6. 应用工具](#6-应用工具)
  - [6.1. 运维工具](#61-运维工具)
    - [6.1.1. `Grafana`](#611-grafana)
  - [6.2. 微服务](#62-微服务)
    - [6.2.1. `ZooKeeper`](#621-zookeeper)
    - [6.2.2. `Kafka`](#622-kafka)
    - [6.2.3. `K8S`](#623-k8s)
  - [6.3. 架构](#63-架构)
    - [6.3.1. 规则引擎](#631-规则引擎)
  - [6.4. 项目管理](#64-项目管理)
  - [6.5. 版本管理](#65-版本管理)
    - [6.5.1. `SemVer`](#651-semver)
    - [6.5.2. `Git`](#652-git)
      - [6.5.2.1. 常用命令](#6521-常用命令)
      - [6.5.2.2. 不常用命令](#6522-不常用命令)
      - [6.5.2.3. `git commit`](#6523-git-commit)
      - [6.5.2.4. 工作区、暂存区、本地仓库、远程仓库](#6524-工作区暂存区本地仓库远程仓库)
      - [6.5.2.5. 分支操作](#6525-分支操作)
      - [6.5.2.6. 自定义`Git`命令](#6526-自定义git命令)
    - [6.5.3. `GitHub`](#653-github)
      - [6.5.3.1. `Github` 搜索](#6531-github-搜索)
  - [6.6. `Maven`](#66-maven)
  - [6.7. `NPM`](#67-npm)
    - [6.7.1. `npm outdated`](#671-npm-outdated)
    - [6.7.2. `npm update`](#672-npm-update)
    - [6.7.3. `npm cache`](#673-npm-cache)
  - [6.8. `Yarn`](#68-yarn)
- [7. 工程化](#7-工程化)
  - [7.1. `Docker`](#71-docker)
    - [7.1.1. 释义](#711-释义)
    - [7.1.2. `docker`命令](#712-docker命令)
      - [7.1.2.1. `docker network`](#7121-docker-network)
    - [7.1.3. `docker kafka`](#713-docker-kafka)
    - [7.1.4. `docker mysql`](#714-docker-mysql)
    - [7.1.5. `docker mongo`](#715-docker-mongo)
  - [7.2. 单元测试](#72-单元测试)
    - [7.2.1. `Mocha`](#721-mocha)
    - [7.2.2. `Jest`](#722-jest)
    - [7.2.3. `SuperTest`](#723-supertest)
  - [7.3. 前端工程化](#73-前端工程化)
    - [7.3.1. `webpack`](#731-webpack)
    - [7.3.2. `gulp`](#732-gulp)
    - [7.3.3. `grunt`](#733-grunt)
- [8. 开发语言](#8-开发语言)
  - [8.1. `Java`](#81-java)
  - [8.2. `JavaScript`](#82-javascript)
    - [8.2.1. `JavaScript` 源码阅读](#821-javascript-源码阅读)
      - [8.2.1.1. `sort`](#8211-sort)
  - [8.3. `NodeJS`](#83-nodejs)
    - [8.3.1. 奇淫巧技](#831-奇淫巧技)
    - [8.3.2. 经典面试题](#832-经典面试题)
      - [8.3.2.1. 实现一个 `sleep` 函数](#8321-实现一个-sleep-函数)
      - [8.3.2.2. 生成 `从0到n` 的数组](#8322-生成-从0到n-的数组)
      - [8.3.2.3. 实现高阶函数](#8323-实现高阶函数)
    - [8.3.3. `Modules`](#833-modules)
    - [8.3.4. 生产问题](#834-生产问题)
      - [8.3.4.1. 内存泄漏](#8341-内存泄漏)
      - [8.3.4.2. 文件编码问题](#8342-文件编码问题)
  - [8.4. `TypeScript`](#84-typescript)
- [9. 数据库](#9-数据库)
  - [9.1. 调优方式](#91-调优方式)
    - [9.1.1. 分库分表](#911-分库分表)
    - [9.1.2. 读写分离](#912-读写分离)
    - [9.1.3. 查询缓存](#913-查询缓存)
  - [9.2. `Redis`](#92-redis)
  - [9.3. `MySQL`](#93-mysql)
    - [9.3.1. 常规操作](#931-常规操作)
      - [9.3.1.1. 权限](#9311-权限)
      - [9.3.1.2. 数据导出](#9312-数据导出)
    - [9.3.2. 锁机制](#932-锁机制)
  - [9.4. `Mongo`](#94-mongo)
    - [9.4.1. `MongoDB`](#941-mongodb)
      - [9.4.1.1. ObjectId Generator](#9411-objectid-generator)
      - [9.4.1.2. `oplog`](#9412-oplog)
    - [9.4.2. `Mongoose`](#942-mongoose)
      - [9.4.2.1. `Schema`](#9421-schema)
      - [9.4.2.2. `find`](#9422-find)
      - [9.4.2.3. `Aggregate`](#9423-aggregate)
    - [9.4.3. `MongoDB-to-ElasticSearch`](#943-mongodb-to-elasticsearch)
  - [9.5. ElasticSearch](#95-elasticsearch)
  - [9.6. `Spark`](#96-spark)
  - [9.7. `Hadoop`](#97-hadoop)
- [10. 解决方案](#10-解决方案)
  - [10.1. 电商系统](#101-电商系统)

<!-- /TOC -->

## 3. 底层原理

阐述计算机是如何工作；操作系统对系统资源的使用管理；协议说明

### 3.1. 操作系统原理

### 3.2. `Linux`

#### 3.2.1. 操作系统

##### 3.2.1.1. `CentOS`

##### 3.2.1.2. `Mac OS`

- `Homebrew` ，`macOS` 缺失的软件包的管理器

```bash
# 包管理工具 Homerew
# 安装xxx包
brew install xxx
```

##### 3.2.1.3. `Ubuntu`

#### 3.2.2. 文件系统

##### 3.2.2.1. 文件权限

> **`COPY FROM`**[Linux 下 ls -l 命令执行显示结果的每一列含义](https://blog.csdn.net/zhuoya_/article/details/77418413)
>
> **`COPY FROM`**[Linux修改文件属性及权限](https://blog.csdn.net/qq_36193761/article/details/78817500)

- 文件属性及权限

```bash
# 显示该文件夹下所有文件和文件夹
ls -l

# 给所有人增加执行权限
chmod a+x filename
```

- 变更权限

##### 3.2.2.2. Linux下各文件夹功能

> **`COPY FROM`**[Linux文件系统](http://c.biancheng.net/cpp/html/2779.html)

<!-- markdownlint-disable MD013 -->
| 目录  | 说明                                                                                                         |
| :---- | :----------------------------------------------------------------------------------------------------------- |
| /     | 根目录，只能包含目录，不能包含具体文件。                                                                     |
| /bin  | binary，二进制/可执行文件。很多命令就对应/bin目录下的某个程序，例如 ls、cp、mkdir。/bin目录对所有用户有效。  |
| /boot | 系统启动文件，例如Linux内核、引导程序等。                                                                    |
| /dev  | device，硬件驱动程序。例如声卡、磁盘驱动等，还有如 /dev/null、/dev/console、/dev/zero、/dev/full 等文件。    |
| /etc  | etcetera，主要包含系统配置文件和用户、用户组配置文件。                                                       |
| /home | 用户工作目录（主目录），每个用户都会分配一个目录。                                                           |
| /lib  | library，主要包含共享库文件，类似于Windows下的DLL；有时也会包含内核相关文件。                                |
| /mnt  | mount，临时挂载文件系统。这个目录一般是用于存放挂载储存设备的挂载目录的，例如挂载CD-ROM的cdrom目录。         |
| /opt  | option，可择的文件目录，一般使用用于安装自定义软件包或者第三方工具                                           |
| /proc | process，操作系统运行时，进程（正在运行中的程序）信息及内核信息（比如cpu、硬盘分区、内存信息等）存放在这里。 |
| /sbin | superuser binary，和 /bin 类似，主要包含可执行文件，不过一般是系统管理所需要的，不是所有用户都需要。         |
| /tmp  | temporary，临时文件目录，系统重启后不会被保存。                                                              |
| /usr  | user，该目录下的文件比较混杂，包含了管理命令、共享文件、库文件等，可以被很多用户使用。                       |
| /var  | variable，主要包含一些可变长度的文件，会经常对数据进行读写，例如日志文件和打印队列里的文件。                 |
<!-- markdownlint-enable MD013 -->

#### 3.2.3. Shell命令

##### 3.2.3.1. 工具命令

- `axel`
  - 说明：
    - Light command line download accelerator for Linux and Unix
    - Linux下一个不错的HTTP/ftp高速下载工具。支持多线程下载、断点续传，且可以从多个地址或者从一个地址的多个连接来下载同一个文件。
  - 官网：[GitHub » axel-download-accelerator/axel](https://github.com/axel-download-accelerator/axel)
  - 安装：`brew install axel`
  - 用法：
    - 最大连接数：`-n x`，如 `-n 5`，即最多使用5个连接。
    - 最大下载速度：`-s x`，如 `-s 1024`，即最大速度为 `1024bytes/s`
  - 参考：

    > **`COPY FROM`** [Linux下载工具wget和axel简介](https://www.kafan.cn/edu/6141522.html)
    > **`COPY FROM`** [Linux命令大全 » 网络管理 » axel](http://man.linuxde.net/axel)

- `free`
- `ln`

链接文件，创建快捷方式

```bash
ln -s [源文件路径] [目标路径]
```

- `ls`

> **`COPY FROM`** [MAC OS X 命令终端的颜色显示](https://blog.csdn.net/wxqee/article/details/49406597)

- `lsof`
- `top`
- `tree`

##### 3.2.3.2. 实用命令

能解决某个/某些问题的一个/组命令

- 查询某个命令/软件的安装目录，以 `redis` 举例

```bash
which redis
whereis redis
# 若以上无法找到，使用 ps 得到进程号 xxx
ps -ef | grep redis
ls -l /proc/xxx/cwd
```

##### 3.2.3.3. 自定义命令

- `Mac`自定义`shell`命令

> **`COPY FROM`** [Mac: Alias[设置命令的别名]](https://www.cnblogs.com/ihojin/p/mac-align.html)

```bash
# 编辑，新增命令别名
vim ~/.bash_profile

# 更新内建命令
source ~/.bash_profile
```

- 命令别名

```bash
# User Specific Shell And Functions

# 查询en0网卡的IP地址
alias ipget="ipconfig getifaddr en0"
```

- `zsh`

```bash
# 安装
sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

# 编辑配置文件
vim ~/.zshrc

# 增加代码
source ~/.bash_profile

# 重加载zsh配置
source ~/.zshrc
```

### 3.3. `Http` 协议

> **`BOOK`** [《图解HTTP》- 上野 宣 (作者) 于均良 (译者)](http://www.ituring.com.cn/book/1229)

#### 3.3.1. 版本

#### 3.3.2. `Headers`

##### 3.3.2.1. `General` 通用首部字段

既可以出现在请求报头，也可以出现在响应报头中。

- `Cache-Control` : 控制缓存的行为，`private, max-age=0, no-cache`

##### 3.3.2.2. `Request` 请求首部字段

##### 3.3.2.3. `Response` 响应首部字段

##### 3.3.2.4. `Entity` 实体首部字段

### 3.4. JVM

### 3.5. 浏览器

#### 3.5.1. 同源策略

## 4. 基础知识

### 4.1. 数据结构

### 4.2. 架构

#### 4.2.1. `Remote Procedure Calls`

#### 4.2.2. `ELK`

`ElasticSearch、Logstash、Kibana、FileBeat` 等 `Elastic Stack` 相关工具的说明

具体见 [ElasticSearch](./ElasticSearch)

### 4.3. 算法

#### 4.3.1. 复杂度

##### 4.3.1.1. 时间复杂度

##### 4.3.1.2. 空间复杂度

#### 4.3.2. `MapReduce`

> **`COPY FROM`** [MapReduce: Simplified Data Processing on Large Clusters](https://ai.google/research/pubs/pub62)
>
> **`COPY FROM`** [[翻译]MapReduce: Simplified Data Processing on Large Clusters](https://www.cnblogs.com/fuzhe1989/p/3413457.html)

#### 4.3.3. `Bit-map`

#### 4.3.4. `Bloom Filter`

布隆过滤器，见 `吴军《数学之美》-- 第23章　布隆过滤器`

- **What** ：
- **Where** : 在较大数量的集合中确定某个值是否存在
- **How** ：
- **Why** ：

#### 4.3.5. 排序算法

##### 4.3.5.1. 冒泡法

##### 4.3.5.2. 插入法

##### 4.3.5.3. 快速排序

取中间值，左小右大，递归左右

```JavaScript
/**
 * 快速排序
 */
const QuickSort = (array) => {
  if (array.length <= 1) { return array; } // 数组长度≤1，则直接返回
  const middleIndex = Math.floor(array.length / 2); // 找到中间位置
  const middleNumber = array[middleIndex]; // 中间位置值大小
  const leftArray = []; // 左边数组
  const rightArray = []; // 右边数组
  // 循环数组，判断是否大于中间值，大于放右边，否则放左边
  for (let i = 0; i < array.length; i++) {
    if (i !== middleIndex) {
      const val = array[i]; // 当前位置值
      if (val > middleNumber) { // 大于放右边
        rightArray.push(val)
      } else { // 否则放左边
        leftArray.push(val);
      }
    }
  }
  // 左、右数组排序后合并
  return QuickSort(leftArray).concat([middleNumber], QuickSort(rightArray));
};
```

### 4.4. 各种锁机制

#### 4.4.1. 乐观锁

#### 4.4.2. 悲观锁

#### 4.4.3. 分布式锁

## 5. 架构设计

### 5.1. 分布式

#### 5.1.1. 取号器

分布式序列号生成

#### 5.1.2. 幂等性

### 5.2. 高并发

#### 5.2.1. 消息队列

##### 5.2.1.1. `RabbitMQ`

> [Part 1: RabbitMQ Best Practice](https://www.cloudamqp.com/blog/2017-12-29-part1-rabbitmq-best-practice.html)
>
> [Part 3: 13 common RabbitMQ mistakes](https://www.cloudamqp.com/blog/2018-01-19-part4-rabbitmq-13-common-errors.html)

## 6. 应用工具

### 6.1. 运维工具

#### 6.1.1. `Grafana`

- **What** ：一个数据可视化平台
- **Where** ： 解决Kibana需要购买license才能开启权限；解决es-head无权限
- **How**
  
> **`REFERENCE`** [Grafana » Labs » Configuration](http://docs.grafana.org/installation/configuration/)

### 6.2. 微服务

#### 6.2.1. `ZooKeeper`

见下文中 `docker kafka`

#### 6.2.2. `Kafka`

见下文中 `docker kafka`

#### 6.2.3. `K8S`

### 6.3. 架构

#### 6.3.1. 规则引擎

### 6.4. 项目管理

### 6.5. 版本管理

#### 6.5.1. `SemVer`

Semantic Versioning Specification. 语义版本规范

> **`COPY FROM`** [Git打标签与版本控制规范](https://www.cnblogs.com/walls/p/9077958.html)
>
> **`COPY FROM`** [semver/semver](https://github.com/semver/semver)

#### 6.5.2. `Git`

> **`COPY FROM`**[Git教程 - By 廖雪峰](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

##### 6.5.2.1. 常用命令

```bash

# 查询缓存区状态
git status
# 添加文件到缓存区
git add .
```

##### 6.5.2.2. 不常用命令

```bash

# 查看提交日志
git log --pretty=oneline
# 查看命令历史
git reflog
```

##### 6.5.2.3. `git commit`

> **`COPY FROM`** [git commit 规范指南](https://segmentfault.com/a/1190000009048911)

```bash

# 全局安装CLI向导
npm install -g commitizen

# 然后，在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式。
commitizen init cz-conventional-changelog --save --save-exact

```

##### 6.5.2.4. 工作区、暂存区、本地仓库、远程仓库

> **`COPY FROM`** [工作区和暂存区 - 廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013745374151782eb658c5a5ca454eaa451661275886c6000)

- 工作区（`Working Directory`）

除 `.git` 文件夹以外的目录结构

- 暂存区（`Stage`）

`.git` 文件夹中记录（当前分支下本地仓库中）文件变动的情况

```bash
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   a/b/c.js

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   a/b/c.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
```

- 使用 `git status` 可以查看当前分支下工作区中文件变动
  - 使用 `git checkout -- <file>` 可`丢弃`当前分支下工作区中文件变动
- 使用 `git add <file>` 即将工作区变动的文件内容加入到暂存区中
  - 使用 `git reset HEAD <file>` 可`回退`缓存区中变动
- 使用 `git commit` 即将暂存区所有内容提交到当前分支的本地仓库
- 使用 `git push` 即将本地仓库中变动内容推送到远程仓库中

##### 6.5.2.5. 分支操作

```bash
# 查看分支
git branch

# 创建分支
git branch <name>

# 切换到分支
git checkout <name>

# 创建+切换分支
git checkout -b <name>

# 合并分支到当前分支
git marge <name>

# 删除分支
git branch -d <name>
```

##### 6.5.2.6. 自定义`Git`命令

- 自定义配置

```bash
# git命令显示颜色
git config --global color.ui true
```

- 配置命令别名

```bash

# 定义git lg别名
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

# 定义常用别名
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.br branch
git config --global alias.last 'log -1'
```

```bash

# 切换到dev
git co dev

# 提交dev
git push

# 合并dev到master
git co master
git merge dev

# 提交master
git push
```

#### 6.5.3. `GitHub`

##### 6.5.3.1. `Github` 搜索

Github 基于 ElasticSearch ，所以支持 ES 的 [Elasticsearch Reference » Search APIs » URI Search](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-uri-request.html)

> **`COPY FROM`** [Github Search](https://github.com/search)

| This search                        | Finds repositories with…                                  |
| :--------------------------------- | :-------------------------------------------------------- |
| `cat stars:>100`                   | Find cat repositories with greater than 100 stars.        |
| `user:defunkt`                     | Get all repositories from the user defunkt.               |
| `tom location:"San Francisco, CA"` | Find all tom users in "San Francisco, CA".                |
| `join extension:coffee`            | Find all instances of join in code with coffee extension. |
| `NOT cat`                          | Excludes all results containing cat.                      |

例如：查询 stars 数量大于50000的仓库 [`https://github.com/search?q=stars:>50000`](https://github.com/search?q=stars%3A%3E50000)

### 6.6. `Maven`

### 6.7. `NPM`

#### 6.7.1. `npm outdated`

#### 6.7.2. `npm update`

#### 6.7.3. `npm cache`

### 6.8. `Yarn`

## 7. 工程化

### 7.1. `Docker`

#### 7.1.1. 释义

- `image`
- `container`

#### 7.1.2. `docker`命令

> **`COPY FROM`** [Docker run 命令 | 菜鸟教程](http://www.runoob.com/docker/docker-run-command.html)

```bash

# 查询是否有对应的image，及其版本信息
docker search redis

# 下载最新版本image
docker pull redis
# 查看已下载images list
docker images
# 删除image
docker rmi <image-name>

# 启动实例，并中转接口，指定启动名称
docker run -it --name redis-server -p 6379:6379 redis
docker run -it --name mongodb -p 27017:27017 mongo
# 进入实例
docker exec -it mongodb mongo admin

# CTRL+Q+P 退出

# 查看已启动实例
docker ps
# 查看所有实例
docker ps -a
# 删除实例
docker rm <container-name>

# 查看实例的日志
docker logs <container-name>
```

##### 7.1.2.1. `docker network`

因为 `kafka` 需要连接到 `zookeeper` ，所以创建一个虚拟的局域网，用于两者的连接和管理

> [docker network](https://docs.docker.com/engine/reference/commandline/network/)

```shell
# 查看已有network列表
docker network ls
# 移除已创建的网络
docker network rm zookeeper-network

# 初始化 Swarm
docker swarm init
docker swarm join-token manager

# 创建网络
# 使用 overlay 的驱动，在网段 192.168.100.100/25 上创建网关为 192.168.100.100 、IP范围为 192.168.100.100/24 的子网，且可以连接到此网络
# 可使用的IP数量为 2^(32-25)=128
docker network create -d overlay \
--subnet=192.168.100.0/25 \
--gateway=192.168.100.100 \
--ip-range=192.168.100.0/24 \
--attachable \
zookeeper-network

# 查看当前网络的详情
docker network inspect zookeeper-network
```

#### 7.1.3. `docker kafka`

- 参考文献

> [使用docker安装kafka](https://blog.csdn.net/lblblblblzdx/article/details/80548294)
>
> [基于docker部署的微服务架构（五）： docker环境下的zookeeper和kafka部署](https://my.oschina.net/lhztt/blog/791664)
>
> [在Docker环境下部署Kafka](https://blog.csdn.net/snowcity1231/article/details/54946857)
>
> [Kafka shell 基本命令](https://blog.csdn.net/Dean_WangHW/article/details/53606193)
>
> [kafka 创建消费者报错 consumer zookeeper is not a recognized option](https://blog.csdn.net/csdn_sunlighting/article/details/81516646)
>
> [kafka如何彻底删除topic及数据](https://blog.csdn.net/belalds/article/details/80575751)
>
> 管理平台 [yahoo/kafka-manager](https://github.com/yahoo/kafka-manager)

- 下载镜像

```shell
docker pull wurstmeister/zookeeper
docker pull wurstmeister/kafka
```

- 基于 `docker network` 创建虚拟局域网

见上文 `docker network`

- 启动容器

```shell
# 启动 zookeeper ， 并链入 zookeeper-network 网络 ， 指定容器的ip地址为 192.168.100.110
docker run -itd \
--name zk \
--network=zookeeper-network \
--ip 192.168.100.110 \
-p 2181:2181 \
wurstmeister/zookeeper

# 启动 kafka ， 并链入 zookeeper-network 网络 ， 指定容器的ip地址为 192.168.100.121
# 使用 zk:2181 或 192.168.100.110:2181 均可链接到zookeeper
docker run -d \
--name kafka \
--network=zookeeper-network \
--ip 192.168.100.121 \
--link zk:zk \
-p 9092:9092 \
-e KAFKA_BROKER_ID=0 \
-e KAFKA_ZOOKEEPER_CONNECT=192.168.100.110:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.0.125:9092 \
-e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 \
-t wurstmeister/kafka
```

- 测试发送消息

```shell
# 进入容器
docker exec -it kafka bash

# 进入 kafka_home
echo $KAFKA_HOME
cd /opt/kafka

# 创建 topic
/opt/kafka/bin/kafka-topics.sh --create --zookeeper 192.168.100.110:2181 --replication-factor 1 --partitions 1 --topic test

# 查看当前的 topic列表
/opt/kafka/bin/kafka-topics.sh --list --zookeeper 192.168.100.110:2181

# 运行一个生产者，指定创建的 topic
/opt/kafka/bin/kafka-console-producer.sh --broker-list 192.168.100.121:9092 --topic test

# 运行一个消费者，指定同样 topic
/opt/kafka/bin/kafka-console-consumer.sh --bootstrap-server 192.168.100.121:9092 --topic test --from-beginning
```

- 删除topic

```shell
# 进入 kafka 容器
docket exec -it kafka bash
# 软删除 topic
/opt/kafka/bin/kafka-topics.sh --delete --zookeeper 192.168.100.110:2181 --topic test
# 查看数据目录地址，在 server.properties 中找 log.dirs 地址
vi /opt/kafka/config/server.properties
# 删除上一步路径的目录内容
rm -rf /kafka/kafka-logs-45d81ee7f812/test-0
# 此时已经删除对应数据

# 进入 zookeeper 容器
docker exec -it zk bash
# 连接到zk服务器
bin/zkCli.sh -server 192.168.100.110:2181
# 查看所有 topic
ls /brokers/topics
# 删除对应 topic
rmr /brokers/topics/test
# 此时已删除zk中对应topic数据
```

#### 7.1.4. `docker mysql`

- 准备`mysql`的安装目录，此处使用 `~/code/Tools/mysql` 作为示例
  - `data`目录将映射为`mysql`实例配置的数据文件存放路径
  - `logs`目录将映射为`mysql`实例的日志目录
  - `conf`目录里的配置文件将映射为`mysql`实例的配置文件

```bash
cd ~/code/Tools/mysql
mkdir data logs conf
```

- 安装并运行mysql

```bash
docker search mysql
# 下载mysql镜像
docker pull mysql
# 创建并运行实例
docker run -p 3306:3306 --name mysql -v ~/code/Tools/mysql/conf:/etc/mysql/conf.d  -v ~/code/Tools/mysql/logs:/logs -v ~/code/Tools/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -d mysql 
# 拆解说明
docker run
 -p 3306:3306                                           # 映射实例内3306端口到本地环境
 --name mysql                                           # 启动实例的名字
 -e MYSQL_ROOT_PASSWORD=root                            # mysql管理员账号密码
 -d mysql                                               # 使用的image
 -v ~/code/Tools/mysql/conf:/etc/mysql/conf.d           # 映射配置文件，将主机当前目录下的 conf 挂载到实例的 /etc/mysql/my.cnf
 -v ~/code/Tools/mysql/logs:/logs                       # 映射日志目录，将主机当前目录下的 logs 挂载到实例的 /logs
 -v ~/code/Tools/mysql/data:/var/lib/mysql              # 映射数据文件，将主机当前目录下的 data 挂载到实例的 /var/lib/mysql
```

- 登录mysql更新配置

```bash
# 进入mysql所在docker
docker exec -it mysql bash
# 连接mysql客户端
mysql -uroot -h 127.0.0.1 -p
# >> 输入密码root
# 切换数据库
mysql> USE mysql;
# 查看当前权限
mysql> SELECT host,user,plugin,authentication_string FROM mysql.user;
# 修改远程访问权限和密码
mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
mysql> FLUSH PRIVILEGES;
```

#### 7.1.5. `docker mongo`

> [MongoDB 的 Docker 常用命令](https://www.jianshu.com/p/6fdb2bcb4b43)
>
> [Docker下，实战mongodb副本集（Replication）](https://blog.csdn.net/boling_cavalry/article/details/78173636)

```bash
# 下载镜像
docker pull mongo

# 创建并运行单节点实例
docker run -p 27017:27017 -v ~/code/Tools/mongo/data:/data/db --name mongodb -d mongo
```

- 基于`docker network`创建局域网

```bash
# 创建桥接网络，在网段 172.28.0.0/16 上创建网关为 172.28.5.254 、IP范围为 172.28.5.0/24 的桥接网络
docker network create \
  --driver=bridge \
  --subnet=172.28.0.0/16 \
  --ip-range=172.28.5.0/24 \
  --gateway=172.28.5.254 \
  br0
# 查看网络详情
docker network inspect br0
```

- 创建并部署集群实例

```bash
# 创建主节点，并加入mongo-network网络，指定ip；并将mongo监听绑定到ip上
docker run --name m0 -p 27017:27017 \
--network br0 \
--ip 172.28.5.100 \
-v ~/code/Tools/mongo/data0:/data/db \
-d mongo /bin/bash -c 'mongod --replSet replset0 --bind_ip_all'

# 创建复制节点，并加入mongo-network网络，指定ip；并将mongo监听绑定到ip上;指定不同端口
docker run --name m1 -p 27018:27018 \
--network br0 \
--ip 172.28.5.101 \
-v ~/code/Tools/mongo/data1:/data/db \
-d mongo /bin/bash -c 'mongod --replSet replset0 --bind_ip_all --port 27018'

# 查看节点ip
docker exec m0 cat /etc/hosts
docker exec m1 cat /etc/hosts
# 配置集群
docker exec -it m0 bash
# 执行命令进行mongo控制台
mongo 172.28.5.100:27017
# 使用admin数据库
use admin
# 添加配置
config = { _id:"replset0", members:[{_id:0,host:"172.28.5.100:27017"},{_id:1,host:"172.28.5.101:27018"}]}
rs.initiate(config)
# 返回如下结果
{
  "ok" : 1,
  "operationTime" : Timestamp(1556158794, 1),
  "$clusterTime" : {
    "clusterTime" : Timestamp(1556158794, 1),
    "signature" : {
      "hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
      "keyId" : NumberLong(0)
    }
  }
}
# 查看状态
rs.status()
# 进入副本节点
docker exec -it m1 mongo 172.28.5.101:27018
# 允许副本节点进行读操作
db.getMongo().setSlaveOk()
```

- 外部访问

本地，非`docker`环境可使用 `mongodb://localhost:27017` 访问主节点，使用 `mongodb://localhost:27018` 访问复制节点

### 7.2. 单元测试

> **`COPY FROM`** [全栈测试实战：用Jest测试Vue+Koa全栈应用](https://blog.csdn.net/itheima_Wujie/article/details/78566617)

#### 7.2.1. `Mocha`

#### 7.2.2. `Jest`

> **`COPY FROM`** [Async testing Koa with Jest](https://hackernoon.com/async-testing-koa-with-jest-1b6e84521b71)
>
> **`COPY FROM`** [A clear and concise introduction to testing Koa with Jest and Supertest](https://www.valentinog.com/blog/testing-api-koa-jest/)

#### 7.2.3. `SuperTest`

### 7.3. 前端工程化

#### 7.3.1. `webpack`

#### 7.3.2. `gulp`

#### 7.3.3. `grunt`

## 8. 开发语言

### 8.1. `Java`

### 8.2. `JavaScript`

#### 8.2.1. `JavaScript` 源码阅读

##### 8.2.1.1. `sort`

- **How**

> **`COPY FROM`** [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

`arr.sort([compareFunction])`

> If compareFunction is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order.

如果没有指明 `compareFunction` 方法，所有 `非undefined` 元素会先转换成 `String` 型数据，然后按照 `UTF-16` 字符集进行排序。

> For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in Unicode order.

例如，`banana` 在 `cherry`之前。当数字按由小到大排序时，9 出现在 80 之前，但因为（没有指明 compareFunction），比较的数字会先被转换为字符串，所以在Unicode顺序上 "80" 要比 "9" 要靠前。

> All undefined elements are sorted to the end of the array.

所有 `undefined` 元素会放在数组的最后。

```JavaScript
// 例如
[4, undefined, 3, 41, 42, undefined, 21, 5, 1, 23].sort();
// 结果：
[1, 21, 23, 3, 4, 41, 42, 5, undefined, undefined]
```

- 排序的回调函数

`compareFunction`的返回值限定为 `Number` 类型的数字`[-1,0,1]` 来确定是否需要交换顺序，

```JavaScript
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```

- `String` 型的排序使用`localeCompare`

```JavaScript
const items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});
// items is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
```

- **What**

> - **`COPY FROM`** [V8引擎的 `sort` 源码](https://github.com/v8/v8/blob/ad82a40509c5b5b4680d4299c8f08d6c6d31af3c/src/js/array.js#L710)
> - **`COPY FROM`** [[译] V8引擎中的排序](https://zhuanlan.zhihu.com/p/55338902)

在长度小于10位的数组中使用 `插入法` 排序；
大于10位数组，使用 `快速排序法`，并拆分为小数组，如果小数组长度小于10位，继续使用插入法排序。
大于1000位数组，使用`快速排序法`，但会根据中间点切分开，分成小数组再次排序

```JavaScript
// Insertion sort is faster for short arrays.
if (to - from <= 10) {
  InsertionSort(a, from, to);
  return;
}
if (to - from > 1000) {
  third_index = GetThirdIndex(a, from, to);
} else {
  third_index = from + ((to - from) >> 1);
}
```

> **`REFERENCE`** [JS-数组sort方法用的是哪种排序算法](https://www.jianshu.com/p/0ddbc3c8f683)
> **`REFERENCE`** [JS 数组操作之源码分析](https://www.jianshu.com/p/c19ba1ed52a0)

### 8.3. `NodeJS`

#### 8.3.1. 奇淫巧技

#### 8.3.2. 经典面试题

##### 8.3.2.1. 实现一个 `sleep` 函数

- `event loop`
- `Promise`
- 高阶函数

```JavaScript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

##### 8.3.2.2. 生成 `从0到n` 的数组

```JavaScript
function generateArray(length) {
  return Array.from({ length }).map((v, k) => k)
}
```

##### 8.3.2.3. 实现高阶函数

```JavaScript
// 结果与调用
function add ...
add(4)(5) = 9
add(6,4) = 10

// 实现
function add(...args) {
  if (args.length === 1) {
    return b => args[0] + b;
  }
  return args[0] + args[1];
}
```

#### 8.3.3. `Modules`

`NodeJS` 中 常使用的 `module` 库，见对应 `Git` 仓库

> **`@See`** [./GitRepository.md](./GitRepository.md)

#### 8.3.4. 生产问题

##### 8.3.4.1. 内存泄漏

##### 8.3.4.2. 文件编码问题

**Where** ：因为`Node`的编码统一使用`UTF-8`，所以极少有可能遇到编码的问题，但是也非绝对，当上传、下载文件时，文件内部的编码一般不是`UTF-8`，导致`Node`文件流生成的`Buffer`对象时产生乱码。

**How** ：

- 上传文件到服务端

```JavaScript
  const chardet = require('chardet');
  const { buffer } = file; // 从文件读取字节流
  let charset = chardet.detect(buffer); // 获取文件字节流的编码
  console.log(`猜测文件编码:${charset}`);
  // GBK会识别为GB18030编码
  if (['GB18030', 'UTF-8'].indexOf(charset) === -1) { charset = 'GBK'; }
  let string;
  if (charset !== 'UTF-8') {
    const iconv = new Iconv(charset, 'UTF-8'); // 转码器
    const newBuffer = iconv.convert(buffer); // 转码
    string = newBuffer.toString('utf8'); // 解码
  } else {
    string = buffer.toString('utf8');
  }
```

- 从服务端下载文件

```JavaScript
  const json={}; // 生成对应json或者其他数据
  const iconv = new Iconv('UTF-8', 'GBK//IGNORE'); // 定义buffer的转码器
  const content = iconv.convert(json); // 数据转码
  let filename ='文件名.csv';
  res.setHeader('Pragma', 'public');
  res.setHeader('Expires', '0');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  res.setHeader('Content-Type', 'text/csv; charset=GBK');
  // 根据浏览器确定文件名的编码方式
  if (userAgent.indexOf('msie') >= 0 || userAgent.indexOf('edge') >= 0) { // IE及edge浏览器
    res.setHeader('Content-Disposition', 'attachment;filename=' + encodeURIComponent(filename));
  } else if (userAgent.indexOf('firefox') >= 0) { // 火狐系浏览器
    res.setHeader('Content-Disposition', 'attachment;filename*="utf8*\'\'' + encodeURIComponent(filename)   +'"');
  } else { // 其他浏览器：chrome内核浏览器
    filename = iconv.convert(filename).toString('binary');
    res.setHeader('Content-Disposition', 'attachment;filename=' + filename);
  }
  res.setHeader('Content-Length', content.length);
  res.end(content);
```

### 8.4. `TypeScript`

## 9. 数据库

### 9.1. 调优方式

#### 9.1.1. 分库分表

#### 9.1.2. 读写分离

#### 9.1.3. 查询缓存

### 9.2. `Redis`

- `Set`
  - **What** ：无序不重复数组
  - **Where** ：校验某个元素是否已存在。
  - **How** ：`SADD` 增加 不同的 `set` + 相同的 `member` ，返回1则说明不存在；否则说明存在。
  - **Why** ：`set` 中的 `member` 具有唯一性；写入 `member` 时，如 `member` 不存在，则返回 `(integer) 1` ；否则返回 `(integer) 0`

### 9.3. `MySQL`

该部分仅涉及相关数据库的操作和使用，有关`mysql`的安装及配置，见上文中`docker mysql`，此章节不再赘述

#### 9.3.1. 常规操作

##### 9.3.1.1. 权限

下文命令/操作，均以以下配置为环境

```config
mysql -h 127.0.0.1 -uroot -p
root
```

```bash
# 切换到mysql数据库
use mysql;
# 查询当前用户权限信息
SELECT Host,User,Select_priv,Insert_priv,Update_priv,Delete_priv,Create_priv FROM user;
# 修改密码
SET password for root@localhost = password('123');  
```

###### 遇到 `caching-sha2-password` 问题

错误描述信息: `MySQL said: Authentication plugin 'caching_sha2_password' cannot be loaded: dlopen(/usr/local/lib/plugin/caching_sha2_password.so, 2): image not found`

```bash
# 查看用户的加密方式
SELECT Host,User,authentication_string,plugin FROM user;
# 查看用户密码的过期信息
SELECT password_expired,password_last_changed,password_lifetime  FROM user;
# 结果中plugin为 caching_sha2_password
# 更新用户密码
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
# 再次查看plugin信息，已经变成 mysql_native_password

# 此时可以通过局域网进行连接
```

##### 9.3.1.2. 数据导出

#### 9.3.2. 锁机制

> **`COPY FROM`** [『浅入浅出』MySQL 和 InnoDB](https://draveness.me/mysql-innodb)

### 9.4. `Mongo`

#### 9.4.1. `MongoDB`

##### 9.4.1.1. ObjectId Generator

> **`COPY FROM`** [Generating Globally Unique Identifiers for Use with MongoDB](https://www.mongodb.com/blog/post/generating-globally-unique-identifiers-for-use-with-mongodb)

##### 9.4.1.2. `oplog`

> **`COPY FROM`** [Replica Set Oplog](https://docs.mongodb.com/manual/core/replica-set-oplog/)
>
> The oplog (operations log) is a special capped collection that keeps a rolling record of all operations that modify the data stored in your databases.

- 在 `/etc/mongodb.conf`配置

> [MongoDB: replSet can't get local.system.replset config from self or any seed “server is not running with --replSet”](https://stackoverflow.com/questions/31926795/mongodb-replset-cant-get-local-system-replset-config-from-self-or-any-seed-se)
>
> [Administration > Configuration and Maintenance > Run-time Database Configuration](https://docs.mongodb.com/manual/administration/configuration/#replication-and-sharding-configuration)

```bash
sudo vim /etc/mongodb.conf

# 编辑文件
replication:
   replSetName: rs0
processManagement:
   fork: true

# 重启 mongod
su
ps -ef | grep mongod
kill <pid>
# 使用配置文件启动
/usr/bin/mongod --config /etc/mongod.conf &
```

- `mongod` 启动出现错误

> [MongoDB:Too many open files](https://blog.csdn.net/cug_heshun2013/article/details/50916597)

```bash
# 查看 mongo 日志
tail -f /var/log/mongodb/mongod.log
# 查看配置文件中信息
storage:
  dbPath: /var/lib/mongodb
  journal:
    enabled: true
# 修复 mongo ， dbpath即为上文件中对应信息
mongod --repair --dbpath=/var/lib/mongodb
# 删除 锁定文件
rm /var/lib/mongodb/mongod.lock
# 重新分配权限
sudo chown -R mongodb:mongodb /var/lib/mongodb/
```

#### 9.4.2. `Mongoose`

##### 9.4.2.1. `Schema`

- 数组数据结构

> **`COPY FROM`** [Mongoose >> Populate](https://mongoosejs.com/docs/populate.html)
>
> **`COPY FROM`** [Mongoose - using Populate on an array of ObjectId](https://stackoverflow.com/questions/10568281/mongoose-using-populate-on-an-array-of-objectid)

```JavaScript
const { Schema } = require('mongoose');
const demo = new Schema({
  key1: { type: 'ObjectId', ref: 'Key1' },
  key2: [{ type: 'ObjectId', ref: 'Key2' }],
  key3: String,
  key4: [{ type: String }],
})
```

##### 9.4.2.2. `find`

- 查询结果的构造及解析

> **`COPY FROM`** [Add a new property to Mongoose Document after fetch [duplicate]](https://stackoverflow.com/questions/31534534/add-a-new-property-to-mongoose-document-after-fetch)

##### 9.4.2.3. `Aggregate`

- 聚合查询中时间匹配查询

> **`COPY FROM`** [Mongo: dates in match aggregate query seem to be ignored](https://stackoverflow.com/questions/15024383/mongo-dates-in-match-aggregate-query-seem-to-be-ignored)
>
> **`COPY FROM`** [Aggregate $match with ISODate](https://github.com/Automattic/mongoose/issues/1599)

```JavaScript
Model.aggregate([{ $match: { createdAt: { $gte: new Date(start) , $lte: new Date(end) } } }]);
```

- 聚合查询中`_id`匹配查询

```JavaScript
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
// type:string - id
Model.aggregate([{ $match: { _id: new Object(id) } }]);
```

#### 9.4.3. `MongoDB-to-ElasticSearch`

`MongoDB` 数据同步到 `ElasticSearch` 的方式

> **参考** [5 ways to synchronize data from MongoDb to ElasticSearch](https://www.linkedin.com/pulse/5-way-sync-data-from-mongodb-es-kai-hao)

| 技术                            | 覆盖版本 | 维护情况             | 实现及使用方式            | 设计模式 | 同步方式  | 补偿机制         | 存在问题                                                  |
| ------------------------------- | -------- | -------------------- | ------------------------- | -------- | --------- | ---------------- | --------------------------------------------------------- |
| [Mongoosastic][]                | x.x      | 2018-10-16,800stars  | Node Module » Hook + HTTP | 高耦合   | Hook增量  | -                | Model.remove 和 Model.update 数据未同步                   |
| [transporter][]                 | 5.x      | 2018-05-14,1000stars | Go CLI Tool               | 低耦合   | 单次同步  | -                | 仅能执行一次，无法自动完成同步                            |
| [elasticsearch-river-mongodb][] | 1.x      | 2016-03-22           | Java，ES plugin           | 低耦合   | 增量      | -                | 官方已关闭river方式                                       |
| [Jdbc input plugin][]           | x.x      | 官方组件             | Logstash input filter     | 低耦合   | 增量+全量 | 追加定时全量     | 需要JDBC驱动程序支持，而`mongo没有支持良好的JDBC驱动程序` |
| [mongo-connector][]             | 5.x      | 2018-12-06,1500stars | Python CLI Tool  » OpLog  | 低耦合   | -         | -                | 基于OpLog                                                 |
| 基于 [mongo-oplog][] 自研       | x.x      | 2018-09-17,400stars  | Node Module » Hook + HTTP | 自定义   | Hook增量  | 自研追加定时全量 | 基于OpLog，开发成本                                       |
| 基于 Mongoose 自研              | x.x      | -                    | Node service              | 自定义   | 增量轮询  | 自研追加定时全量 | 不利于Mongo高并发，占用mongo链接                          |
| 基于 redis/MQ/Kafka             | x.x      | -                    | Node service              | 低耦合   | 数据流    | 自研追加定时全量 | 改造成本大，需要在前置业务端拆解功能                      |

- `Mongoosastic` 数据同步说明

```doc
Auto indexing
Mongoosastic try to auto index documents in favor of mongoose's middleware feature.

Mongoosastic will auto index when document.save/Model.findOneAndUpdate/Model.insertMany/document.remove/Model.findOneAndRemove, but not include Model.remove/Model.update.

And you should have new: true options when findOneAndUpdate so that mongoosastic can get new values in post hook.
```

- `Oplog` 方式说明

因 `Oplog` 在一定程序上侵入 `DB` （运维）边界和权限。
但此工具编写的目的是为了同步数据，亦是运维内部的一部分任务。
给每个 database 指定 user 权限，确保单点工具操作拥有对应权限的数据进行同步。

<!-- 引用 -->
[mongoosastic]: https://github.com/mongoosastic/mongoosastic
[transporter]: https://github.com/compose/transporter
[elasticsearch-river-mongodb]: https://github.com/richardwilly98/elasticsearch-river-mongodb
[Jdbc input plugin]: https://www.elastic.co/guide/en/logstash/current/plugins-inputs-jdbc.html
[mongo-connector]: https://github.com/yougov/mongo-connector
[mongo-oplog]: https://github.com/cayasso/mongo-oplog

### 9.5. ElasticSearch

> 见[./ElasticSearch.md](./elasticsearch)

### 9.6. `Spark`

### 9.7. `Hadoop`

## 10. 解决方案

### 10.1. 电商系统

========================