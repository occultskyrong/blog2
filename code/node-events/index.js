/* eslint-disable no-console */
// EventEmitter

const EventEmitter = require('events');

// 声明新类 - 继承自 EventEmitter类
class MyEmitter extends EventEmitter {}

// 类实例化
const myEmitter = new MyEmitter();

console.info('$ myEmitter instanceof EventEmitter = ', myEmitter instanceof EventEmitter);

// 监听错误事件
myEmitter.on('error', console.error);

// ———————— 默认 - 监听器
// 新增监听器的事件
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event1') {
    console.info('--- event1 listener', listener instanceof Function);
    myEmitter.on(event, () => console.info('- event1 emited'));
  }
});

// —————————————— 新增 - 监听器 ————————————
// 添加事件监听1
myEmitter.on('event1', (...args) => {
  console.info('----- event1', args, this, this === myEmitter);
});

// 添加事件监听2
myEmitter.on('event2', function callback(...args) {
  console.info('----- event2', args, this === myEmitter, this instanceof EventEmitter);
});

// TODO:异步执行

// —————————————— 测试 - 监听的触发 ————————————
myEmitter.emit('event1', 'test', 1);
myEmitter.emit('event2', 'this', 2);
// myEmitter.emit('error', new Error('错误信息'));
myEmitter.emit('noEvent', new Error('无人监听的事件'));
