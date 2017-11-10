# beer-ui

Vue components library.

## 安装
```bash
npm i beer-ui -S
```
<!--code-->
## 引入组件

```js
import Vue from 'vue'
import BeerUI from 'beer-ui'

// 一次性全部引入
Vue.use(BeerUI)
```

## 按需引入

组件公共样式必须引入，然后按路径单独引入某个组件。

```js
import 'beer-ui/src/styles/base.less'
import divider from 'beer-ui/src/components/divider'

Vue.component(divider.name, divider)
```
