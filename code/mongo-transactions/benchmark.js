const Benchmark = require('benchmark');
const mongoose = require('mongoose');

const { mongodb } = require('../../config');

mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/transaction`, {
  useNewUrlParser: true,
  poolSize: 10,
});

const { Schema } = mongoose;
const db = mongoose.connection;

const Log = db.model('Log', new Schema({ timestamp: Date }));

async function createLog(session) {
  if (session) {
    await Log.create({ timestamp: new Date().getTime() }, { session });
  } else {
    await Log.create({ timestamp: new Date().getTime() });
  }
  return true;
}

// 直接创建
const create = deferred => Log
  .createCollection()
  .then(() => createLog())
  .then(() => deferred.resolve());

// 使用事务创建
const transacion = (deferred) => {
  let session;
  return Log
    .createCollection()
    .then(() => db.startSession())
    .then((_session) => {
      session = _session;
      session.startTransaction();
      return createLog(session);
    })
    .then(() => session.commitTransaction())
    .then(() => deferred.resolve());
};

const suite = new Benchmark.Suite();

async function run() {
  // add tests
  suite
    .add('transaction', transacion, { defer: true })
    .add('create', create, { defer: true })
    .on('cycle', event => console.info(String(event.target)))
    .on('complete', () => console.info('--- Completed ---'))
    // run async
    .run({ async: true });
}

run()
  .then()
  .catch(console.error);
