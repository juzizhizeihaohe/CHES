node_modules 是项目所依赖的各种外置插件

public 是静态资源文件夹，放在其中的文件会被 webpack 原封不动的打包到 dist 文件夹中

src（程序员源代码）
assets 放置的是静态资源（一般放置多个组件公用的静态资源），放在其中的文件会被 webpack 当作一个模块，打包到 js 文件中
components 放置非路由组件（全局组件）
App.vue 是唯一的根组件
main.js 是程序的入口文件，是整个程序最先执行的文件

.gitignore 是git的忽略文件

babel.config 是babel的配置文件，兼容性控制，做语法转换

jsconfig.json js运行配置文件

package-lock.json 缓存性文件，记录项目依赖的下载版本，下载位置

package.json 项目详细说明

README.md 说明性文件
