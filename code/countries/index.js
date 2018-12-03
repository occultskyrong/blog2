/* eslint-disable camelcase */
const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');

const unCountriesChinese = require('./raw/_un_countries_chinese');
const unCountriesEnglish = require('./raw/_un_countries_english');
const { translateEn2Zh } = require('../common/baidu/fanyi');
// const { features } = require('./raw/_countries_1');
const { features } = require('./raw/_countries_2');

// console.info('共计 ', features.length, ' 个国家和地区');

/**
 * 构造国家数据
 * @param {*} country 国家原始数据
 */
async function setCountryInfo(country) {
  if (country === undefined) { throw new Error('未获取到国家数据'); }
  let name_chinese;
  let name_chinese_abbreviation;
  const { properties } = country;
  const name_english_abbreviation = properties.NAME_SORT;
  const name_english_formal = properties.FORMAL_EN;
  const name_english_short = properties.ISO_A2;
  if (name_english_formal) {
    name_chinese = await translateEn2Zh(name_english_formal);
  }
  if (name_english_formal === name_english_abbreviation) {
    name_chinese_abbreviation = name_chinese;
  } else if (name_english_abbreviation) {
    name_chinese_abbreviation = await translateEn2Zh(name_english_abbreviation);
  }
  return {
    // capital_name_chinese: '首都中文名称',
    // capital_name_english: '首都英文名称',
    // capital_point: '首都中心坐标点',
    // country_center_point: '国家中心坐标点',
    country_code: properties.ISO_A3,
    country_type: properties.TYPE,
    name_chinese,
    name_chinese_abbreviation,
    name_chinese_UN: '', // 联合国用中文名
    name_english_abbreviation,
    name_english_formal,
    name_english_short,
    name_english_UN: '', // 联合国用英文名
    // political_institutions: '政治制度',
    continent: properties.CONTINENT,
    subregion: properties.SUBREGION,
    // time_zone: '时区',
    // geometry_type: '几何形状',
    // geometry_points: '国界坐标点',
  };
}

async function run() {
  const sovereignCountry = features.filter(c => c.properties.TYPE === 'Sovereign country');
  const results = await Promise.map(sovereignCountry, (country, index, length) => {
    console.info(`-- 处理第 ${index}/${length} 个数据`);
    return setCountryInfo(country);
  }, { concurrency: 5 });
  // console.info(results);
  fs.writeFileSync(path.join(__dirname, './results/countries_1.json'), JSON.stringify(results));
}

run()
  .then(console.info)
  .catch(console.error)
  .then(() => process.exit(1));


// console.info(features.reduce((set, item) => {
//   set.add(item.properties.TYPE);
//   return set;
// }, new Set()));
