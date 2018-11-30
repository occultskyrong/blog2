const Sequelize = require('sequelize');

const { mysql } = require('../../config');
const countries = require('./models/countries');

const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, {
  dialect: mysql.dialect,
  host: mysql.host,
  port: mysql.port,
  dialectOptions: {
    dateStrings: true, // 禁止mysql的转换
    typeCast: true, // 覆盖了sequelize的转换
    timezone: '+08:00',
    // https://github.com/sequelize/sequelize/issues/8019#issuecomment-319014433
    // , decimalNumbers: true // 关闭Decimal转string
  },
  timezone: '+08:00', // for writing to database
  operatorsAliases: false,
  logging: 'logging' in mysql ? mysql.logging : console.log,
  define: {
    underscored: true, // 字段以 true:下划线（_）来分割
    freezeTableName: true, // 锁定表名
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000, // 连接释放时间(ms)
  },
});

const Countries = countries(sequelize, Sequelize.DataTypes);

/**
 * 查询 - 所有数据
 * @param {*} query 查询语句
 */
async function findAll(query) {
  const results = await Countries.findAll(query);
  return results;
}

module.exports = {
  findAll,
};
