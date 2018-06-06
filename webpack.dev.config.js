/* webpack 开发配置文件 */
const path = require('path');

/*
 * In CommonJS: required
 * In ES2015: import
 */
module.exports = {
    /* 入口 */
    entry : path.join(__dirname, 'src/index.js'),

    /* 输出到dist文件夹，输出名字为bundle.js */
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    }
};