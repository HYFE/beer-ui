<template>
    <docs-page>
        <code-block title="基本用法"
                    :code="baseCode"
                    desc="提供一个前置插槽和显示关闭按钮的选项。">
            <baseDemo></baseDemo>
        </code-block>
    </docs-page>
</template>
<script>
import baseDemo from './base'
import baseCode from '!raw-loader!./base'

export default {
    components: {
        baseDemo,
    },
    data() {
        return {
            baseCode,
        }
    }
}
</script>
<style lang="less">

</style>
