# cat nodes columns

`/cat/nodes` 中 字段说明  

| Header                       | Alias                           | Appear by Default | Description                                                       | Example        |
| ---------------------------- | ------------------------------- | ----------------- | ----------------------------------------------------------------- | -------------- |
| id                           | nodeId                          | No                | 节点ID                                                            | k0zy           |
| pid                          | p                               | No                | 进程ID                                                            | 13061          |
| ip                           | i                               | Yes               | 节点IP                                                            | 127.0.1.1      |
| port                         | po                              | No                | 绑定的`transport`端口                                             | 9300           |
| http_address                 | http                            | No                | 绑定的`http`地址                                                  | 127.0.0.1:9200 |
| version                      | v                               | No                | ES版本                                                            | 6.6.1          |
| build                        | b                               | No                | Elasticsearch Build hash                                          | 5c03844        |
| jdk                          | j                               | No                | java运行时版本                                                    | 1.8.0          |
| disk.total                   | dt, diskTotal                   | No                | 总磁盘空间                                                        | 458.3gb        |
| disk.used                    | du, diskUsed                    | No                | 已用磁盘空间                                                      | 259.8gb        |
| disk.avail                   | d, disk, diskAvail              | No                | 可用磁盘空间                                                      | 198.4gb        |
| disk.used_percent            | dup, diskUsedPercent            | No                | 已用磁盘空间百分比                                                | 56.71          |
| heap.current                 | hc, heapCurrent                 | No                | 当前占用堆内存                                                    | 311.2mb        |
| heap.percent                 | hp, heapPercent                 | Yes               | 当前占用堆内存百分比                                              | 7              |
| heap.max                     | hm, heapMax                     | No                | 配置的最大可占用堆内存大小                                        | 1015.6mb       |
| ram.current                  | rc, ramCurrent                  | No                | （系统全局）已用总内存                                            | 513.4mb        |
| ram.percent                  | rp, ramPercent                  | Yes               | （系统全局）已用总内存百分比                                      | 47             |
| ram.max                      | rm, ramMax                      | No                | （系统全局）总内存                                                | 2.9gb          |
| file_desc.current            | fdc, fileDescriptorCurrent      | No                | 已用文件描述符                                                    | 123            |
| file_desc.percent            | fdp, fileDescriptorPercent      | Yes               | 已用文件描述符百分比                                              | 1              |
| file_desc.max                | fdm, fileDescriptorMax          | No                | 最大可用文件描述符数量                                            | 1024           |
| cpu                          |                                 | No                | 最近的系统CPU使用率百分比                                         | 12             |
| load_1m                      | l                               | No                | 最近1分钟的负载平均值                                             | 0.22           |
| load_5m                      | l                               | No                | 最近5分钟的负载平均值                                             | 0.78           |
| load_15m                     | l                               | No                | 最近10分钟的负载平均值                                            | 1.24           |
| uptime                       | u                               | No                | Node uptime                                                       | 17.3m          |
| node.role                    | r, role, nodeRole               | Yes               | 节点角色，`Master`节点(m);`Data`(d);`Ingest`(i);`Coordinating`(-) | mdi            |
| master                       | m                               | Yes               | 当选`master`节点(*); 未当选`master`(-)                            | *              |
| name                         | n                               | Yes               | 节点名                                                            | I8hydUG        |
| completion.size              | cs, completionSize              | No                | Size of completion                                                | 0b             |
| fielddata.memory_size        | fm, fielddataMemory             | No                | 已用 `fielddata cache` 内存                                       | 0b             |
| fielddata.evictions          | fe, fielddataEvictions          | No                | Fielddata cache evictions                                         | 0              |
| query_cache.memory_size      | qcm, queryCacheMemory           | No                | 已用 `query cache` 内存                                           | 0b             |
| query_cache.evictions        | qce, queryCacheEvictions        | No                | Query cache evictions                                             | 0              |
| request_cache.memory_size    | rcm, requestCacheMemory         | No                | 已用 `request cache` 内存                                         | 0b             |
| request_cache.evictions      | rce, requestCacheEvictions      | No                | Request cache evictions                                           | 0              |
| request_cache.hit_count      | rchc, requestCacheHitCount      | No                | 请求缓存命中计数                                                  | 0              |
| request_cache.miss_count     | rcmc, requestCacheMissCount     | No                | 请求缓存未命中计数                                                | 0              |
| flush.total                  | ft, flushTotal                  | No                | `flushes`次数                                                     | 1              |
| flush.total_time             | ftt, flushTotalTime             | No                | `flush`花费的时间                                                 | 1              |
| get.current                  | gc, getCurrent                  | No                | Number of current get operations                                  | 0              |
| get.time                     | gti, getTime                    | No                | Time spent in get                                                 | 14ms           |
| get.total                    | gto, getTotal                   | No                | Number of get operations                                          | 2              |
| get.exists_time              | geti, getExistsTime             | No                | Time spent in successful gets                                     | 14ms           |
| get.exists_total             | geto, getExistsTotal            | No                | Number of successful get operations                               | 2              |
| get.missing_time             | gmti, getMissingTime            | No                | Time spent in failed gets                                         | 0s             |
| get.missing_total            | gmto, getMissingTotal           | No                | Number of failed get operations                                   | 1              |
| indexing.delete_current      | idc, indexingDeleteCurrent      | No                | Number of current deletion operations                             | 0              |
| indexing.delete_time         | idti, indexingDeleteTime        | No                | Time spent in deletions                                           | 2ms            |
| indexing.delete_total        | idto, indexingDeleteTotal       | No                | Number of deletion operations                                     | 2              |
| indexing.index_current       | iic, indexingIndexCurrent       | No                | Number of current indexing operations                             | 0              |
| indexing.index_time          | iiti, indexingIndexTime         | No                | Time spent in indexing                                            | 134ms          |
| indexing.index_total         | iito, indexingIndexTotal        | No                | Number of indexing operations                                     | 1              |
| indexing.index_failed        | iif, indexingIndexFailed        | No                | Number of failed indexing operations                              | 0              |
| merges.current               | mc, mergesCurrent               | No                | Number of current merge operations                                | 0              |
| merges.current_docs          | mcd, mergesCurrentDocs          | No                | Number of current merging documents                               | 0              |
| merges.current_size          | mcs, mergesCurrentSize          | No                | Size of current merges                                            | 0b             |
| merges.total                 | mt, mergesTotal                 | No                | Number of completed merge operations                              | 0              |
| merges.total_docs            | mtd, mergesTotalDocs            | No                | Number of merged documents                                        | 0              |
| merges.total_size            | mts, mergesTotalSize            | No                | Size of current merges                                            | 0b             |
| merges.total_time            | mtt, mergesTotalTime            | No                | Time spent merging documents                                      | 0s             |
| refresh.total                | rto, refreshTotal               | No                | Number of refreshes                                               | 16             |
| refresh.time                 | rti, refreshTime                | No                | Time spent in refreshes                                           | 91ms           |
| script.compilations          | scrcc, scriptCompilations       | No                | Total script compilations                                         | 17             |
| script.cache_evictions       | scrce, scriptCacheEvictions     | No                | Total compiled scripts evicted from cache                         | 6              |
| search.fetch_current         | sfc, searchFetchCurrent         | No                | Current fetch phase operations                                    | 0              |
| search.fetch_time            | sfti, searchFetchTime           | No                | Time spent in fetch phase                                         | 37ms           |
| search.fetch_total           | sfto, searchFetchTotal          | No                | Number of fetch operations                                        | 7              |
| search.open_contexts         | so, searchOpenContexts          | No                | Open search contexts                                              | 0              |
| search.query_current         | sqc, searchQueryCurrent         | No                | Current query phase operations                                    | 0              |
| search.query_time            | sqti, searchQueryTime           | No                | Time spent in query phase                                         | 43ms           |
| search.query_total           | sqto, searchQueryTotal          | No                | Number of query operations                                        | 9              |
| search.scroll_current        | scc, searchScrollCurrent        | No                | Open scroll contexts                                              | 2              |
| search.scroll_time           | scti, searchScrollTime          | No                | Time scroll contexts held open                                    | 2m             |
| search.scroll_total          | scto, searchScrollTotal         | No                | Completed scroll contexts                                         | 1              |
| segments.count               | sc, segmentsCount               | No                | `segments` 数量                                                   | 4              |
| segments.memory              | sm, segmentsMemory              | No                | 已用 `segments` 内存                                              | 1.4kb          |
| segments.index_writer_memory | siwm, segmentsIndexWriterMemory | No                | `index writer` 占用的内存                                         | 18mb           |
| segments.version_map_memory  | svmm, segmentsVersionMapMemory  | No                | `version map` 占用的内存                                          | 1.0kb          |
| segments.fixed_bitset_memory | sfbm, fixedBitsetMemory         | No                | 用于`nested`字段类型和`join`字段的内存                            | 1.0kb          |
| suggest.current              | suc, suggestCurrent             | No                | 当前 `suggest` 操作数量                                           | 0              |
| suggest.time                 | suti, suggestTime               | No                | `suggest` 耗费时间                                                | 0              |
| suggest.total                | suto, suggestTotal              | No                | 总计 `suggest` 操作数量                                           | 0              |
