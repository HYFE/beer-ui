<template>
    <docs-page title="Tabs 标签页" desc="内容切换容器，承载不同模块下进一步区分的内容。">
        <template slot="code">
            <code-block title="基础用法" :code="simpleCode">
                <simpleDemo></simpleDemo>
            </code-block>
            <code-block title="与 Tabbar 结合" :code="tabbarCode">
                <tabbarDemo></tabbarDemo>
                <br>
                只需要把<code>ui-tabbar</code>组件放入<code>tabbar</code>插槽中。
            </code-block>
            <code-block title="改变布局" :code="directionCode">
                <directionDemo></directionDemo>
                <br>
                <p>指定<code>layout="x"</code>时变为横轴布局模式。</p>
            </code-block>
        </template>
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
