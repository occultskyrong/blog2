const easyMonitor = require('easy-monitor');
const express = require('express');

const app = express();
easyMonitor('memory-leak');

// 以下是产生泄漏的代码
let theThing = null;
const replaceThing = () => {
  const leak = theThing;
  const unused = () => {
    if (leak)
      console.log('hi');
  };

  // 不断修改theThing的引用
  theThing = {
    longStr: new Array(1000000),
    someMethod: () => {
      console.log('a');
    },
  };
};

const closureLeak = (req, res, next) => {
  replaceThing();
  res.send('Hello Node');
};

app.get('/leak', closureLeak);

app.listen(8082);
