<template>
    <li class="ui-dropdown-item"
        :class="{ disabled }"
        @click="onClick"><slot></slot></li>
</template>
<script>
export default {
    name: 'uiDropdownItem',
    props: {
        disabled: Boolean,
        hideOnClick: {  // 点击时关闭菜单
            type: Boolean,
            default: true
        }
    },
    methods: {
        onClick(e) {
            this.$emit('click', e)
            if(this.hideOnClick) {
                this.$parent.hide()
            }
        }
    }
}
</script>
<style lang="less">
@import '../../styles/import';

.ui-dropdown-item {
    padding: 8px 16px;
    color: rgba(0, 0, 0, .7);
    cursor: pointer;
    &:not(.disabled):hover {
        background: @lighter-color
    }
    &.disabled {
        cursor: default;
        color: rgba(0, 0, 0, .25);
    }
}
</style>
