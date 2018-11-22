---
layout: post
title: elastic-stack
date: 2018-11-19 10:30:02
tags: ElasticSearch Logstash Kibana Filebeat Elastic Stack
---

# ElasticSearch

## 安装E

### 使用`docker`镜像

> [Elasticsearch Reference [6.5] » Set up Elasticsearch » Installing Elasticsearch » Install Elasticsearch with Docker](https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html#docker)

```shell
# 下载es镜像
docker pull elasticsearch

# 启动es
docker run -i -t -p 19200:9200 -p 9300:9300 -e "discovery.type=single-node" --name es elasticsearch
```

### 使用安装包

```shell
# 下载并安装ES
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.5.0.zip
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.5.0.zip.sha512
shasum -a 512 -c elasticsearch-6.5.0.zip.sha512
unzip elasticsearch-6.5.0.zip
cd elasticsearch-6.5.0/

# 配置并启动
vim ./config/elasticsearch.yml
./bin/elasticsearch -d
```

# Logstash

## 安装L

```shell
# 下载并安装Logstash
wget https://artifacts.elastic.co/downloads/logstash/logstash-6.5.0.zip
unzip logstash-6.5.0.zip
cd logstash-6.5.0/

# 配置并启动
vim ./config/pipeline.yml
./bin/logstash -f ./config/pipeline.yml
```

# Filebeat

## 安装F

```shell
# mac下载并安装
wget https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-6.5.0-darwin-x86_64.tar.gz
tar xzvf filebeat-6.5.0-darwin-x86_64.tar.gz
cd filebeat-6.5.0-darwin-x86_64
# linux下载并安装
wget https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-6.5.0-linux-x86.tar.gz
tar xzvf filebeat-6.5.0-linux-x86.tar.gz
cd filebeat-6.5.0-linux-x86
```

# Kibana

## 安装K

```shell
wget https://artifacts.elastic.co/downloads/kibana/kibana-6.5.0-darwin-x86_64.tar.gz
tar xzvf kibana-6.5.0-darwin-x86_64.tar.gz
```