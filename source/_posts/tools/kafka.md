# Kafka

基于 `docker` 的 `Kafka` 及 `Zookeeper` 构建

# 目录

<!-- TOC -->

- [1. 概述](#1-概述)
- [2. 参考文献](#2-参考文献)
- [3. 步骤](#3-步骤)
    - [3.1. 查看日志](#31-查看日志)
    - [3.2. 下载镜像](#32-下载镜像)
    - [3.3. 基于 `docker network` 创建虚拟局域网](#33-基于-docker-network-创建虚拟局域网)
    - [3.4. 启动容器](#34-启动容器)
- [4. 管理平台](#4-管理平台)
- [5. 测试](#5-测试)
    - [5.1. 测试发送消息](#51-测试发送消息)
    - [5.2. 删除topic](#52-删除topic)

<!-- /TOC -->

## 1. 概述

## 2. 参考文献

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

## 3. 步骤

### 3.1. 查看日志

```shell
docker logs [container-name]
```

### 3.2. 下载镜像

```shell
docker pull wurstmeister/zookeeper
docker pull wurstmeister/kafka
```

### 3.3. 基于 `docker network` 创建虚拟局域网

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
```

### 3.4. 启动容器

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

## 4. 管理平台

> [yahoo/kafka-manager](https://github.com/yahoo/kafka-manager)

## 5. 测试

### 5.1. 测试发送消息

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

### 5.2. 删除topic

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
