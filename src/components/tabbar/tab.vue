<template>
    <div class="ui-tab"
         role="tab"
         :aria-selected="active"
         :aria-disabled="disabled"
         :class="{ active, disabled }"
         @click="onClick">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'uiTab',
    props: {
        name: {
            type: String,
            required: true
        },
        disabled: Boolean
    },
    methods: {
        onClick () {
            if (this.disabled) return
            this.$parent.toggleTab(this.name)
        }
    },
    computed: {
        active () {
            return !this.disabled ? this.$parent.value === this.name : false
        }
    }
}
</script>
<style lang="less">
@import '../../styles/import';

.ui-tab {
    padding: 8px 16px;
    text-align: center;
    border-bottom: @tab-active-border-weight solid transparent;
    cursor: pointer;
    &:hover,
    &.active {
        color: @theme-color;
    }
    &.active {
        border-bottom-color: @theme-color;
    }
    &.disabled {
        color: @text-lightest-color;
        cursor: default;
    }
}
</style>
