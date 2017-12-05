<template>
    <div class="ui-tabs"
         :class="{ horizontal: layout === 'x' }">
        <slot name="tabbar"></slot>
        <div class="ui-tabs-container" role="tablist">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'uiTabs',
    props: {
        value: String,
        layout: {
            type: String,
            default: 'y'
        }
    },
    data () {
        return {
            childs: {},
            animate: ''
        }
    },
    watch: {
        value (val, oldVal) {
            if (!oldVal) return
            this.animate = this.childs[val] > this.childs[oldVal]
                ? 'anim-move-right'
                : 'anim-move-left'
        }
    },
    methods: {
        push (item) {
            this.childs = {
                ...this.childs,
                [item]: Object.keys(this.childs).length
            }
        },
    },
}
</script>
<style lang="less">
@import '../../styles/import';

.ui-tabs {
    overflow: hidden;
    &-container {
        position: relative;
        display: flex;
    }
    &.horizontal {
        display: flex;
        flex-direction: row;
        .ui-tabs-container {
            flex: 1;
            overflow: hidden;
        }
        .ui-tabbar {
            margin-bottom: 0;
            border-bottom: none;
            margin-right: @tab-active-border-weight * -1;
            border-right: @border-base;
        }
        .ui-tabbar-nav {
            flex-direction: column;
        }
        .ui-tab {
            border-bottom: none;
            border-right: @tab-active-border-weight solid transparent;
            &.active {
                border-right-color: @theme-color;
            }
        }
    }
}
</style>

