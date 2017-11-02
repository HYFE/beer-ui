<template>
    <docs-page>
        <code-block title="expand-transition 展开折叠"
                    :code="expandCode">
            <expandDemo></expandDemo>
        </code-block>
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
