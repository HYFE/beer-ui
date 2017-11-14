<template>
    <ui-tabs v-model="activeTab" layout="x">
        <ui-tabbar slot="tabbar"
                   v-model="activeTab">
            <ui-tab name="tab1">标签一</ui-tab>
            <ui-tab name="tab2">标签二</ui-tab>
            <ui-tab name="tab3">标签三</ui-tab>
        </ui-tabbar>
        <ui-tab-panel name="tab1">
            <p>第一个标签页内容</p>
        </ui-tab-panel>
        <ui-tab-panel name="tab2">
            <p>第二个标签页内容</p>
        </ui-tab-panel>
        <ui-tab-panel name="tab3">
            <p>第三个标签页内容</p>
        </ui-tab-panel>
    </ui-tabs>
</template>
<script>
export default {
    data () {
        return {
            activeTab: 'tab1'
        }
    }
}
</script>
