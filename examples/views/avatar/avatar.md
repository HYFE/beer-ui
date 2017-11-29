# Avatar 头像

用于展示用户图片、图标或字符等。

## 代码用例
<!--code-->

## API

### Props

属性|类型|描述|默认值
---|---|---|---
circle|Boolean|是否展示为圆形|`false`
size|String|组件大小：`xl`、`lg`、`md`、`sm`、`xs`|`md`
src|String|如果提供此值，将插入一个`img`标签，承载图片链接|-
icon|String|如果提供此致，将插入一个`i`标签，承载图标|-
reverse|Boolean|是否显示为反色|-

### Events

事件|描述|参数
---|---|---
click|点击事件|Event

### Slots

名称|描述
---|---
default|组件显示内容，如果提供了插槽，将忽略`src`和`icon`
