<template>
    <div class="ui-sub-header"><slot></slot></div>
</template>
<script>
export default {
    name: 'uiSubHeader',
}
</script>
<style lang="less">
@import '../../styles/import';

.ui-sub-header {
    display: flex;
    align-items: center;
    padding: @list-item-padding;
    color: @text-light-color;
}
</style>
