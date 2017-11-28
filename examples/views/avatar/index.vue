<template>
    <docs-page>
        <code-block title="基本用法"
                    :code="baseCode"
                    desc="可设置五种大小，两种形状。">
            <baseDemo></baseDemo>
        </code-block>
        <code-block title="展示类型"
                    :code="typeCode"
                    desc="支持图标、图片或自定义内容的展示。">
            <typeDemo></typeDemo>
        </code-block>
    </docs-page>
</template>
<script>
import baseDemo from './base'
import baseCode from '!raw-loader!./base'
import typeDemo from './type'
import typeCode from '!raw-loader!./type'

export default {
    components: {
        baseDemo,
        typeDemo
    },
    data() {
        return {
            baseCode,
            typeCode
        }
    }
}
</script>
<style lang="less">

</style>
