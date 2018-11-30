---
layout: post
title: 日志记录器
date: 2018-11-03 21:58:36
tags:
---
# logger

## 1. 目录

<!-- TOC depthFrom:2 -->

- [1. 目录](#1-目录)
- [2. 参考](#2-参考)
- [3. 已有日志module或middleware](#3-已有日志module或middleware)
- [4. 上下文日志记录器](#4-上下文日志记录器)
    - [4.1. 核心点](#41-核心点)
    - [4.2. 其他case](#42-其他case)

<!-- /TOC -->

## 2. 参考

> [nodejs配置Log服务 - ACM_devil - CSDN博客](https://blog.csdn.net/acm_zl/article/details/48489655)
>
> [Node.js日志框架选型比较：Winston](https://blog.csdn.net/iefreer/article/details/34442183)
>
> [Node.js日志框架选型比较：Bunyan](https://blog.csdn.net/iefreer/article/details/34487125)

## 3. 已有日志module或middleware

> 数据来源自 https://github.com/search?l=JavaScript&o=desc&q=log&s=stars&type=Repositories

| npm module | github repository | 维护 | stars | 说明 | 记录器类型 | 持久化方式 | 分级策略 |
| ---------- | ----------------- | ---- | ----- | ---- | ---------- | ---------- | -------- |
| bunyan     | [node-bunyan][]   | -    | 5.5k  |
| consola    | [consola][]       | -    | 2.2k  |
| egg-logger | [egg-logger][]    | -    | 55    |
| log4js     | [log4js-node][]   | -    | 3.6k  |
| loglevel   | [loglevel][]      | -    | 1.2k  |
| morgan     | [morgan][]        | -    | 4.2k  |
| TSW        | [TSW][]           | -    | 1.3k  |
| winston    |

[node-bunyan]: https://github.com/trentm/node-bunyan
[consola]: https://github.com/nuxt/consola
[egg-logger]: https://github.com/eggjs/egg-logger
[loglevel]:  https://github.com/pimterry/loglevel
[morgan]: https://github.com/expressjs/morgan
[TSW]: https://github.com/Tencent/TSW

## 4. 上下文日志记录器

### 4.1. 核心点

- 日志记录器
    - 控制台日志记录器
    - 访问记录、上下文日志记录器
    - 提供全局日志记录器
- 日志分级
    - `TRACE、DEBUG、INFO、WARN、ERROR、FATAL`
    - 根据分级记录等级及以上日志
- 日志的格式化
- 全链路，traceId
- 洋葱模型，每层时间
- 支持数据传输
    - 可以通过网络协议传输日志到其他服务

### 4.2. 其他case

- 文件句柄数
- 日志写入机制，先缓存、后写文件
