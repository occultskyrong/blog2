---
layout: post
title: docker
date: 2018-11-19 10:44:21
tags: docker
---

Docker

# 目录

<!-- TOC -->

- [释义](#释义)
- [管理image](#管理image)
- [管理container](#管理container)
- [自定义镜像](#自定义镜像)
    - [TODO:通过已有镜像、更新后提交镜像](#todo通过已有镜像更新后提交镜像)
    - [使用`DockerFile`构建](#使用dockerfile构建)

<!-- /TOC -->

## 释义

- image
    - 镜像：类
    - 镜像是用于创建容器的模板
- container
    - 容器：对象
    - 容易是独立运行的一个或一组应用

## 管理image

```shell

# 搜索`image`
docker search <image-name>

# 下载`image`
docker pull <image-name>:[image-tag]

# 查看本地所有`image`
docker image ls
docker images
# 列说明
REPOSITORY：表示镜像的仓库源
TAG：镜像的标签，同一仓库源可以有多个 TAG，代表这个仓库源的不同个版本
IMAGE ID：镜像ID
CREATED：镜像创建时间
SIZE：镜像大小

# 删除镜像
docker rmi <image-name>
```

## 管理container

```shell

# 运行`container`
docker run <container> [shell命令]
# 命令参数
-d 后台运行容器，并返回容器ID
-i 允许你对容器内的标准输入 (STDIN) 进行交互，通常与 -t 同时使用
-p 端口映射，格式为：主机(宿主)端口:容器端口
-t 在新容器内指定一个伪终端或终端
--name="nginx-lb" 为容器指定一个名称

# 查看日志
docker logs -f <container-name|container-id>

# 查看容器内进程
docker top <container-name|container-id>

# 启动、停止、重启 容器
docker start <container-name|container-id>
docker stop <container-name|container-id>
docker restart <container-name|container-id>

# 删除已停止的容器
docker rm <container-name>

# 查看所有`container`
docker ps -a
docker container ls -a
# 列说明
CONTAINER ID 容器编号
IMAGE 镜像来源
NAMES 容器名称

# 容器内执行
docker exec -i -t  <container-name> /bin/bash

```

## 自定义镜像

### TODO:通过已有镜像、更新后提交镜像

```shell
## 下载镜像
docker pull elasticsearch

## 创建容器
docker run -t -i --name elk elasticsearch

```

### 使用`DockerFile`构建

> *`COPY FROM`* [菜鸟教程 > Docker 镜像使用 > 构建镜像](http://www.runoob.com/docker/docker-image-usage.html)
>
> *`COPY FROM`* [wadeson > docker之Dockerfile实践](https://www.cnblogs.com/jsonhc/p/7767669.html)

## `Network`

