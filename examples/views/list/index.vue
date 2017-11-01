<template>
    <docs-page title="List 列表"
               desc="用于菜单导航、菜单列表、按钮分组、内容展示等，支持多层嵌套。">
        <template slot="code">
            <code-block title="基础用法" :code="simpleCode">
                <simpleDemo></simpleDemo>
                <p>默认列表项之间无分割线，你可以添加<code>borderer</code>属性显示菜单分割线。</p>
            </code-block>
            <code-block title="结合路由" :code="routerCode">
                <routerDemo></routerDemo>
                <br>
                <p>通过子组件的<code>to</code>属性设置跳转路径，表现与<code>router-link</code>的<code>to</code>属性一致。</p>
            </code-block>
            <code-block title="多层级" :code="childrenCode">
                <childrenDemo></childrenDemo>
                <br>
                <p>通过子组件的<code>children</code>属性设置多层级列表，传入的数据项必须包含<code>id</code>属性作为内部实现的需要的<code>key</code>。</p>
                <p>每个列表项显示的内容通过插槽实现。</p>
                <p>结合<code>Divider</code>组件，分隔静态列表和动态列表。</p>
            </code-block>
        </template>
        <ui-tabs slot="api"
                 v-model="tab">
            <ui-tabbar slot="tabbar"
                       v-model="tab"
                       fill>
                <ui-tab name="props">Props</ui-tab>
                <ui-tab name="slots">Slots</ui-tab>
                <ui-tab name="events">Events</ui-tab>
            </ui-tabbar>
            <ui-tab-panel name="props">
                <h1>Props 待完善</h1>
            </ui-tab-panel>
            <ui-tab-panel name="slots">
                <h1>Slots 待完善</h1>
            </ui-tab-panel>
            <ui-tab-panel name="events">
                <h1>Events 待完善</h1>
            </ui-tab-panel>
        </ui-tabs>
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
