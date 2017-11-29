<template>
    <docs-page>
        <code-block title="基本用法"
                    :code="baseCode"
                    desc="可设置五种大小，两种形状。">
            <baseDemo></baseDemo>
        </code-block>
        <code-block title="内容类型"
                    :code="typeCode"
                    desc="支持图标、图片或自定义内容的展示。">
            <typeDemo></typeDemo>
        </code-block>
        <code-block title="反色"
                    :code="reverseCode"
                    desc="设置反色以搭配更多场景。">
            <reverseDemo></reverseDemo>
        </code-block>
    </docs-page>
</template>
<script>
import baseDemo from './base'
import baseCode from '!raw-loader!./base'
import typeDemo from './type'
import typeCode from '!raw-loader!./type'
import reverseDemo from './reverse'
import reverseCode from '!raw-loader!./reverse'

export default {
    components: {
        baseDemo,
        typeDemo,
        reverseDemo
    },
    data() {
        return {
            baseCode,
            typeCode,
            reverseCode
        }
    }
}
</script>
<style lang="less">

</style>
