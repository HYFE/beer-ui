<template>
    <div class="ui-tabbar"
         :class="tabsClass">
        <nav class="ui-tabbar-nav">
            <slot></slot>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'uiTabbar',
    props: {
        value: String,
        align: {
            type: String,
            default: 'left'
        },
        fill: Boolean
    },
    methods: {
        toggleTab(name) {
            this.$emit('input', name)
            this.$emit('change', name)
        }
    },
    computed: {
        tabsClass () {
            return this.fill ? 'ui-tabbar-fill' : `ui-tabbar-${this.align}`
        }
    }
}
</script>
<style lang="less">
@import '../../styles/import';
.ui-tabbar {
    display: flex;
    margin-bottom: @tab-active-border-weight * -1;
    border-bottom: @border-base;
    overflow: hidden;
    &-nav {
        display: flex;
    }
    &-left {
        justify-content: flex-start;
    }
    &-center {
        justify-content: center
    }
    &-right {
        justify-content: flex-end
    }
    &-fill {
        .ui-tabbar-nav,
        .ui-tab {
            flex: 1;
        }
    }
}
</style>
