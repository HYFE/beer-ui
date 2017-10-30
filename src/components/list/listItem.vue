<template>
    <div class="ui-item"
         :class="{ bordered }">
        <div v-if="!to || !isAction"
             class="ui-item-inner"
             :style="itemStyle"
             :class="itemClass"
             @click="onClick">
            <slot :to="to"></slot>
        </div>
        <router-link v-if="!!to"
                     class="ui-item-inner"
                     exact-active-class="active"
                     :class="itemClass"
                     :style="itemStyle"
                     :to="to"
                     @click="onClick">
            <slot :to="to"></slot>
        </router-link>
        <div v-if="children"
             class="ui-item-children"
             v-show="expanded">
            <ui-list-item v-for="item in children"
                          :key="item[nodeKey]"
                          :to="item.to"
                          :children="item.children"
                          :depth="depth + 1">
                <slot :to="item.to" :value="item"></slot>
            </ui-list-item>
        </div>
    </div>
</template>
<script>
export default {
    name: 'uiListItem',
    props: {
        to: [Object, String],
        children: Array,
        depth: {
            type: Number,
            default: 0
        },
        isAction: {
            type: Boolean,
            default: true
        },
        disabled: Boolean
    },
    data () {
        return {
            expanded: true,
        }
    },
    computed: {
        bordered () {
            return this.$parent.bordered
        },
        exact () {
            return this.$parent.exact
        },
        nodeKey () {
            return this.$parent.nodeKey
        },
        itemStyle () {
            return this.depth > 0 ? { paddingLeft: `${15 * this.depth + 20}px` } : null
        },
        itemClass () {
            return {
                'non-action': !this.isAction,
                disabled: this.disabled
            }
        }
    },
    methods: {
        onClick (e) {
            if (this.children) {
                this.expanded = !this.expanded
            }
            this.$emit('click', e)
        }
    }
}
</script>
<style lang="less">
@import '~_/styles/variables';

.ui-item {
    &.bordered {
        border-top: @border-base;
        &:first-child {
            border-top: none;
        }
    }
    &-inner {
        padding: @list-item-padding;
        display: flex;
        cursor: pointer;
        color: @text-base-color;
        text-decoration: none;
        border-right: @list-item-active-border solid transparent;
        &.active {
            color: @theme-color;
            border-right-color: @theme-color;
            background: @lighter-color;
        }
        &:not(.non-action):hover {
            background: @lighter-color;
        }
        &.non-action {
            cursor: default;
        }
    }
}
</style>
