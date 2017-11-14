<template>
    <div>
        <ui-tabbar v-model="activeTab">
            <ui-tab name="tab1">标签一</ui-tab>
            <ui-tab name="tab2">标签二</ui-tab>
            <ui-tab name="tab3">标签三</ui-tab>
        </ui-tabbar>
        <br>
        <ui-tabbar v-model="activeTab">
            <ui-tab name="tab1">标签一</ui-tab>
            <ui-tab name="tab2"
                    disabled>标签二</ui-tab>
            <ui-tab name="tab3">标签三</ui-tab>
        </ui-tabbar>
        <br>
        <ui-tabbar v-model="activeTab" align="center">
            <ui-tab name="tab1">标签一</ui-tab>
            <ui-tab name="tab2">标签二</ui-tab>
            <ui-tab name="tab3">标签三</ui-tab>
        </ui-tabbar>
        <br>
        <ui-tabbar v-model="activeTab" fill>
            <ui-tab name="tab1">标签一</ui-tab>
            <ui-tab name="tab2">标签二</ui-tab>
            <ui-tab name="tab3">标签三</ui-tab>
        </ui-tabbar>
    </div>
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
