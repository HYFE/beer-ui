<template>
    <docs-page>
        <code-block title="基础使用"
                    :code="baseCode"
                    desc="使用`for`属性进行元素的关联。">
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
