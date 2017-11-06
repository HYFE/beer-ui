# Popover 弹窗

点击元素进行隐藏内容的弹窗展示。

## 代码用例
<!--code-->
## API
### Props

属性|类型|描述|默认值
---|---|---|---
for|String|设置触发弹窗显示的关联元素的`ref`值，必传！|-
visible|Boolean|弹窗显示状态，可使用`.sync`双向绑定|-
trigger|String|设置触发弹窗显示的事件：`click`、`hover`、`focus`|`click`
placement|String|设置弹窗显示的位置|`bottom`
eventsEnabled|Boolean|启用一些监听事件（`resize`,`scroll`），用于位置更新|`true`
offset|Number|弹窗的位置偏移量|`0`
arrow|Boolean|是否显示箭头|`true`
width|Number/String|设置弹窗面板宽度|-
fullHeight|Boolean|是否自动填充高度到屏幕边界（不支持`left`、`right`）|-
