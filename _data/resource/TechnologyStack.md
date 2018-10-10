# 技术栈

## 1. 目录

<!-- TOC depthFrom:2 -->

- [技术栈](#技术栈)
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
    - [查询缓存区状态](#查询缓存区状态)
    - [添加文件到缓存区](#添加文件到缓存区)
            - [4.3.2. 不常用命令](#432-不常用命令)
    - [查看提交日志](#查看提交日志)
    - [查看命令历史](#查看命令历史)
            - [4.3.3. `git commit`](#433-git-commit)
- [全局安装CLI向导](#全局安装cli向导)
- [然后，在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式。](#然后在项目目录里运行下面的命令使其支持-angular-的-commit-message-格式)
            - [4.3.4. `git rm & git rm --cached`](#434-git-rm--git-rm---cached)
            - [分支操作](#分支操作)
    - [查看分支](#查看分支)
    - [创建分支](#创建分支)
    - [切换到分支](#切换到分支)
    - [创建+切换分支](#创建切换分支)
    - [合并分支到当前分支](#合并分支到当前分支)
    - [删除分支](#删除分支)
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

#### 4.3.1. 常用命令

```git shell
## 查询缓存区状态
git status
## 添加文件到缓存区
git add .
```

#### 4.3.2. 不常用命令

```git shell
## 查看提交日志
git log --pretty=oneline
## 查看命令历史
git reflog
```

#### 4.3.3. `git commit`

> **`COPY FROM`** [git commit 规范指南](https://segmentfault.com/a/1190000009048911)

```git shell

# 全局安装CLI向导
npm install -g commitizen

# 然后，在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式。
commitizen init cz-conventional-changelog --save --save-exact

```

#### 4.3.4. `git rm & git rm --cached`

> **`COPY FROM`** [git rm与git rm --cached](https://www.cnblogs.com/toward-the-sun/p/6599656.html)

#### 分支操作

```git shell
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

### 4.4. Maven

## 5. 工程化

### 5.1. Docker

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

### 6.4. TypeScript

## 7. 数据库

### 7.1. MySQL

#### 7.1.1. 锁机制

> [『浅入浅出』MySQL 和 InnoDB](https://draveness.me/mysql-innodb)

### 7.2. Moongo

### 7.3. ElasticSearch

### 7.4. Spark

### 7.5. Hadoop
