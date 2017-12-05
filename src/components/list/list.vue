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
        .ui-item,
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
