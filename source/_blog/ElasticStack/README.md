# ElasticStack

## 1. 太长不看版

- 充分必要阅读点
  - 请阅读 `文档结构说明` ， 来确认自己对`ES`认知的层级，确定自己需要开始和阅读的知识点列表

## 2. 目录

<!-- TOC depthFrom:2 depthTo:5 -->

- [1. 太长不看版](#1-太长不看版)
- [2. 目录](#2-目录)
- [3. 概述](#3-概述)
  - [3.1. 环境说明](#31-环境说明)
  - [3.2. 认知与说明](#32-认知与说明)
    - [3.2.1. `ElasticSearch` 与 `Elastic Stack`](#321-elasticsearch-与-elastic-stack)
    - [3.2.2. 我在干什么？](#322-我在干什么)
    - [3.2.3. 文档结构说明](#323-文档结构说明)
    - [3.2.4. 其他](#324-其他)
  - [3.3. 中英文对照](#33-中英文对照)
  - [3.4. 特性](#34-特性)
- [4. 集群](#4-集群)
  - [4.1. 集群](#41-集群)
  - [4.2. 节点](#42-节点)
  - [4.3. 内存管理](#43-内存管理)
    - [4.3.1. 堆内存，Heap Memory](#431-堆内存heap-memory)
      - [4.3.1.1. 大小和交换](#4311-大小和交换)
      - [4.3.1.2. 分类](#4312-分类)
    - [4.3.2. 非堆内存](#432-非堆内存)
    - [4.3.3. 参考文章](#433-参考文章)
  - [4.4. 高可用](#44-高可用)
  - [4.5. 客户端](#45-客户端)
- [5. `API`](#5-api)
  - [5.1. 通用信息](#51-通用信息)
    - [5.1.1. 参数列表](#511-参数列表)
      - [5.1.1.1. 通用配置](#5111-通用配置)
  - [5.2. `cat APIs`](#52-cat-apis)
    - [5.2.1. 通用参数](#521-通用参数)
    - [5.2.2. 请求方法](#522-请求方法)
      - [5.2.2.1. `cat health`](#5221-cat-health)
      - [5.2.2.2. `cat nodes`](#5222-cat-nodes)
      - [5.2.2.3. `cat segments`](#5223-cat-segments)
      - [5.2.2.4. `cat thread pool`](#5224-cat-thread-pool)
  - [5.3. `cat nodes`](#53-cat-nodes)
    - [5.3.1. `Columns`](#531-columns)
  - [5.4. `Indices APIs`](#54-indices-apis)
  - [5.5. `Document APIs`](#55-document-apis)
    - [5.5.1. `reindex`](#551-reindex)
  - [5.6. `Search APIs`](#56-search-apis)
- [6. 数据结构](#6-数据结构)
  - [6.1. `Index`](#61-index)
    - [6.1.1. 原理](#611-原理)
    - [6.1.2. `alias`](#612-alias)
    - [6.1.3. `setting`](#613-setting)
  - [6.2. `Mapping`](#62-mapping)
    - [6.2.1. `type`](#621-type)
    - [6.2.2. `Field datatypes`](#622-field-datatypes)
  - [6.3. `Meta-Fields`](#63-meta-fields)
  - [6.4. `Mapping parameters`](#64-mapping-parameters)
  - [6.5. `Analysis`](#65-analysis)
- [7. 数据查询与聚合](#7-数据查询与聚合)
  - [7.1. `Query DSL`](#71-query-dsl)
  - [7.2. `Search`](#72-search)
    - [7.2.1. `score`](#721-score)
      - [7.2.1.1. 查询分数的计算](#7211-查询分数的计算)
    - [7.2.2. `match`与`term`](#722-match与term)
    - [7.2.3. `from`+`size`](#723-fromsize)
    - [7.2.4. `Highlighting`](#724-highlighting)
  - [7.3. `Query`](#73-query)
    - [7.3.1. `scroll query`](#731-scroll-query)
    - [7.3.2. `geo queries`](#732-geo-queries)
  - [7.4. `Suggesters`](#74-suggesters)
  - [7.5. `Aggregates`](#75-aggregates)
- [8. 解决方案](#8-解决方案)
  - [8.1. 工具](#81-工具)
    - [8.1.1. 数据同步](#811-数据同步)
      - [8.1.1.1. `MongoDB-to-ES`](#8111-mongodb-to-es)
    - [8.1.2. 基准测试](#812-基准测试)
      - [8.1.2.1. `esrally`](#8121-esrally)
- [9. 参考文献](#9-参考文献)

<!-- /TOC -->

## 3. 概述

### 3.1. 环境说明

- 系统环境以`CentOS 7.x`为主
- `ES_HOME` 即为 `ElasticSearch` 的安装目录
- 除非注明，`ES` 使用版本为 `6.5.4`
  - *注：因为`ES`版本迭代过快，不同版本可能存在差异，高于此版本的，自行判断下*

### 3.2. 认知与说明

#### 3.2.1. `ElasticSearch` 与 `Elastic Stack`

一言以蔽之，`Elastic Stack` 是 `Elastic` 公司的技术或者产品栈，而 `ElasticSearch` 是其中的一款用于解决全文搜索问题的搜索引擎产品。

`Elastic Stack` 主要包括 `ElasticSearch`、`Logstash`、`Kibana`、`Beats`等产品。具体的产品矩阵，见[Products][] 。

早期官方或社区多数使用`ELK`来说明`ElasticSearch`、`Logstash`、`Kibana`三款产品的关联关系和整个体系结构。

但后来渐渐多了`X-pack`和`Beats`等产品后，`ELK`已无法涵盖所有产品，故开始使用`Elastic Stack` 来代表`Elastic` 公司的产品栈。

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

#### 3.2.2. 我在干什么？

- 市面上有大量的ES相关的介绍和权威指南的翻译，本着来源第一手资源的目的，记录实际应用中遇到各个知识点
- 整理自己对ES整个体系的认知
- 能够帮助其他人是更好的
- **这不是权威指南，只是一个个人认知 `ES` 的归档文件**

#### 3.2.3. 文档结构说明

此文件下主要用于说明 `Elastic Stack` 相关技术栈的信息。
因 `ElasticSearch` 和其他相关产品或工具（`Kibana`/`Logstash`）内技术点关联度比较大，
为避免重复赘述，故合并到一起来说明。

本文档标记说明：

- 版本标记
  - `V1+` 标明此知识点为 `ES version 1.x` 开始拥有的概念；`V2+` / `V5+` / `V6+` 类似
  - `V2-V5` 标明此知识点为 `ES version 2.x - 5.x` 拥有的概念，在下一版本（即`V6`）中不再使用或被移除
- 层级标记
  - `S0` 标明此知识点为 `需要安装或部署ES集群所需要的技能点` ， 适合初级运维或准备自己部署`ES`集群的使用，主要包括：
    - 集群配置
    - 节点配置
  - `S1` 标明此知识点为 `刚接触ES的初学者需要查阅的技能点` ， 主要包括：基础知识点
  - `S2` 标明此知识点
  - `S3` 标明此知识点
  - `S4` 标明此知识点
  - `S5` 标明此知识点
  - `XP` 标明此知识点为 `特殊的技能点`，需要深入某个领域时才需要用到。

#### 3.2.4. 其他

- 语言：尽可能使用中文说明，部分英文单词在翻译成中文无法有效表述其原始含义的，保留原英文表述

### 3.3. 中英文对照

| 英文     | 复数      | 中文翻译 | 说明                                                         |
| -------- | --------- | -------- | ------------------------------------------------------------ |
| document | documents | 文档     | 又docs，ES中最基础的单元化数据结构，类似于数据库中`行`的概念 |
| index    | indices   | 索引     | ES中结构化数据组织形式，类似与数据库中`表`的概念             |

### 3.4. 特性

`ElasticSearch`异于其他`DB`的特征，难以评价、分辨这些特征是优点、亦或是缺点。

- 版本

## 4. 集群

> [基础概念][Basic Concepts]

### 4.1. 集群

- 集群安装与配置
  - [集群安装说明][]
  - 集群发现与治理
  - 集群内通信端口
  - 集群对外通信端口
  - 资源分配（内存分配、JVM版本）
  - 版本升级
  - `x-pack` 授权与安装

### 4.2. 节点

- 节点类型与数量
  - [Elasticsearch » Modules » Node][]
  - *master脑裂*
  > - [Elasticsearch集群的脑裂问题](http://blog.csdn.net/cnweike/article/details/39083089)
  > - [关于Elasticsearch集群脑裂brain-split的预防与解决](http://blog.csdn.net/wuyzhen_csdn/article/details/73744233)
  - master 功能与资源配置

### 4.3. 内存管理

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

#### 4.3.1. 堆内存，Heap Memory

##### 4.3.1.1. 大小和交换

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

##### 4.3.1.2. 分类

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

#### 4.3.2. 非堆内存

#### 4.3.3. 参考文章

> - https://www.elastic.co/guide/cn/elasticsearch/guide/current/_limiting_memory_usage.html
> - https://blog.csdn.net/u011032846/article/details/78087272
> - https://blog.csdn.net/laoyang360/article/details/79998974
> - https://elasticsearch.cn/question/3995
> - https://www.elastic.co/blog/a-heap-of-trouble

### 4.4. 高可用

- date数据容灾
  - master 节点数量、节点内存
  - date 物理机分离，多机部署，使用复制分片
  - docker部署
- 复制分片（replicas）数量
- 分片数量与分页
- 分布式文档存储
  - [Elasticsearch: 权威指南 » 基础入门 » 分布式文档存储](https://www.elastic.co/guide/cn/elasticsearch/guide/current/distributed-docs.html) 

### 4.5. 客户端

## 5. `API`

### 5.1. 通用信息

#### 5.1.1. 参数列表

- `| sort -rnk1` 管道排序，按照第1列进行排序
- `&pretty` 使用 `json` 格式化展示数据
- `-H "Accept: application/json"` 接收`form`参数传值

##### 5.1.1.1. 通用配置

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

### 5.2. `cat APIs`

#### 5.2.1. 通用参数

| 参数            | 缩写              | 说明                                                  |
| --------------- | ----------------- | ----------------------------------------------------- |
| Verbose         | `v`               | 是否打开详细输出（展示表头）                          |
| Help            | `help`            | 帮助文档                                              |
| Headers         | `h`               | `h=ip,port` 限定需要展示的列项                        |
| Numeric formats | `bytes/size/time` | 设置单位                                              |
| Response format | `format`          | `format=text/json/smile/yaml/cbor` 返回数据的展示格式 |
| Sort            | `s`               | `s=column1:desc,column2:asc` 设置排序列               |

#### 5.2.2. 请求方法

##### 5.2.2.1. `cat health`

获取集群状态

```bash
curl -XGET 'http://localhost:9200/_cat/health?v'
```

##### 5.2.2.2. `cat nodes`

获取节点状态

```bash
curl -XGET 'http://10.47.127.48:9210/_nodes/stats'

curl -XGET 'http://10.47.127.48:9200/_cat/nodes?v'
```

##### 5.2.2.3. `cat segments`

获取索引的分段信息

```bash
curl -XGET 'http://10.47.127.48:9210/_cat/segments?v'

curl -XGET 'http://10.47.127.48:9210/_cat/segments/books?v'

```

##### 5.2.2.4. `cat thread pool`

获取线程池状态

```bash
curl -XGET 'http://10.47.127.48:9200/_cat/thread_pool?v&h=id,name,active,rejected,completed'
```

### 5.3. `cat nodes`

> [Elasticsearch Reference » cat APIs » cat nodes][]

#### 5.3.1. `Columns`

> 见 catNodesColumns.md

### 5.4. `Indices APIs`

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

### 5.5. `Document APIs`

#### 5.5.1. `reindex`

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

### 5.6. `Search APIs`

## 6. 数据结构

- 业务能力
  - 非关系
    - 字段冗余
    - JSON数据格式
- 非实时数据（库存、价格）
  - 数据统计延迟

### 6.1. `Index`

#### 6.1.1. 原理

- 倒排索引

#### 6.1.2. `alias`

- 按时间切割日志索引

#### 6.1.3. `setting`

- `routing`

### 6.2. `Mapping`

- 只增不可删改

#### 6.2.1. `type`

- [Removal of mapping types][]
  
#### 6.2.2. `Field datatypes`

- [字段类型(field type)](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html)

### 6.3. `Meta-Fields`

- _source

### 6.4. `Mapping parameters`

- store

### 6.5. `Analysis`

- Analyzers
- Tokenizers
  - 中文分词（IK、jieba）
  - 拼音分词（pinyin）

## 7. 数据查询与聚合

### 7.1. `Query DSL`

### 7.2. `Search`

#### 7.2.1. `score`

##### 7.2.1.1. 查询分数的计算

- [How scoring works in Elasticsearch](https://www.compose.com/articles/how-scoring-works-in-elasticsearch/)
- tf-idf
- BM25，[BM25 The Next Generation of Lucene Relevance](http://opensourceconnections.com/blog/2015/10/16/bm25-the-next-generation-of-lucene-relevation/)

#### 7.2.2. `match`与`term`

- [elasticsearch 查询（match和term）](https://www.cnblogs.com/yjf512/p/4897294.html)
- [suggest & search](https://github.com/diandainfo/ess_api/blob/master/doc/elasticsearch/search/readme.md#3-suggest)

#### 7.2.3. `from`+`size`

- [Elasticsearch Reference [6.1] » Search APIs » Request Body Search » From / Size](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-from-size.html)
- `max_result_window`

#### 7.2.4. `Highlighting`

- [Elasticsearch Reference [6.1] » Search APIs » Request Body Search » Highlighting](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-highlighting.html)

### 7.3. `Query`

#### 7.3.1. `scroll query`

#### 7.3.2. `geo queries`

### 7.4. `Suggesters`

### 7.5. `Aggregates`

- 解决问题：多维度聚合、top级查询
- [top级聚合：Elasticsearch Reference [6.1] » Aggregations » Metrics Aggregations » Top Hits Aggregation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-top-hits-aggregation.html)
- [sum聚合：Elasticsearch Reference [6.1] » Aggregations » Metrics Aggregations » Sum Aggregation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-sum-aggregation.html)
- [子查询、交叉维度聚合：Elasticsearch Reference [6.1] » Aggregations » Bucket Aggregations » Children Aggregation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-children-aggregation.html)

## 8. 解决方案

### 8.1. 工具

#### 8.1.1. 数据同步

##### 8.1.1.1. `MongoDB-to-ES`

###### `logstash-input-mongodb`

> [phutchins/logstash-input-mongodb](https://github.com/phutchins/logstash-input-mongodb)

目前状态：`Latest commit 097cc9b  on 4 May 2017`。

###### `logstash-input-jdbc`

###### `oplog`

###### `mongo-connector`

> [yougov/mongo-connector](https://github.com/yougov/mongo-connector)

#### 8.1.2. 基准测试

##### 8.1.2.1. `esrally`

> [GitHub - elastic/rally](https://github.com/elastic/rally)
> **`COPY FROM`** [Elasticsearch 压测方案之 esrally 简介](https://segmentfault.com/a/1190000011174694?utm_source=tag-newest)

```bash
pip3 install esrally
esrally --distribution-version=6.4.0
```

## 9. 参考文献

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
[ES doc声明周期]: https://medium.com/@nschsravanthi/elasticsearch-document-life-cycle-b962a8dedb24