# _type的变更

## ElasticSearch在7.x中删除type

> Indices created in Elasticsearch 6.0.0 or later may only contain a single mapping type.
>
> Indices created in 5.x with multiple mapping types will continue to function as before in Elasticsearch 6.x.
>
> Mapping types will be completely removed in Elasticsearch 7.0.0.

## 参考

> [为什么ElasticSearch要在7.X版本去掉type?](https://blog.csdn.net/zjx546391707/article/details/78631394)
>
> [Elasticsearch 6.0 Removal of mapping types](https://medium.com/@federicopanini/elasticsearch-6-0-removal-of-mapping-types-526a67ff772)
>
> [Elasticsearch Reference [6.x] » Mapping » Removal of mapping types](https://www.elastic.co/guide/en/elasticsearch/reference/6.x/removal-of-types.html)
>
> [Indices, types, and parent / child: current status and upcoming changes in Elasticsearch](https://www.elastic.co/blog/index-type-parent-child-join-now-future-in-elasticsearch)

## 时间线

> Elasticsearch 5.6.0
>
> Setting index.mapping.single_type: true on an index will enable the single-type-per-index behaviour which will be enforced in 6.0.
>
> The join field replacement for parent-child is available on indices created in 5.6.
>
> Elasticsearch 6.x
>
> Indices created in 5.x will continue to function in 6.x as they did in 5.x.
>
> Indices created in 6.x only allow a single-type per index. Any name can be used for the type, but there can be only one. The preferred type name is _doc, so that index APIs have the same path as they will have in 7.0: PUT {index}/_doc/{id} and POST {index}/_doc
>
> The _type name can no longer be combined with the _id to form the _uid field. The _uid field has become an alias for the _id field.
>
> New indices no longer support the old-style of parent/child and should use the join field instead.
>
> The _default_ mapping type is deprecated.
>
> Elasticsearch 7.x
>
> The type parameter in URLs are deprecated. For instance, indexing a document no longer requires a document type. The new index APIs are PUT {index}/_doc/{id} in case of explicit ids and POST {index}/_doc for auto-generated ids.
>
> The index creation, GET|PUT _mapping and document APIs support a query string parameter (include_type_name) which indicates whether requests and responses should include a type name. It defaults to true. 7.x indices which don’t have an explicit type will use the dummy type name _doc. Not setting include_type_name=false will result in a deprecation warning.
>
> The _default_ mapping type is removed.
>
> Elasticsearch 8.x
>
> The type parameter is no longer supported in URLs.
>
> The include_type_name parameter is deprecated, default to false and fails the request when set to true.
>
> Elasticsearch 9.x
>
> The include_type_name parameter is removed.
