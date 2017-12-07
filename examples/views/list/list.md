# List 列表
用于菜单导航、菜单列表、按钮分组、内容展示等。

## 代码用例
<!--code-->
## API

### List props

属性|类型|描述|默认值
---|---|---|---
bordered|Boolean|设置子项之间是否显示分割线|-
exact|Boolean|当子项渲染为`router-link`时的`exact`属性值|-
thin|Boolean|设置子项内边距为较小尺寸|-

### Listitem props

属性|类型|描述|默认值
---|---|---|---
isAction|Boolean|设置子项是否响应点击事件，为`true`时鼠标悬浮时为`cursor :pointer`|`true`
to|Object、String|设置后将渲染为`router-link`|-
href|String|设置后将渲染为`a`标签|-
disabled|Boolean|设置禁用状态|-

### Treeitem props

属性|类型|描述|默认值
---|---|---|---
nodeKey|String|使用该属性值作为树节点的唯一标识|`id`
tree|Object|以一个单节点对象作为树的顶端|-
isHighlight|Function|高亮判断函数|-
expanedByNode|Boolean|是否点击整个节点都可以展开子节点，为`false`时只有点击箭头才可以|`true`
arrowPlacement|String|箭头显示的位置：`left`、`right`|`right`
alignPadding|Number|每个层级递增的边距大小|`20`
accordion|Boolean|手风琴模式，同一层级只能展开一个节点|-
expandAll|Boolean|是否默认展示全部|`true`
expandedKeys|Array|默认展示的节点|-

### Listitem slots

名称|描述
---|---
default|默认显示内容
left|左侧内容
right|右侧内容

### Treeitem slots

名称|描述|参数
---|---|---
default|树节点显示内容|`slot-scope="{ node }"`
