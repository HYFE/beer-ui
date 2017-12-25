# loadMore 加载更多

数据加载模式，封装了加载行为和基本交互。

## 代码用例
<!--code-->
## API

### Props
属性|类型|描述|默认值
---|---|---|---
tag|String, Object|组件外层元素：HTML标签或自定义组件均可|`div`
autoLoad|Boolean|是否使用自动加载|`true`
loading|Boolean|设置组件加载状态|-
pageNum|Number|设置当前请求数据页码（每次请求后应当更新该值）|`1`
pageCount|Number|设置数据总页数（至少会请求一次，第一次请求完成后应该更新该值为实际总页数）|`1`
loadingIcon|String|设置加载数据时无限旋转的图标|`icon-spin4`

### Events

事件|描述|参数
---|---|---
loadMore|满足加载行为（滚动到底或点击按钮）后触发，组件内部会判断是否可以继续下一次请求|`pageNum`: 下一次请求的页码

### Slots

名称|描述|scope-slot
---|---|---
-|默认显示内容|`{ dataSource }`
loading|自动加载下 loading 展示内容（默认为图标）|-
loadMore|手动加载下按钮显示内容|-
