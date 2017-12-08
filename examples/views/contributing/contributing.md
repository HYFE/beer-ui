# 贡献指南

## 项目结构

```bash
🗁 examples         ## 文档目录
|--🗁 components
|  |--🗎 codeBlock.vue  ## 代码示例组件
|  |--🗎 docsPage.vue   ## 文档页组件
|  `--🗎 header.vue
|--🗁 router
|  |--🗎 routes.js  ## 添加组件到这里注册路由
|  `--🗎 index.js
|--🗁 views         ## 文档页面目录
|--🗎 App.vue
|--🗎 index.html
`--🗎 main.js
🗁 src              ## 组件源码目录
|--🗁 components    ## 组件目录
|--🗁 styles
`--🗎 index.js
```

## 文档编写

当你完成一个组件后，首先到`src/index.js`中确保组件已注册。

执行以下命令创建文档目录：

```bash
npm run doc hello
```

按照顺序依次录入，将看到如下场景：

```bash
? Component name:  测试组件
? Component description:  测试描述
? Do you need an example?  Yes
```

**示例：**

```bash
🗁 examples
|--🗁 views
    `--🗁 hello
    |  |--🗎 base.vue   # 空的示例组件
    |  |--🗎 index.vue  # 一个基础页面组件
    |  `--🗎 hello.md   # 包含基础内容结构文档内容
```

`md`文件内容格式大概如下：

```md
# 组件名

组件描述。。。

## 代码用例

<!--code -->

## API

……
```

`<!--code -->`是个占位符，因为`markdown`中不能很好的解析出代码示例，所以在`docs-page`组件读取到`markdown`后这个占位符对应到组件的插槽。也就是说代码示例需要手动引入。

> `<!--code -->` 中间的空格不需要，这里是避免被误解析。

提供了`code-block`组件用于展示代码示例。

```html
<template>
    <docs-page>
        <code-block title="简单使用"
                    :code="simpleCode">
            <simpleDemo></simpleDemo>
        </code-block>
        <code-block title="带标题的分割线"
                    :code="labelCode">
            <labelDemo></labelDemo>
        </code-block>
    </docs-page>
</template>
<script>
import simpleDemo from './simple'
import labelDemo from './label'
import simpleCode from '!raw-loader!./simple'
import labelCode from '!raw-loader!./label'

export default {
    components: {
        simpleDemo,
        labelDemo
    },
    data () {
        return {
            simpleCode,
            labelCode
        }
    }
}
</script>
```

### CodeBlock API

#### Props

名称|描述
---|---
title|示例代码标题
desc|示例代码描述，可以传入 Markdown 格式字符串（可选）
code|示例代码

#### Slots

名称|描述
---|---
default|一般用于插入示例代码组件
desc|与`props:desc`二选一，以标签形式书写描述放入此插槽内

> 看不明白的话可以结合具体的文件查看。
