<template>
    <docs-page title="Divider 分割线"
               desc="用于内容分隔，列表分隔等。默认带上下边距。">
        <template slot="code">
            <code-block title="简单使用"
                        :code="simpleCode">
                <simpleDemo></simpleDemo>
            </code-block>
            <code-block title="带标题的分割线"
                        :code="labelCode">
                <labelDemo></labelDemo>
            </code-block>
        </template>
        <ui-tabs slot="api"
                 v-model="tab">
            <ui-tabbar slot="tabbar"
                       v-model="tab"
                       fill>
                <ui-tab name="props">Props</ui-tab>
            </ui-tabbar>
            <ui-tab-panel name="props">
                <ol class="default">
                    <li>label</li>
                    <li>align</li>
                </ol>
            </ui-tab-panel>
        </ui-tabs>
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
            labelCode,
            tab: 'props'
        }
    }
}
</script>
