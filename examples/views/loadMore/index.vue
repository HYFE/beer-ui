<template>
    <docs-page>
        <code-block title="基本用法"
                    :code="baseCode"
                    desc="默认使用自动模式，滚动条到底加载数据。">
            <baseDemo></baseDemo>
        </code-block>
        <code-block title="手动加载"
                    :code="loadByBtnCode"
                    desc="点击按钮触发数据加载。">
            <loadByBtnDemo></loadByBtnDemo>
        </code-block>
    </docs-page>
</template>

<script>
import baseDemo from './base'
import baseCode from '!raw-loader!./base'
import loadByBtnDemo from './loadByBtn'
import loadByBtnCode from '!raw-loader!./loadByBtn'

export default {
    components: {
        baseDemo,
        loadByBtnDemo
    },
    data() {
        return {
            baseCode,
            loadByBtnCode
        }
    }
}
</script>

