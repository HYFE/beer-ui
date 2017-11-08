<template>
    <docs-page>
        <code-block title="基础使用"
                    :code="baseCode"
                    desc="`v-popover`指令用于关联的触发元素，指令的`arg`和组件`name`保持一致。
使用指令修饰符表示触发事件，省略时为`click`。">
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
        <code-block title="嵌套"
                    :code="nestedCode"
                    desc="支持弹窗嵌套，并且点击外部时按顺序关闭。">
            <nestedDemo></nestedDemo>
        </code-block>
        <code-block title="单例"
                    :code="singletonCode"
                    desc="使用一个占位组件进行动态内容展示，模拟单例组件。
> 实际使用中一般把`popoverHolder`放到根组件下。">
            <singletonDemo></singletonDemo>
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
import nestedDemo from './nested'
import nestedCode from '!raw-loader!./nested'
import singletonDemo from './singleton'
import singletonCode from '!raw-loader!./singleton'

export default {
    components: {
        baseDemo,
        placementDemo,
        fullHeightDemo,
        nestedDemo,
        singletonDemo
    },
    data() {
        return {
            baseCode,
            placementCode,
            fullHeightCode,
            nestedCode,
            singletonCode
        }
    },
}
</script>
