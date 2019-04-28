# ElasticSearch

# 目录

<!-- TOC depthFrom:2 depthTo:5 -->

- [1. 概述](#1-概述)
  - [1.1. 环境说明](#11-环境说明)
  - [1.2. 认知与说明](#12-认知与说明)
    - [1.2.1. `ElasticSearch`与`Elastic Stack`](#121-elasticsearch与elastic-stack)
    - [1.2.2. 我在干什么？](#122-我在干什么)
    - [1.2.3. 其他](#123-其他)
  - [1.3. 中英文对照](#13-中英文对照)
  - [1.4. 特性](#14-特性)
- [2. 集群](#2-集群)
  - [2.1. 集群](#21-集群)
  - [2.2. 节点](#22-节点)
  - [2.3. 内存管理](#23-内存管理)
    - [2.3.1. 堆内存，Heap Memory](#231-堆内存heap-memory)
      - [2.3.1.1. 大小和交换](#2311-大小和交换)
      - [2.3.1.2. 分类](#2312-分类)
    - [2.3.2. 非堆内存](#232-非堆内存)
    - [2.3.3. 参考文章](#233-参考文章)
  - [2.4. 高可用](#24-高可用)
  - [2.5. 客户端](#25-客户端)
- [3. `API`](#3-api)
  - [3.1. 通用信息](#31-通用信息)
    - [3.1.1. 参数列表](#311-参数列表)
      - [3.1.1.1. 通用配置](#3111-通用配置)
  - [3.2. `cat APIs`](#32-cat-apis)
    - [3.2.1. 通用参数](#321-通用参数)
  - [3.3. `cat nodes`](#33-cat-nodes)
    - [3.3.1. `Columns`](#331-columns)
  - [3.4. `Indices APIs`](#34-indices-apis)
  - [3.5. `Document APIs`](#35-document-apis)
    - [3.5.1. `reindex`](#351-reindex)
  - [3.6. `Search APIs`](#36-search-apis)
- [4. 数据结构](#4-数据结构)
  - [4.1. `Index`](#41-index)
    - [4.1.1. 原理](#411-原理)
    - [4.1.2. `alias`](#412-alias)
    - [4.1.3. `setting`](#413-setting)
  - [4.2. `Mapping`](#42-mapping)
    - [4.2.1. `type`](#421-type)
    - [4.2.2. `Field datatypes`](#422-field-datatypes)
  - [4.3. `Meta-Fields`](#43-meta-fields)
  - [4.4. `Mapping parameters`](#44-mapping-parameters)
  - [4.5. `Analysis`](#45-analysis)
- [5. 数据查询与聚合](#5-数据查询与聚合)
  - [5.1. `Query DSL`](#51-query-dsl)
  - [5.2. `Search`](#52-search)
    - [5.2.1. `score`](#521-score)
    - [5.2.2. `match`与`term`](#522-match与term)
    - [5.2.3. `from`+`size`](#523-fromsize)
    - [5.2.4. `Highlighting`](#524-highlighting)
  - [5.3. `Query`](#53-query)
    - [5.3.1. `scroll query`](#531-scroll-query)
    - [5.3.2. `geo queries`](#532-geo-queries)
  - [5.4. `Suggesters`](#54-suggesters)
  - [5.5. `Aggregates`](#55-aggregates)
- [6. 解决方案](#6-解决方案)
  - [6.1. 工具](#61-工具)
    - [6.1.1. 数据同步](#611-数据同步)
      - [6.1.1.1. `MongoDB-to-ES`](#6111-mongodb-to-es)
    - [6.1.2. 基准测试](#612-基准测试)
      - [6.1.2.1. `esrally`](#6121-esrally)
- [7. 参考文献](#7-参考文献)

<!-- /TOC -->

## 1. 概述

### 1.1. 环境说明

- 系统环境以`CentOS 7.x`为主
- `ES_HOME` 即为 `ElasticSearch` 的安装目录

### 1.2. 认知与说明

#### 1.2.1. `ElasticSearch`与`Elastic Stack`

`Elastic Stack` 主要包括 `ElasticSearch`、`Logstash`、`Kibana`、`Beats`等产品。具体的产品矩阵，见[Products][] 。

主要围绕`ElasticSearch`（以下简称`ES`），说明工作原理和使用方法。其他产品，有应用则说明，无则不再赘述。

官方对于`ElasticSearch`的说明如下（[Products » Elasticsearch][]）:

> Elasticsearch is a distributed, RESTful search and analytics engine capable of solving a growing number of use cases.
> As the heart of the Elastic Stack, it centrally stores your data so you can discover the expected and uncover the unexpected.
>
> Elasticsearch是一个分布式RESTful搜索和分析引擎，能够解决越来越多的用例。
> 作为Elastic Stack的核心，它集中存储您的数据，以便您可以发现预期并发现意外情况。

**我的认知**

`ElasticSearch`是一个 `分布式` 、`非关系型` 、 `支持RestFul` 、 `近实时` 、 `耗时在ms级` 、`Json结构` 的 `文档级` `全文搜索引擎`。

支持但不限于：数据存储、全文检索、数据查询与聚合、LBS查询。

#### 1.2.2. 我在干什么？

市面上有大量的ES相关的介绍和权威指南的翻译，本着来源第一手资源的目的，记录实际应用中遇到各个知识点。整理自己对ES整个体系的认知。能够帮助其他人是更好的。
这不是权威指南，只是一个人个人认知的整理文档。

#### 1.2.3. 其他

- 语言：尽可能使用中文说明，部分英文单词在翻译成中文无法有效表述其原始含义的，保留原英文表述

### 1.3. 中英文对照

| 英文     | 复数      | 中文翻译 | 说明                                                         |
| -------- | --------- | -------- | ------------------------------------------------------------ |
| document | documents | 文档     | 又docs，ES中最基础的单元化数据结构，类似于数据库中`行`的概念 |
| index    | indices   | 索引     | ES中结构化数据组织形式，类似与数据库中`表`的概念             |

### 1.4. 特性

`ElasticSearch`异于其他`DB`的特征，难以评价、分辨这些特征是优点、亦或是缺点。

- 版本

## 2. 集群

> [基础概念][Basic Concepts]

### 2.1. 集群

- 集群安装与配置
    - [集群安装说明][]
    - 集群发现与治理
    - 集群内通信端口
    - 集群对外通信端口
    - 资源分配（内存分配、JVM版本）
    - 版本升级
    - `x-pack` 授权与安装

### 2.2. 节点

- 节点类型与数量
    - [Elasticsearch » Modules » Node][]
    - *master脑裂*
    > - [Elasticsearch集群的脑裂问题](http://blog.csdn.net/cnweike/article/details/39083089)
    > - [关于Elasticsearch集群脑裂brain-split的预防与解决](http://blog.csdn.net/wuyzhen_csdn/article/details/73744233)
    - master 功能与资源配置

### 2.3. 内存管理

由于 ElasticSearch 是一个基于 Lucene 的 Java 开发的应用 ，所以内存占用分为两部分。
一部分是由JVM管理的堆内存，另一部分为Lucene管理的非堆内存。

> [Elasticsearch: 权威指南 » 管理、监控和部署 » 部署 » 堆内存:大小和交换][]
>
> 当然，内存对于 Elasticsearch 来说绝对是重要的，它可以被许多内存数据结构使用来提供更快的操作。但是说到这里， 还有另外一个内存消耗大户 非堆内存 （off-heap）：Lucene。
>
> Lucene 被设计为可以利用操作系统底层机制来缓存内存数据结构。 Lucene 的段是分别存储到单个文件中的。因为段是不可变的，这些文件也都不会变化，这是对缓存友好的，同时操作系统也会把这些段文件缓存起来，以便更快的访问。
>
> Lucene 的性能取决于和操作系统的相互作用。如果你把所有的内存都分配给 Elasticsearch 的堆内存，那将不会有剩余的内存交给 Lucene。 这将严重地影响全文检索的性能。
>
> 标准的建议是把 50％ 的可用内存作为 Elasticsearch 的堆内存，保留剩下的 50％。当然它也不会被浪费，Lucene 会很乐意利用起余下的内存。
>
> 如果你不需要对分词字符串做聚合计算（例如，不需要 fielddata ）可以考虑降低堆内存。堆内存越小，Elasticsearch（更快的 GC）和 Lucene（更多的内存用于缓存）的性能越好。

#### 2.3.1. 堆内存，Heap Memory

##### 2.3.1.1. 大小和交换

- 堆内存大小设置的原则
    - 默认1G，不够用，建议加大
    - 小于总内存的1/2
    - 不大于26G

```shell
# 设置大小
vim ./config/jvm.option
## 确保堆内存最小值（ Xms ）与最大值（ Xmx ）的大小是相同的，防止程序在运行时改变堆内存大小， 这是一个很耗系统资源的过程。
-Xms5g
-Xmx5g
```

- 关闭内存交换

> [centos7开启交换内存][]

```shell
# 查看当前内存交换
free -m
top
## Swap栏
```

##### 2.3.1.2. 分类

> [Day19 ES内存那点事][]
>
> 应用层面生成大量长生命周期的对象，是给heap造成压力的主要原因。
> 例如读取一大片数据在内存中进行排序，或者在heap内部建cache缓存大量数据。
> 如果GC释放的空间有限，而应用层面持续大量申请新对象，GC频度就开始上升，同时会消耗掉很多CPU时间。严重时可能恶性循环，导致整个集群停工。
> 因此在使用ES的过程中，要知道哪些设置和操作容易造成以上问题，有针对性的予以规避。
>
> 其次，Lucene的倒排索引(Inverted Index)是先在内存里生成，然后定期以段文件(segment file)的形式刷到磁盘的。
> 每个段实际就是一个完整的倒排索引，并且一旦写到磁盘上就不会做修改。
> API层面的文档更新和删除实际上是增量写入的一种特殊文档，会保存在新的段里。
> 不变的段文件易于被操作系统cache，热数据几乎等效于内存访问。

- segment memory 段内存

#### 2.3.2. 非堆内存

#### 2.3.3. 参考文章

> - https://www.elastic.co/guide/cn/elasticsearch/guide/current/_limiting_memory_usage.html
> - https://blog.csdn.net/u011032846/article/details/78087272
> - https://blog.csdn.net/laoyang360/article/details/79998974
> - https://elasticsearch.cn/question/3995
> - https://www.elastic.co/blog/a-heap-of-trouble

### 2.4. 高可用

- date数据容灾
    - master 节点数量、节点内存
    - date 物理机分离，多机部署，使用复制分片
    - docker部署
- 复制分片（replicas）数量
- 分片数量与分页
- 分布式文档存储
    - [Elasticsearch: 权威指南 » 基础入门 » 分布式文档存储](https://www.elastic.co/guide/cn/elasticsearch/guide/current/distributed-docs.html) 

### 2.5. 客户端

## 3. `API`

### 3.1. 通用信息

#### 3.1.1. 参数列表

- `| sort -rnk1` 管道排序，按照第1列进行排序
- `&pretty` 使用 `json` 格式化展示数据
- `-H "Accept: application/json"` 接收`form`参数传值

##### 3.1.1.1. 通用配置

> [Elasticsearch » API Conventions » Common options][]

- `time units`

<!-- TODO:补充 time math -->

- `Byte size units`

| unit | meaning     |
| ---- | ----------- |
| `b`  | `Bytes`     |
| `kb` | `Kilobytes` |
| `mb` | `Megabytes` |
| `gb` | `Gigabytes` |
| `tb` | `Terabytes` |
| `pb` | `Petabytes` |

### 3.2. `cat APIs`

#### 3.2.1. 通用参数

| 参数            | 缩写              | 说明                                                  |
| --------------- | ----------------- | ----------------------------------------------------- |
| Verbose         | `v`               | 是否打开详细输出（展示表头）                          |
| Help            | `help`            | 帮助文档                                              |
| Headers         | `h`               | `h=ip,port` 限定需要展示的列项                        |
| Numeric formats | `bytes/size/time` | 设置单位                                              |
| Response format | `format`          | `format=text/json/smile/yaml/cbor` 返回数据的展示格式 |
| Sort            | `s`               | `s=column1:desc,column2:asc` 设置排序列               |

### 3.3. `cat nodes`

> [Elasticsearch Reference » cat APIs » cat nodes][]

#### 3.3.1. `Columns`

> 见 catNodesColumns.md


### 3.4. `Indices APIs`

索引级API，主要用于操作索引相关。诸如：创建、删除、更新、关闭/打开索引等。

- `Open/Close Index API`

**基本说明**：关闭后的索引，禁止读写，占用磁盘空间，不占用内存。具体见[Open / Close Index API][]

**应用场景**：主要应用于关闭已超出可使用期限的历史数据。例如：系统可查询两年内日志记录，则可以将两年前的索引close；当然，这么做的前提是按照时间将索引进行了切割。具体见`alias`部分

**用法用量**：

```shell
# 关闭索引
POST /index-name/_close
# 开启索引
POST /index-name/_open
```

### 3.5. `Document APIs`

#### 3.5.1. `reindex`

- 根据源数据中`@timestamp`重建索引到对应时间下；当然，需要事先使用`index template`创建对应模板

```JSON
{
    source: { // 源数据索引
      // host: '', // 源数据地址
      // username: '', // basic auth账号密码
      // password: '',
      index: SourceIndexName,
      // query: { // 查询条件
      // },
      size: 1, // 每次scroll的数量
    },
    dest: {
      index: TargetIndexName,
      type: 'doc',
    },
    script: { // 执行脚本
      lang: 'painless',
      source: "def dateString = ctx._source['@timestamp'].toString(); " +
        'def inputFormat = new SimpleDateFormat("yyyy-MM-dd");' +
        'def myDate = inputFormat.parse(dateString);' +
        "def outputFormat = new SimpleDateFormat('yyyyMM');" +
        'def formatTime = outputFormat.format(myDate);' +
        "ctx._index = 'access-logger-' + (formatTime);",
    },
};
```

### 3.6. `Search APIs`

## 4. 数据结构

- 业务能力
  - 非关系
    - 字段冗余
    - JSON数据格式
- 非实时数据（库存、价格）
  - 数据统计延迟

### 4.1. `Index`

#### 4.1.1. 原理

- 倒排索引

#### 4.1.2. `alias`

- 按时间切割日志索引

#### 4.1.3. `setting`

- `routing`

### 4.2. `Mapping`

- 只增不可删改

#### 4.2.1. `type`

- [Removal of mapping types][]
  
#### 4.2.2. `Field datatypes`

- [字段类型(field type)](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html)

### 4.3. `Meta-Fields`

- _source

### 4.4. `Mapping parameters`

- store

### 4.5. `Analysis`

- Analyzers
- Tokenizers
  - 中文分词（IK、jieba）
  - 拼音分词（pinyin）

## 5. 数据查询与聚合

### 5.1. `Query DSL`

### 5.2. `Search`

#### 5.2.1. `score`

- [How scoring works in Elasticsearch](https://www.compose.com/articles/how-scoring-works-in-elasticsearch/)
- tf-idf
- BM25，[BM25 The Next Generation of Lucene Relevance](http://opensourceconnections.com/blog/2015/10/16/bm25-the-next-generation-of-lucene-relevation/)

#### 5.2.2. `match`与`term`

- [elasticsearch 查询（match和term）](https://www.cnblogs.com/yjf512/p/4897294.html)
- [suggest & search](https://github.com/diandainfo/ess_api/blob/master/doc/elasticsearch/search/readme.md#3-suggest)

#### 5.2.3. `from`+`size`

- [Elasticsearch Reference [6.1] » Search APIs » Request Body Search » From / Size](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-from-size.html)
- `max_result_window`

#### 5.2.4. `Highlighting`

- [Elasticsearch Reference [6.1] » Search APIs » Request Body Search » Highlighting](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-highlighting.html)

### 5.3. `Query`

#### 5.3.1. `scroll query`

#### 5.3.2. `geo queries`

### 5.4. `Suggesters`

### 5.5. `Aggregates`

- 解决问题：多维度聚合、top级查询
- [top级聚合：Elasticsearch Reference [6.1] » Aggregations » Metrics Aggregations » Top Hits Aggregation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-top-hits-aggregation.html)
- [sum聚合：Elasticsearch Reference [6.1] » Aggregations » Metrics Aggregations » Sum Aggregation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-sum-aggregation.html)
- [子查询、交叉维度聚合：Elasticsearch Reference [6.1] » Aggregations » Bucket Aggregations » Children Aggregation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-children-aggregation.html)

## 6. 解决方案

### 6.1. 工具

#### 6.1.1. 数据同步

##### 6.1.1.1. `MongoDB-to-ES`

###### `logstash-input-mongodb`

> [phutchins/logstash-input-mongodb](https://github.com/phutchins/logstash-input-mongodb)

目前状态：`Latest commit 097cc9b  on 4 May 2017`。

###### `logstash-input-jdbc`

###### `oplog`

###### `mongo-connector`

> [yougov/mongo-connector](https://github.com/yougov/mongo-connector)

#### 6.1.2. 基准测试

##### 6.1.2.1. `esrally`

> [GitHub - elastic/rally](https://github.com/elastic/rally)
> **`COPY FROM`** [Elasticsearch 压测方案之 esrally 简介](https://segmentfault.com/a/1190000011174694?utm_source=tag-newest)

```bash
pip3 install esrally
esrally --distribution-version=6.4.0
```

## 7. 参考文献

> [《搜索实现的简单说明》](https://github.com/occultskyrong/blog/blob/master/public/docs/elastic_stack/search.md)
>
> [elastic中文社区](http://elasticsearch.cn/)
>
> [elastic/elasticsearch-definitive-guide](https://github.com/elastic/elasticsearch-definitive-guide)
>
> [《Elasticsearch: 权威指南》](http://106.186.120.253/preview/foreword_id.html)
>
> [Elasticsearch 权威指南（中文版）](http://es.xiaoleilu.com/)
>
> 《Elasticsearch服务器开发(第2版)》(实体书)
>

---

<!-- 以下内容按照链接引用标记的字典序排名 -->

<!-- blog -->
[centos7开启交换内存]: http://zixuephp.net/article-335.html

<!-- CSDN -->

<!-- elastic.co -->
[Products]: https://www.elastic.co/products
[Products » Elasticsearch]: https://www.elastic.co/products/elasticsearch

<!-- elasticsearch.cn -->
[Day19 ES内存那点事]: https://elasticsearch.cn/article/32

<!-- Elasticsearch Reference -->
[Basic Concepts]:https://www.elastic.co/guide/en/elasticsearch/reference/6.1/_basic_concepts.html
[Elasticsearch Reference » cat APIs » cat nodes]: https://www.elastic.co/guide/en/elasticsearch/reference/current/cat-nodes.html
[Elasticsearch Reference » Modules » Node]: https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-node.html
[Elasticsearch Reference » API Conventions » Common options]: https://www.elastic.co/guide/en/elasticsearch/reference/current/common-options.html
[Open / Close Index API]: https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-open-close.html#indices-open-close
[Removal of mapping types]: https://www.elastic.co/guide/en/elasticsearch/reference/current/removal-of-types.html
<!-- 权威指南 -->
[Elasticsearch: 权威指南 » 管理、监控和部署 » 部署 » 堆内存:大小和交换]: https://www.elastic.co/guide/cn/elasticsearch/guide/current/heap-sizing.html

<!-- GitHub -->
[集群安装说明]: https://github.com/diandainfo/search_api_server/blob/master/doc/Installation.md#elasticsearch

<!-- 待归档 -->
