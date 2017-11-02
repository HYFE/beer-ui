# 开始

## 安装
```bash
npm i HYFE/vue-components -S
```
<!--code-->
## 引入组件

```js
import Vue from 'vue'
import Components from 'vue-components'

// 一次性全部引入
Vue.use(Components)
```

## 按需引入

组件公共样式必须引入，然后按路径单独引入某个组件。

```js
import 'vue-components/src/styles/base.less'
import divider from 'vue-components/src/components/divider'

Vue.component(divider.name, divider)
```
