<template>
    <div class="ui-list"
        :class="{ thin }">
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
        },
        alignPadding: {
            type: Number,
            default: 20
        },
        thin: Boolean
    }
}
</script>
<style lang="less">
@import '../../styles/import';

.ui-list {
    width: 100%;
    padding-top: @list-divider-spacing;
    padding-bottom: @list-divider-spacing;
    overflow: hidden;
    &.thin {
        .ui-item-inner,
        .ui-sub-header {
            padding: @list-item-padding-thin
        }
    }
    .ui-divider {
        margin-top: @list-divider-spacing;
        margin-bottom: @list-divider-spacing;
    }
}
</style>
