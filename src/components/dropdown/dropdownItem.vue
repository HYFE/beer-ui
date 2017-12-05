<template>
    <li class="ui-dropdown-item"
        role="menuitem"
        :aria-disabled="disabled"
        :aria-selected="selected"
        :class="{ disabled, selected }"
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
        },
        value: [String, Number]
    },
    computed: {
        selected() {
            return this.value !== undefined && this.$parent.value === this.value
        }
    },
    methods: {
        onClick(e) {
            if(this.value !== undefined) {
                this.$parent.change(this.value)
            }
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
    padding: @dropdown-padding;
    color: @dropdown-color;
    cursor: pointer;
    &:not(.disabled):hover {
        background: @dropdown-hover-background
    }
    &.disabled {
        cursor: default;
        color: @dropdown-disabled-color;
    }
    &.selected {
        color: #fff;
        background: @dropdown-selected-background;
        &:hover {
            background: darken(@dropdown-selected-background, 5%);
        }
    }
}
</style>
