1.脚手架文件说明
node_modules 是项目所依赖的各种外置插件

public 是静态资源文件夹，放在其中的文件会被 webpack 原封不动的打包到 dist 文件夹中

src（程序员源代码）
assets 放置的是静态资源（一般放置多个组件公用的静态资源），放在其中的文件会被 webpack 当作一个模块，打包到 js 文件中
components 放置非路由组件（全局组件）
App.vue 是唯一的根组件
main.js 是程序的入口文件，是整个程序最先执行的文件

.gitignore 是 git 的忽略文件

babel.config 是 babel 的配置文件，兼容性控制，做语法转换

jsconfig.json js 运行配置文件

package-lock.json 缓存性文件，记录项目依赖的下载版本，下载位置

package.json 项目详细说明

README.md 说明性文件

2.项目的其他配置
使项目运行起来的时候，同时自动打开浏览器
找到 package.json 中的"scripts 修改"serve": "vue-cli-service serve --open",

eslint校验工具的关闭
在vue.config.js（vue的配置文件）中，添加  lintOnSave:false,关闭语法检查
错误示例:声明变量但未使用

用@代表src文件夹

3.路由分析
vue-router
单网页应用，常见分为3段，头部，中间，底部，通常只有中间部分做改变
路由组件：
home首页路由组件、search路由组件（搜索框）、登录、注册
非路由组件：
header、footer(在首页、搜素页有)在登陆页面没有
