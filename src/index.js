/* 入口文件经过处理后，生成 bundle.js */
import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './router/router';

ReactDom.render(
  getRouter(),
  document.getElementById('app')
);
