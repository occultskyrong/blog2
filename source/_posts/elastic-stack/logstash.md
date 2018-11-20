---
layout: post
title: logstash
date: 2018-11-20 10:17:34
tags: ElasticSearch Logstash Kibana Filebeat Elastic Stack
---

# logstash

## 1. 目录

<!-- TOC depthFrom:2 -->

- [1. 目录](#1-目录)
- [2. logstash配置](#2-logstash配置)
- [3. 参考](#3-参考)
    - [3.1. `filter`过滤器](#31-filter过滤器)
    - [3.2. log4js-log-string+json](#32-log4js-log-stringjson)
    - [3.3. 复杂解析](#33-复杂解析)
        - [3.3.1. 需要解析的日志](#331-需要解析的日志)
        - [3.3.2. `logstash` 解析配置](#332-logstash-解析配置)

<!-- /TOC -->

## 2. logstash配置

## 3. 参考

### 3.1. `filter`过滤器

- 基础说明
> [Logstash详解之——filter模块](https://yq.aliyun.com/articles/154341)

- `if`逻辑判断
> [Accessing Event Data and Fields in the Configuration](https://www.elastic.co/guide/en/logstash/current/event-dependent-configuration.html)

- `drop` 过滤
> [通过logstash filter过滤屏蔽不需要的日志](http://xiaorui.cc/2015/12/24/%E9%80%9A%E8%BF%87logstash-filter%E8%BF%87%E6%BB%A4%E5%B1%8F%E8%94%BD%E4%B8%8D%E9%9C%80%E8%A6%81%E7%9A%84%E6%97%A5%E5%BF%97/)

- `grok` 正则
  - 测试grok的工具
  >  [在线grok测试](http://grokdebug.herokuapp.com/)

  - 本地安装
  > [Grok Debugger本地安装过程](https://blog.csdn.net/qq_33588470/article/details/53079293)

  - 各种栗子
  > [关于Logstash中grok插件的正则表达式例子](https://blog.csdn.net/liukuan73/article/details/52318243)
  >
  > [Do you grok Grok?](https://www.elastic.co/blog/do-you-grok-grok)

  - 预定义正则表达式
  > [logstash-plugins/logstash-patterns-core](https://github.com/logstash-plugins/logstash-patterns-core/tree/master/patterns)


- `split` 切割
> [logstash中字符串的split，对每个子串进行json解析](http://blog.csdn.net/ty_0930/article/details/52218276)

- `geoip` 根据IP判断地理位置
> [GeoIP in the Elastic Stack](https://www.elastic.co/blog/geoip-in-the-elastic-stack)

- `tags` 
> [Tags index with filebeat and logstash](https://stackoverflow.com/questions/36055778/tags-index-with-filebeat-and-logstash)
***

### 3.2. log4js-log-string+json

`string`+`json`型日志解析

```conf
filter {
    mutate{
        split=>["message"," - "]
        add_field => {
            "log_str" => "%{[message][0]}"
        }
        add_field => {
            "log_json" => "%{[message][1]}"
        }
        remove_field => ["message"]
    }
    
    json{
        source => "log_json"
        target => "info"
        remove_field => ["log_json"]
    }
    
    grok{
        match =>["log_str","\[%{TIMESTAMP_ISO8601:time}\] \[%{LOGLEVEL:level}\] %{WORD:method}"]
        remove_field => ["log_str"]
    }
    
    date{
        match => ["log_date","dd/MMM/yyyy:HH:mm:ss Z"]
        target => "@timestamp"
        remove_field => 'log_date'
    }
}
```

### 3.3. 复杂解析

#### 3.3.1. 需要解析的日志

```log
[2018-04-17 20:13:51.892] [INFO] server - req  rid:rid_606_1523967231892_81  ip: 180.170.187.223  origin:https://xcx.30xian.com  originUrl:/api/login  method:POST  query:{}  body:{"code":"003t5CUh0QoUAy1VJMTh03wyUh0t5CUx"}
```

#### 3.3.2. `logstash` 解析配置

```conf
input {
    beats {
        port => "5044"
    }
}
# 过滤器，解析
filter {
    mutate {
        split => ["message"," - "]
        add_field => {
            "log_log4js" => "%{[message][0]}"
        }
        add_field => {
            "log_request" => "%{[message][1]}"
        }
        remove_field => ["beat","source","prospector","host","offset","message"]
    }

    grok {
        match => {
            "log_log4js" => "\[%{TIMESTAMP_ISO8601:logTime}\] \[%{LOGLEVEL:logLevel}\] %{WORD}"
        }
        remove_field => ["log_log4js"]
    }

    grok {
        match => {
            "log_request" => "%{WORD}  rid\:%{WORD:requestId}  ip\: %{IPV4:clientIPv4}  origin\:%{URI:origin}  originUrl\:\/api\/login  method\:%{WORD:method}"
        }
        remove_field => ["log_request"]
    }

    date {
        match => ["logTime","yyyy-MM-dd HH:mm:ss.SSS"]
        target => "@timestamp"
        timezone => "+08:00"
        remove_field => ["logTime"]
    }

    mutate {
        remove_field => ["tags"]
    }
}

# 日志输出
output {
    stdout { codec => rubydebug }
    # elasticsearch {
    #     hosts => ["localhost:9200"]
    #     index => "xc-front-api-login-%{+YYYY-MM}"
    # }
}
```