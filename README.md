# x-node
## 项目搭建
1. 安装koa
    + npm i koa -S  
2. 初始化package.json
    + npm init
    + package.json中scripts上添加启动脚本
3. 模板pug
    + 安装模板pug npm i pug -S
    + 安装koa-views npm i koa-views -S
    + 使用参照index.js
4. 安装npm install koa-body koa-static2 koa2-cors -S 
    + koa-body 处理post请求、图片上传 http://www.ptbird.cn/koa-body.html
    + koa-static2 静态服务器搭建
    + koa2-cors 应道跨域请求  https://www.jianshu.com/p/5b3acded5182
5. 安装npm install --save-dev  babel-core babel-register babel-polyfill babel-loader babel-preset-env babel-preset-stage-0 babel-plugin-transform-runtime
    + 使用import export 代替require https://www.cnblogs.com/hopesun/p/6067696.html
6. 安装koa-router
7. 安装require-directory
    + 用法：https://www.npmjs.com/package/require-directory
8. 在vscode下调试koa代码 
    + 用法：https://www.shanzhonglei.com/?p=1704

