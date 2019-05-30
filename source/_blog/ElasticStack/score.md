# Score

## 参考文献

> - [Elasticsearch Reference [6.5] » Query DSL » Compound queries » Function Score Query](https://www.elastic.co/guide/en/elasticsearch/reference/6.5/query-dsl-function-score-query.html)
> - [How scoring works in Elasticsearch](https://www.compose.com/articles/how-scoring-works-in-elasticsearch/)
> - tf-idf
> - BM25，[BM25 The Next Generation of Lucene Relevance](http://opensourceconnections.com/blog/2015/10/16/bm25-the-next-generation-of-lucene-relevation/)
> - [elasticsearch系列（五）score](https://www.cnblogs.com/ulysses-you/p/6958808.html)

## 基础知识

### 概述

#### 究竟什么是score

> [Elasticsearch: The Definitive Guide [master] » Getting Started » Sorting and Relevance » What Is Relevance?][What Is Relevance]
>
> [Elasticsearch: 权威指南 » 基础入门 » 排序与相关性 » 什么是相关性?](https://www.elastic.co/guide/cn/elasticsearch/guide/cn/relevance-intro.html)
>
> The relevance score of each document is represented by a positive floating-point number called the _score.
> The higher the _score, the more relevant the document.

每个文档都有相关性评分，用一个正浮点数字段 _score 来表示 。 _score 的评分越高，相关性越高。

#### 为什么是score

#### 如何更好的获取恰当score

### 概念

## 评分步骤

> [Elasticsearch Reference [7.0] » Query DSL » Query and filter context](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-filter-context.html)

query 中 bool 分为 `filter`,`must`/`must_not`，`should`。

| 方法       | 过滤方式 | 是否打分 | 说明                                 |
| ---------- | -------- | -------- | ------------------------------------ |
| `filter`   | `AND`    | 否，0    | 仅匹配，但会自动缓存经常使用的过滤器 |
| `must_not` | `NOT`    | 否       |
| `must`     | `AND`    | 是，1    |
| `should`   | `OR`     | 是       | 计算关联性                           |
| `term`     | `=`      | 否，1或0 | 仅匹配                               |

```json
[{
    "function_score": {
      "query": { "match_all": {} },
      "functions": [
        { "filter": { "terms": { "tags": ["5936203456ae4203fd09d274"] } }, "weight": 1000 },
        { "exp": { "createdAt": { "decay": 0.8, "offset": "7d", "scale": "30d" } } }
      ],
      "boost_mode": "multiply",
      "score_mode": "sum"
    }
  },
  {
    "function_score": {
      "query": {
        "bool": {
          "should": [
            { "match": { "title.max": "记忆力" } },
            { "match": { "title.smart": "记忆力" } },
            { "match_phrase": { "title.max": "记忆力" } },
            { "match_phrase": { "title.smart": "记忆力" } }
          ],
          "minimum_should_match": 1
        }
      },
      "functions": [{ "exp": { "createdAt": { "decay": 0.8, "offset": "7d", "scale": "30d" } } }],
      "boost_mode": "multiply",
      "score_mode": "multiply"
    }
  }
]
```

### 步骤分数

- F1 function_score
  - 1.1 filter
    - 1.1.1 terms » 1 | 0
    - 1.1.2 weight » 1 * $weight = 1000
  - 1.2 exp
    - 1.2.1 alg » 0.1321001
- F2 function_score
  - 2.1 query-should
    - 2.1.1 match
    - 2.1.2 match_phrase
  - 2.2 exp

### _score计算

_score = F1 + F2

### score_mode

- multiply: F1 = 1.1 * 1.2
- sum: F1 = 1.1 + 1.2
- avg:非平均，F1 != avg(1.1 , 1.2) ； 而是加权平均， F1 = 1.1 + 1.2 / (1.1 * 1.2)
- first:取第一个 F1 = 1.1
- max:取最大值 F1 = max(1.1 , 1.2)
- min:取最小值 F1 = min(1.1 , 1.2)

### boost_mode

- multiply
- replace
- sum
- avg
- max
- min

---

<!-- 文献 -->

[What Is Relevance]: https://www.elastic.co/guide/en/elasticsearch/guide/master/relevance-intro.html