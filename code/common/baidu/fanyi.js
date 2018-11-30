// 从百度云获取翻译结果

const request = require('request-promise');

const baseUri = 'https://fanyi-api.baidu.com/api/trans/vip/translate';

const { baidu: { api: { fanyi: { appId, secretKey } } } } = require('../../../config');

const { md5 } = require('../crypto');


/**
 * 中文 » 英语 翻译
 * @param {*} q 需要翻译的词
 */
async function translateEn2Zh(q) {
  const salt = new Date().getTime();
  const sign = md5(`${appId}${q}${salt}${secretKey}`);
  const form = {
    q,
    from: 'en',
    to: 'zh',
    appid: appId,
    salt,
    sign,
  };
  const result = await request.post({
    form,
    method: 'POST',
    uri: baseUri,
  });
  return decodeURI(result);
}

module.exports = {
  translateEn2Zh,
};
