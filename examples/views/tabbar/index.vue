<template>
    <docs-page title="Tabbar 标签栏"
               desc="导航到同一模块下不同的视图，或者点击显示不同的内容。">
        <template slot="code">
            <code-block title="基础用法"
                        :code="simpleCode">
                <simpleDemo></simpleDemo>
                <br>
                <p>可以使用<code>disabled</code>属性禁用某个选项卡。</p>
                <p>内容对齐支持<code>left</code>、<code>center</code>、<code>right</code>，添加<code>fill</code>属性使内容充满容器。</p>
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
    data () {
        return {
            simpleCode
        }
    }
}
</script>
<style lang="less">

</style>
