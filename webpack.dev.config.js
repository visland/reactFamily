/* webpack 开发配置文件 */
const path = require('path');

/*
 * In CommonJS: required
 * In ES2015: import
 */
module.exports = {
    /* 入口 */
    entry : [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js'),
    ],

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
    },

    devServer: {
        /* 配置要监听的端口 */
        port: 8080,
        /* URL的根目录 */
        contentBase: path.join(__dirname, './dist'),
        /* 让所有404定位到index.html */
        historyApiFallback: true,
        /* 希望服务器外部可以访问 */
        host:'0.0.0.0'
    },

    /* 绝对路径=>相对路径 */
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router')
        }
    }
};