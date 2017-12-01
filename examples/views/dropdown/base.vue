<template>
    <div>
        <ui-dropdown v-for="placement in tops"
                     :placement="placement"
                     :key="placement">
            <a class="demo-link">{{placement}}<i class="icon-down-dir"></i></a>
            <ui-dropdown-menu slot="menu">
                <ui-dropdown-item>1111111111</ui-dropdown-item>
                <ui-divider></ui-divider>
                <ui-dropdown-item disabled>2222222222222</ui-dropdown-item>
            </ui-dropdown-menu>
        </ui-dropdown>
        <br>
        <ui-dropdown v-for="placement in bottom"
                     :placement="placement"
                     :key="placement">
            <a class="demo-link">{{placement}}<i class="icon-down-dir"></i></a>
            <ui-dropdown-menu slot="menu">
                <ui-dropdown-item>1111111111</ui-dropdown-item>
                <ui-divider></ui-divider>
                <ui-dropdown-item disabled>2222222222222</ui-dropdown-item>
            </ui-dropdown-menu>
        </ui-dropdown>
    </div>
</template>
<script>
export default {
    data () {
        return {
            visible: false,
            tops: ['top-start', 'top', 'top-end'],
            bottom: ['bottom-start', 'bottom', 'bottom-end'],
        }
    }
}
</script>
<style lang="less">
.demo-link {
    display: inline-block;
    padding: 8px 12px;
    color: #2196f3;
    cursor: pointer;
}
</style>

