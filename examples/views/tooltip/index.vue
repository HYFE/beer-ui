<template>
    <docs-page>
        <code-block title="基础使用"
                    desc="使用指令定义`tooltip`"
                    :code="baseCode">
            <baseDemo></baseDemo>
        </code-block>
        <code-block title="主题"
                    desc="提供两种主题风格"
                    :code="themeCode">
            <themeDemo></themeDemo>
        </code-block>
    </docs-page>
</template>
<script>
import baseDemo from './base'
import baseCode from '!raw-loader!./base'
import themeDemo from './theme'
import themeCode from '!raw-loader!./theme'

export default {
    components: {
        baseDemo,
        themeDemo
    },
    data () {
        return {
            baseCode,
            themeCode
        }
    }
}
</script>
