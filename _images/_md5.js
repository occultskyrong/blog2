/**
 * @author occultskyrong
 * @createdAt 2018-10-23
 * @description 根据文件内容生成md5文件名并替换
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const md5 = crypto.createHash('md5');
const dirPath = path.join(__dirname, './'); // 文件夹路径
const extnameArray = ['.jpeg', '.png', '.jpg', '.gif']; // 需要收集的扩展名
// const except = ['README.md', '_md5.js']; // 排除的文件

/**
 * 遍历本文件夹下所有png/jpeg/jpg格式的图片
 */
async function getFilesList() {
  const filesList = fs.readdirSync(dirPath);
  const filterFilesList = filesList.filter(filename => extnameArray.indexOf(path.extname(filename.toLowerCase())) >= 0); // eslint-disable-line max-len
  return filterFilesList;
}

/**
 * 读取并重写文件名
 * - 读取图片成buffer，根据buffer计算对应的MD5
 * - 使用MD5值替换图片名称
 * @param {*} fileName
 */
async function readAndWrite(filename) {
  const extname = path.extname(filename);
  const fileBuffer = fs.readFileSync(path.join(__dirname, filename));
  const md5Filename = await md5.update(fileBuffer).digest('hex');
  fs.renameSync(path.join(__dirname, filename), path.join(__dirname, `${md5Filename}.${extname}`));
}

async function run() {
  try {
    const filesList = await getFilesList();
    const promises = filesList.map(fileName => readAndWrite(fileName));
    await Promise.all(promises);
  } catch (e) {
    throw e;
  }
}

run()
  .then(console.info)
  .catch(console.error)
  .then(() => process.exit(0));
