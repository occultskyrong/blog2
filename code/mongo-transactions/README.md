# MongoDB Transaction

MongoDB中事务

## 安装

> http://thecodebarbarian.com/introducing-run-rs-zero-config-mongodb-runner.html

```shell
npm i run-rs -g
run-rs -v 4.0.0 --shell
pm2 start -i 3 transaction.js --no-autorestart
```

## 原子性

- 事务的原子性
- 单事务多表CRUD

## 事务死锁

## 事务线程池、并发量

## moogose+事务
