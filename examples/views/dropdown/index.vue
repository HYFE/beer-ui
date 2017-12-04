<template>
    <docs-page>
        <code-block title="基本用法"
                    :code="baseCode"
                    desc="支持六个显示方法。">
            <baseDemo></baseDemo>
        </code-block>
        <code-block title="选择器"
                    :code="selectorCode"
                    desc="可以传入`value`作为轻量选择器使用，且支持分组。">
            <selectorDemo></selectorDemo>
        </code-block>
    </docs-page>
</template>
<script>
import baseDemo from './base'
import baseCode from '!raw-loader!./base'
import selectorDemo from './selector'
import selectorCode from '!raw-loader!./selector'

export default {
    components: {
        baseDemo,
        selectorDemo
    },
    data() {
        return {
            baseCode,
            selectorCode
        }
    }
}
</script>

