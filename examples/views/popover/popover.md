# Popover 弹窗

点击元素进行隐藏内容的弹窗展示。

## 代码用例
<!--code-->
## API
### Props

属性|类型|描述|默认值
---|---|---|---
name|String|设置触发指令关联的`name`值，必传！|-
placement|String|设置弹窗显示的位置|`bottom`
eventsEnabled|Boolean|启用一些监听事件（`resize`,`scroll`），用于位置更新|`true`
offset|Number|弹窗的位置偏移量|`0`
arrow|Boolean|是否显示箭头|`true`
width|Number/String|设置弹窗面板宽度|预设最小宽度`120px`
fullHeight|Boolean|是否自动填充高度到屏幕边界（不支持`left`、`right`）|-
transitionName|String|设置弹窗显示的过渡名称（`transition`）|`fade-in`

### Events

事件|描述|参数
---|---|---
change|显示状态变化时触发|`visible`：是否可见
show|弹窗显示时触发|-
hide|弹窗关闭时触发|-

### v-popover

参数|描述
---|---
**arg**|指令参数与要关联的`popover`组件的`name`属性值一致，必须。
**modifiers**|修饰符用来表示触发的事件，支持：`click`、`hover`、`focus`。省略该项时为`click`。
