/* 入口文件经过处理后，生成 bundle.js */
import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader'

import getRouter from 'router/router';

/* 初始化 */
renderWithHotReload(getRouter());

/* 模块热替换 */
if (moudle.hot) {
    moudle.hot.accept('./router/router', () => {
        const getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            {RootElement}
        </AppContainer>,
        document.getElementById('app')
    )
}
