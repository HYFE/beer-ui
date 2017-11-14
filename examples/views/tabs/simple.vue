<template>
    <div>
        <button @click="activeTab = 'tab1'">Tab 1</button>
        <button @click="activeTab = 'tab2'">Tab 2</button>
        <button @click="activeTab = 'tab3'">Tab 3</button>
        <ui-tabs v-model="activeTab">
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
