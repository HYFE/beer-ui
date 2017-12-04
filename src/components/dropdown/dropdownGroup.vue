<template>
    <li class="ui-dropdown-group"><slot></slot></li>
</template>
<script>
export default {
    name: 'uiDropdownGroup'
}
</script>
<style lang="less">
@import '../../styles/import';

.ui-dropdown-group {
    padding: @dropdown-padding;
    padding-left: @dropdown-padding-x / 2;
    color: @dropdown-group-color;
    font-size: 12px;
}
</style>
