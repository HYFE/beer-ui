<template>
    <docs-page>
        <code-block title="基本用法"
                    :code="simpleCode">
            <simpleDemo></simpleDemo>
            <div slot="desc"><p>只是一条分割线。</p></div>
        </code-block>
        <code-block title="带标题的分割线"
                    :code="labelCode"
                    desc="你可以传入`align`改变标题的位置，支持的值有：`left`、`center`、`right`。">
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
