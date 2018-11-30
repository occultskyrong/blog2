/* eslint-disable camelcase */
const fs = require('fs');
const path = require('path');

const { translateEn2Zh } = require('../common/baidu/fanyi');
const fields = require('./models/fields');

// const { features } = require('./_countries');
// const { features } = require('./raw/_countries_2.json');

// console.info('共计 ', features.length, ' 个国家和地区');

// const results = features.map((country) => {
//   const { properties } = country;
//   const name_english_formal = properties.FORMAL_EN;
//   const name_english_short = properties.ISO_A2;
//   return {
//     // capital_name_chinese: '首都中文名称',
//     // capital_name_english: '首都英文名称',
//     // capital_point: '首都中心坐标点',
//     // country_center_point: '国家中心坐标点',
//     country_code: properties.ISO_A3,
//     country_type: properties.TYPE,
//     // name_chinese: '中文名称',
//     // name_chinese_short: '中文简写名称',
//     name_english_formal,
//     name_english_abbreviation: properties.NAME_SORT,
//     name_english_short,
//     // political_institutions: '政治制度',
//     continent: properties.CONTINENT,
//     subregion: properties.SUBREGION,
//     // time_zone: '时区',
//     // geometry_type: '几何形状',
//     // geometry_points: '国界坐标点',
//   };
// });

// console.info(results);

console.info('娃哈哈');

translateEn2Zh('French Southern and Antarctic Lands')
  .then(console.info)
  .catch(console.error)
  .then(() => process.exit(1));

// fs.writeFileSync(path.join(__dirname, './results/countries.json'), JSON.stringify(results));

// console.info(features.reduce((set, item) => {
//   set.add(item.properties.TYPE);
//   return set;
// }, new Set()));
