# 矢量地图数据

## 1. 目录

<!-- TOC depthFrom:2 -->

- [1. 目录](#1-目录)
- [2. 参考](#2-参考)
    - [2.1. 参考文档](#21-参考文档)
    - [2.2. 数据来源](#22-数据来源)
- [3. 说明](#3-说明)
    - [3.1. 坐标系](#31-坐标系)
    - [3.2. 政治相关](#32-政治相关)
    - [3.3. 数据修正](#33-数据修正)
    - [3.4. 数据结构](#34-数据结构)
- [4. 目录结构](#4-目录结构)
- [5. 运行](#5-运行)

<!-- /TOC -->

## 2. 参考

### 2.1. 参考文档

> [CSDN - echarts世界地图各个国家及中国城市的经纬度数组](https://blog.csdn.net/xiaozhi_free/article/details/79654529)
>
> [CSDN - echarts世界国家中英文对照](https://blog.csdn.net/u012557538/article/details/78490267)

### 2.2. 数据来源

> - [Highmaps 地图数据集](https://img.hcharts.cn/mapdata/)
> - [【 地图系列 】 世界地图和主要国家的 JSON 文件](http://www.ourd3js.com/wordpress/668/)
> - [GitHub - pissang/starbucks](https://github.com/pissang/starbucks)
> - [World Capital Cities](https://geographyfieldwork.com/WorldCapitalCities.htm)
> - [Wiki - List of national capitals](https://en.wikipedia.org/wiki/List_of_national_capitals)

## 3. 说明

### 3.1. 坐标系

- 关于坐标系的说明，参见[坐标系说明书][]

### 3.2. 政治相关

- 不涉及政治区域的划分和地区与国家的讨论，及各种纠纷
- 仅处理被“中华人民共和国”承认的主权国家和地区
    - 具体有关国家的说明参见 » [百度百科 - 国家][]
    - 具体有关地区的说明参见 » [百度百科 - 地区][]
- 主权国家（截至2017年），共计198个
    - 联合国会员国：193个，具体名单参见 [United Nations » Member States][]
    - 联合国观察员国：2个，即梵蒂冈、巴勒斯坦
    - 国际普遍承认：3个，即纽埃，库克群岛，马耳他骑士团
- 地区，37个
    - 有关“台湾”，其为“中华人民共和国”一个省级区划。不在此列出
    - 有关“南沙群岛”，其为“中华人民共和国”一部分，中国对南沙群岛及其附近海域拥有无可争辩的主权。不在此列出。

### 3.3. 数据修正

- 修改部分国家中文名称

### 3.4. 数据结构

[百度百科 - 国家]: https://baike.baidu.com/item/%E5%9B%BD%E5%AE%B6/17205
[百度百科 - 地区]: https://baike.baidu.com/item/%E5%9C%B0%E5%8C%BA/13841495#viewPageContent
[United Nations » Member States]: http://www.un.org/en/member-states/index.html
[坐标系说明书]: http://lbsyun.baidu.com/index.php?title=coordinate

## 4. 目录结构

```tree

```

## 5. 运行

```shell
# 使用sequelize-auto导出model
sequelize-auto -o './models' -h localhost -p 3306 -u root -x root -d test
```
