/* eslint-disable no-restricted-syntax , no-underscore-dangle , max-len */
const assert = require('assert');
const Promise = require('bluebird');
const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');

const print = console.info;
const println = console.info;

const { mongodb } = require('../../config');

mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/transaction`, { useNewUrlParser: true });

const { Schema } = mongoose;
const db = mongoose.connection;
const Customer = db.model('Customer', new Schema({
  cardId: Number, // 用户卡编号
  name: String, // 用户姓名
}));
const Finance = db.model('Finance', new Schema({
  balance: Number, // 用户余额
  cardId: Number,
}));
const FinanceHistory = db.model('FinanceHistory', {
  cardId: Number,
  original: Number, // 原始金额
  settlement: Number, // 结算金额
});

/**
 * MongoDB - 事件监听
 */
db.once('open', () => {
  println('—————— 已连接MongoDB ——————');
});

/**
 * 初始化数据
 */
const initData = [
  { customer: { cardId: 1, name: 'A' }, finance: { cardId: 1, balance: 100 } },
  { customer: { cardId: 2, name: 'B' }, finance: { cardId: 2, balance: 0 } },
  { customer: { cardId: 3, name: 'C' }, finance: { cardId: 3, balance: 200 } },
  { customer: { cardId: 4, name: 'D' }, finance: { cardId: 4, balance: 100 } },
];

const createData = ({ customer, finance }) => new Promise((resovle, reject) => {
  Customer.create(customer)
    .then(() => Finance.create(finance))
    .then(() => resovle())
    .catch(reject);
});

/**
 * MongoDB初始化
 */
async function init() {
  await Customer.createCollection();
  await Finance.createCollection();
  await FinanceHistory.createCollection();
  // 初始化数据
  const promises = await initData.map(createData);
  await Promise.all(promises);
  println('  -- 数据已初始化');
}

/**
 * 清空MongoDB表数据
 */
async function clear() {
  const option = { expireAfterSeconds: 0 };
  await Customer.deleteMany({}, option);
  await Finance.deleteMany({}, option);
  await FinanceHistory.deleteMany({}, option);
  println('  -- 历史数据已清理');
}

// 事务队列
const queueList = [{ // A修改名称
  update: { customer: { query: { cardId: 1 }, update: { name: 'A1' } } },
  result: { customer: { query: { cardId: 1 }, result: { cardId: 1, name: 'A1' } } },
}, { // 修改不存在名称
  update: { customer: { query: { cardId: 5 }, update: { name: 'E' } } },
  result: { customer: { query: { cardId: 1 }, result: { cardId: 1, name: 'A1' } } },
}, { // 修改不存在名称、C充值212
  update: {
    customer: { query: { cardId: 5 }, update: { name: 'E' } },
    finance: { query: { cardId: 3 }, update: { $inc: { balance: 212 } } },
  },
  result: {
    finance: { query: { cardId: 3 }, result: { cardId: 3, balance: 412 } },
  },
}, { // A充值150
  update: {
    finance: { query: { cardId: 1 }, update: { $inc: { balance: 150 } } },
    financeHistory: { cardId: 1, original: 100, settlement: 250 },
  },
  result: {
    finance: { query: { cardId: 1 }, result: { cardId: 1, balance: 250 } },
    financeHistory: { query: { cardId: 1 }, result: { original: 100, settlement: 250 } },
  },
}, { // B充值256且修改名称
  update: {
    customer: { query: { cardId: 2 }, update: { name: 'B2' } },
    finance: { query: { cardId: 2 }, update: { $inc: { balance: 256 } } },
    financeHistory: { cardId: 2, original: 0, settlement: 256 },
  },
  result: {
    customer: { query: { cardId: 2 }, result: { name: 'B2' } },
    finance: { query: { cardId: 2 }, result: { balance: 256 } },
    financeHistory: { query: { cardId: 2 }, result: { original: 0, settlement: 256 } },
  },
}];

/**
 * 数据校验
 * @param {string} indexStr 标记顺序
 * @param {object} result 结果
 * @param {object} session session信息
 */
async function check(indexStr, result, session) {
  const { customer, finance, financeHistory } = result;
  if (customer) {
    const customerResult = await Customer.findOne(customer.query).session(session);
    println(`    【${indexStr}】 - 预计:${customer.result.name}, 实际:${customerResult.name}, 更新:${customer.result.name === customerResult.name ? '√' : '×'}`);
  }
  if (finance) {
    const financeResult = await Finance.findOne(finance.query).session(session);
    println(`    【${indexStr}】 - 预计:${finance.result.balance}, 实际:${financeResult.balance}, 更新:${finance.result.balance === financeResult.balance ? '√' : '×'}`);
  }
  if (financeHistory) {
    const financeHistoryResult = await FinanceHistory.findOne(financeHistory.query).session(session);
    println(`    【${indexStr}】 - 预计:${financeHistory.result.original}, 实际:${financeHistoryResult.original}, 新增:${financeHistory.result.original === financeHistoryResult.original ? '√' : '×'}`);
    println(`    【${indexStr}】 - 预计:${financeHistory.result.settlement}, 实际:${financeHistoryResult.settlement}, 新增:${financeHistory.result.settlement === financeHistoryResult.settlement ? '√' : '×'}`);
  }
}

/**
 * 显示数据
 */
async function data() {
  const customers = await Customer.find();
  const finances = await Finance.find();
  const customersList = customers.reduce((obj, customer) => {
    const o = obj;
    o[customer.cardId] = { name: customer.name };
    return o;
  }, {});
  finances.forEach((finance) => {
    const { balance, cardId } = finance;
    if (cardId in customersList) {
      customersList[cardId].balance = balance;
    }
  });
  println(' | cardId | name | balance\t | ');
  Object.keys(customersList).forEach((cardId) => {
    const { balance, name } = customersList[cardId];
    println(` | ${cardId}\t  | ${name}\t | ${balance}\t\t | `);
  });
}

/**
 * 单例事务
 * @param {object} caseItem 事务内容
 * @param {number} index 索引顺序
 */
async function transacion(caseItem, index) {
  const indexStr = `${parseInt(index + 1, 10)}`;
  println(`    ${indexStr} - 开始执行原子事务`);
  const { update: { customer, finance, financeHistory }, result } = caseItem;
  let session;
  try {
    session = await db.startSession();
    // 开始事务
    await session.startTransaction();
    // 更新数据
    if (customer) {
      await Customer.updateOne(customer.query, customer.update, { session });
    }
    if (finance) {
      await Finance.updateOne(finance.query, finance.update, { session });
    }
    if (financeHistory) {
      await FinanceHistory.create(financeHistory, { session });
    }
  } catch (e) {
    await session.abortTransaction();
    throw e;
  }
  // 结束事务
  await session.commitTransaction();
  await check(indexStr, result, session);
  println(`    ${indexStr} √ 原子事务执行完成`);
}

/**
 * 并发校验事务
 */
async function concurrent() {
  println('  -- 开始处理事务内容');
  await Promise.map(queueList, transacion);
  println('  -- 事务处理完毕');
}

async function run() {
  await clear();
  await init();
  await data();
  await concurrent();
  await data();
}

run()
  .then(() => println('—————— 已完成 \t——————'))
  .catch(console.error)
  .then(() => process.exit(1));
