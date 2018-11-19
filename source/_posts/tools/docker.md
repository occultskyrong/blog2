---
layout: post
title: docker
date: 2018-11-19 10:44:21
tags: docker
---

# Docker

## 释义

- image
    - 镜像：类
    - 镜像是用于创建容器的模板
- container
    - 容器：对象
    - 容易是独立运行的一个或一组应用

## 管理image

```shell

## 搜索image
docker search <image-name>

## 下载image
docker pull <image-name>:[image-tag]

## 查看本地所有image
docker image ls
docker images
### 列说明
REPOSITORY：表示镜像的仓库源
TAG：镜像的标签，同一仓库源可以有多个 TAG，代表这个仓库源的不同个版本
IMAGE ID：镜像ID
CREATED：镜像创建时间
SIZE：镜像大小
```

## 管理container

```shell

## 运行container
docker run <container> [shell命令]
### 命令参数
-d 后台运行
-p <port>:<主机port> 映射端口到主机端口
-t 在新容器内指定一个伪终端或终端
-i 允许你对容器内的标准输入 (STDIN) 进行交互

## 查看日志
docker logs -f <container-name|container-id>

## 查看容器内进程
docker top <container-name|container-id>

## 启动、停止、重启 容器
docker start <container-name|container-id>
docker stop <container-name|container-id>
docker restart <container-name|container-id>

## 删除已停止的容器
docker rm <container-name>

## 查看所有container
docker ps -a
docker container ls -a
### 列说明
CONTAINER ID 容器编号
IMAGE 镜像来源
NAMES 容器名称
```

## 自定义镜像

> *COPY FROM* [docker之Dockerfile实践](https://www.cnblogs.com/jsonhc/p/7767669.html)

```shell

## 创建镜像

```