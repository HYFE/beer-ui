<template>
    <div>
        <h2>Divider 分割线</h2>
        <p>用于内容分隔，列表分隔等。</p>
        <h3>示例</h3>
        <code-block title="简单使用" :code="simpleCode">
            <simpleDemo></simpleDemo>
        </code-block>
        <code-block title="显示标题" :code="labelCode">
            <labelDemo></labelDemo>
        </code-block>
    </div>
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
    data() {
        return {
            simpleCode,
            labelCode
        }
    }
}
</script>
<style lang="less">
</style>
