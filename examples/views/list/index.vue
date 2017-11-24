<template>
    <docs-page>
        <code-block title="基础用法"
                    :code="simpleCode"
                    desc="默认列表项之间无分割线，你可以添加`borderer`属性显示菜单分割线。">
            <simpleDemo></simpleDemo>
        </code-block>
        <code-block title="结合路由"
                    :code="routerCode"
                    desc="通过子组件的`to`属性设置跳转路径，表现与`router-link`的`to`属性一致。">
            <routerDemo></routerDemo>
        </code-block>
        <code-block title="多层级"
                    :code="childrenCode">
            <childrenDemo></childrenDemo>
            <template slot="desc">
                <p>通过子组件的
                    <code>tree</code>属性设置多层级列表，传入的数据项必须包含
                    <code>id</code>属性作为内部实现的需要的
                    <code>key</code>。</p>
                <p>每个列表项显示的内容通过插槽实现。</p>
                <p>结合
                    <code>Divider</code>组件，分隔静态列表和动态列表。</p>
            </template>
        </code-block>
    </docs-page>
</template>
<script>
import simpleDemo from './simple'
import simpleCode from '!raw-loader!./simple'
import routerDemo from './router'
import routerCode from '!raw-loader!./router'
import childrenDemo from './children'
import childrenCode from '!raw-loader!./children'

export default {
    components: {
        simpleDemo,
        routerDemo,
        childrenDemo
    },
    data() {
        return {
            simpleCode,
            routerCode,
            childrenCode,
            tab: 'props'
        }
    }
}
</script>
<style lang="less">

</style>
