<template>
    <docs-page title="List 列表"
               desc="用于菜单导航、菜单列表、按钮分组、内容展示等，支持多层嵌套。">
        <template slot="code">
            <code-block title="基础用法" :code="simpleCode">
                <simpleDemo></simpleDemo>
                <p>默认列表项之间无分割线，你可以添加<code>borderer</code>属性显示菜单分割线。</p>
            </code-block>
        </template>
    </docs-page>
</template>
<script>
import simpleDemo from './simple'
import simpleCode from '!raw-loader!./simple'

export default {
    components: {
        simpleDemo
    },
    data() {
        return {
            simpleCode
        }
    }
}
</script>
<style lang="less">

</style>
