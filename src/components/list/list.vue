<template>
    <div class="ui-list">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'uiList',
    props: {
        bordered: Boolean,
        exact: Boolean,
        nodeKey: {
            type: String,
            default: 'id'
        },
        arrowPlacement: {
            type: String,
            default: 'right'
        }
    }
}
</script>
<style lang="less">
@import '~_/styles/variables';

.ui-list {
    width: 100%;
    overflow: hidden;
}
</style>
