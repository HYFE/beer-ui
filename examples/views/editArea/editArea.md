# EditArea 编辑框

编辑框编辑框编辑框编辑框编辑框

## 代码用例
<!--code-->

## API

### props
属性|类型|描述|默认值
---|---|---|---
value|String|定义文本框的内容|-
isTextarea|Boolean|文本框类型|false
inputStyle|Object|可直接修改输入框的样式|-
maxlength|Number|规定输入字段的最大长度|-
readonly|Boolean|规定输入字段为只读|false

### 事件
属性|描述|回调参数
---|---|---
focus|当元素获得焦点时触发|Event
blur|当元素失去焦点时触发|Event
input|当输入的值发生变化时触发|value
change|当输入的值发生变化并且(失去焦点或者按下enter键)时触发|value
