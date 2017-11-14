# Tooltip 气泡提示

鼠标悬浮时显示文字，用于替代浏览器默认的`title`。

## 代码用例
<!--code-->
## API

### v-tooltip

参数|描述
---|---
arg|显示的方向，如：`v-tooltip:top`，省略时默认向上
value|显示的文本，如：`v-tooltip:top="'hello'"`
modifiers|设置主题样式，如：`v-tooltip.light`

### 全局配置

属性|类型|描述|默认值
---|---|---|---
theme|String|主题：`dark`、`light`|`dark`
arrow|Boolean|是否显示箭头|`true`
delay|Number|延迟显示（`ms`）|`500`

#### 这样使用全局配置：

```js
// 1. 引入全部组件
import Vue from 'vue'
import BeerUI from 'beer-ui'

Vue.use(BeerUI, {
    tooltip: {
        /* 你的配置 */
    }
})
```

```js
// 2. 只引用 tooltip
import Vue from 'vue'
import tooltip from 'beer-ui/src/components/tooltip'

Vue.use(tooltip, {
    /* 你的配置 */
})
```

