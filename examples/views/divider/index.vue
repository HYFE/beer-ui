<template>
    <docs-page>
        <code-block title="简单使用"
                    :code="simpleCode">
            <simpleDemo></simpleDemo>
        </code-block>
        <code-block title="带标题的分割线"
                    :code="labelCode">
            <labelDemo></labelDemo>
        </code-block>
    </docs-page>
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
    data () {
        return {
            simpleCode,
            labelCode
        }
    }
}
</script>
