// 合并世界地图-国家边界和中心点坐标

const fs = require('fs');

const worldCountryJson = require('./world-map.json');
const worldCountryCenterObject = require('./world-country-center.json');
const worldCountryTranslationObject = require('./world-country-translation.json');

// 写入结果文件名
const resultFileName = 'world-country.json';

// "center_point":[],
// "chinese_name":""

const worldCountryArray = worldCountryJson.features; // 国家数组
const resultWorldCountryArray = []; // 结果集

worldCountryArray.forEach((worldCountryItem) => {
  const item = worldCountryItem;
  const { properties: { name } } = item; // 国家数据:国家名称
  const worldCountryCenter = name in worldCountryCenterObject ? worldCountryCenterObject[name] : [];
  const worldCountryTranslation = name in worldCountryTranslationObject ? worldCountryTranslationObject[name] : '';
  item.properties.center_point = worldCountryCenter;
  item.properties.chinese_name = worldCountryTranslation;
  resultWorldCountryArray.push(item);
});

worldCountryJson.features = resultWorldCountryArray;
fs.writeFileSync(resultFileName, JSON.stringify(worldCountryJson));
