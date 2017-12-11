# model 模态窗

利用空间展示额外的内容。


## 代码用例
<!--code-->
## API

### Props

属性|类型|描述|默认值
---|---|---|---
value|Boolean|是否显示，可用`v-model`双向绑定|-
mask|Boolean|是否显示遮罩|`true`
animate|String|窗口的过渡效果（`transition`）|`scale-in`
width|String, Number|窗口宽度，格式支持：`50%`、`300`、`300px`|`36%`
lockScreen|Boolean|窗口显示时是否锁定滚动条|`true`
modalClass|String, Array, Object|给窗口内容部分添加类名|-
outsideCloseable|Boolean|是否点击内容外部区域关闭窗口|`true`
appendToBody|Boolean|是否将组件挂载到`body`下|`true`
top|String, Number|窗口距离顶部距离，格式支持：`20%`、`100`、`100px`|`20%`
center|Boolean|窗口是否垂直居中显示，开启后`top`将失效|-
reset|Boolean|窗口显示控制策略（`true`:`v-if`，`false`：`v-show`）|`true`
beforeClose|Function|窗口关闭前的回调，返回`true`时窗口继续关闭，返回`false`时取消此次关闭|-

### Events

事件|描述|参数
---|---|---
change|窗口显示状态变化时触发|`visible`

### Slots

名称|描述
---|---
default|窗口显示内容
header|窗口头部内容
footer|窗口底部内容
