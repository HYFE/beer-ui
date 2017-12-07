<template>
    <docs-page>
        <code-block title="基础使用"
                    desc="执行的动作是完全可控的，完全由`handle`函数决定。"
                    :code="demoCode">
            <demo></demo>
        </code-block>
    </docs-page>
</template>
<script>
import demo from './demo'
import demoCode from '!raw-loader!./demo'

export default {
    components: {
        demo,
    },
    data () {
        return {
            demoCode,
        }
    }
}
</script>
