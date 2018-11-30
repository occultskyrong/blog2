// 配置文件
const development = require('./development');

const ENV = process.env.NODE_ENV || 'development';

const config = {
  development,
};

module.exports = config[ENV];
