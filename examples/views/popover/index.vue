<template>
    <docs-page>
        <code-block title="基础使用"
                    :code="baseCode"
                    desc="使用`for`属性设置触发元素的关联。">
            <baseDemo></baseDemo>
        </code-block>
        <code-block title="位置"
                    :code="placementCode"
                    desc="12个不同的位置，设置`placement`属性。">
            <placementDemo></placementDemo>
        </code-block>
        <code-block title="最大高度"
                    :code="fullHeightCode"
                    desc="内容超过容器时，根据显示方向伸展到最大高度。（不支持`left`、`right`）">
            <fullHeightDemo></fullHeightDemo>
        </code-block>
    </docs-page>
</template>
<script>
import baseDemo from './base'
import baseCode from '!raw-loader!./base'
import placementDemo from './placement'
import placementCode from '!raw-loader!./placement'
import fullHeightDemo from './fullHeight'
import fullHeightCode from '!raw-loader!./fullHeight'

export default {
    components: {
        baseDemo,
        placementDemo,
        fullHeightDemo
    },
    data() {
        return {
            baseCode,
            placementCode,
            fullHeightCode
        }
    }
}
</script>
