<template>
    <docs-page>

        <code-block title="基本用法"
                    :code="baseCode"
                    desc="简单使用。">
            <baseDemo></baseDemo>
        </code-block>
        <code-block title="插槽"
                    :code="slotCode"
                    desc="带头部和底部的弹窗">
            <slotDemo></slotDemo>
        </code-block>
        <code-block title="嵌套"
                    :code="nestedCode"
                    desc="可以嵌套多层窗口，包含`popover`">
            <nestedDemo></nestedDemo>
        </code-block>
    </docs-page>
</template>

<script>
import baseDemo from './base'
import baseCode from '!raw-loader!./base'
import slotDemo from './slot'
import slotCode from '!raw-loader!./slot'
import nestedDemo from './nested'
import nestedCode from '!raw-loader!./nested'

export default {
    components: {
        baseDemo,
        slotDemo,
        nestedDemo
    },
    data() {
        return {
            baseCode,
            slotCode,
            nestedCode
        }
    }
}
</script>

