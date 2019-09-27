React App

## 安装React
npx create-react-app my-app<br>
cd my-app<br>

## webpack模式
npm run eject

## 启动应用
npm run start

## 发布项目
npm run build

## 预渲染
安装 prerender-spa-plugin
cnpm i -D prerender-spa-plugin

## 配置webpack
const PrerenderSPAPlugin = require('prerender-spa-plugin')<br>
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer<br>
`new PrerenderSPAPlugin({
    staticDir: path.join(__dirname, '../dist'),
    routes: [ '/' ],
    renderer: new Renderer({
        renderAfterTime: 5000,
        headless: true // true表示不激活浏览器
    })
})`
## 按需加载高阶函数依赖
cnpm i -D babel-plugin-syntax-dynamic-import babel-plugin-transform-runtime<br>

## 引入方法
import AsyncCom from '../async-component'
const Index = AsyncCom(() => import('@/pages/index'))