<template>
    <docs-page>
        <code-block title="基础用法"
                    :code="simpleCode"
                    desc="可以结合任意元素触发容器切换。">
            <simpleDemo></simpleDemo>
        </code-block>
        <code-block title="与 Tabbar 结合"
                    :code="tabbarCode"
                    desc="只需要把`ui-tabbar`组件放入`tabbar`插槽中。">
            <tabbarDemo></tabbarDemo>
        </code-block>
        <code-block title="改变布局"
                    :code="directionCode"
                    desc='指定`layout="x"`时变为横轴布局模式。'>
            <directionDemo></directionDemo>
        </code-block>
    </docs-page>
</template>
<script>
import simpleDemo from './simple'
import simpleCode from '!raw-loader!./simple'
import tabbarDemo from './tabbar'
import tabbarCode from '!raw-loader!./tabbar'
import directionDemo from './direction'
import directionCode from '!raw-loader!./direction'

export default {
    components: {
        simpleDemo,
        tabbarDemo,
        directionDemo
    },
    data () {
        return {
            simpleCode,
            tabbarCode,
            directionCode
        }
    }
}
</script>
