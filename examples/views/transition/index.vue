<template>
    <docs-page title="Transition 过渡">
        <p slot="desc">基于
            <a target="_blank"
               href="https://cn.vuejs.org/v2/guide/transitions.html">transition</a> 组件封装常用过渡效果。</p>
        <template slot="code">
            <code-block title="expand-transition 展开折叠"
                        :code="expandCode">
                <expandDemo></expandDemo>
            </code-block>
        </template>
    </docs-page>
</template>
<script>
import expandDemo from './expand'
import expandCode from '!raw-loader!./expand'

export default {
    components: {
        expandDemo
    },
    data () {
        return {
            expandCode
        }
    }
}
</script>
<style lang="less">

</style>
