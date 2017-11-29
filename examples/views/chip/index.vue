<template>
    <docs-page>
        <code-block title="基本用法"
                    :code="baseCode"
                    desc="提供一个前置插槽和显示关闭按钮的选项。">
            <baseDemo></baseDemo>
        </code-block>
        <code-block title="大小"
                    :code="sizeCode"
                    desc="支持`lg`、`md`、`sm`三种尺寸。">
            <sizeDemo></sizeDemo>
        </code-block>
    </docs-page>
</template>
<script>
import baseDemo from './base'
import baseCode from '!raw-loader!./base'
import sizeDemo from './size'
import sizeCode from '!raw-loader!./size'

export default {
    components: {
        baseDemo,
        sizeDemo
    },
    data() {
        return {
            baseCode,
            sizeCode
        }
    }
}
</script>
<style lang="less">

</style>
