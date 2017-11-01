<template>
    <div class="ui-item"
         :class="{ bordered }">
        <div v-if="!to || !isAction"
             class="ui-item-inner"
             :style="itemStyle"
             :class="itemClass"
             @click="onClick">
            <div class="ui-item-content">
                <slot :to="to"></slot>
            </div>
            <div class="ui-item-right"
                 v-if="children">
                <i class="icon-angle-up ui-item-arrow"></i>
            </div>
        </div>
        <router-link v-if="!!to"
                     class="ui-item-inner"
                     exact-active-class="active"
                     :class="itemClass"
                     :style="itemStyle"
                     :to="to"
                     @click="onClick">
            <div class="ui-item-content">
                <slot :to="to"></slot>
            </div>
            <div class="ui-item-right"
                 v-if="children">
                <i class="icon-angle-up ui-item-arrow"></i>
            </div>
        </router-link>
        <expand-transition>
            <div v-if="children"
                class="ui-item-children"
                v-show="expanded">
                <ui-listitem v-for="item in children"
                            :key="item[nodeKey]"
                            :to="item.to"
                            :children="item.children"
                            :depth="depth + 1">
                    <slot :to="item.to"
                        :value="item"></slot>
                </ui-listitem>
            </div>
        </expand-transition>
    </div>
</template>
<script>
export default {
    name: 'uiListitem',
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
        arrowPlacement () {
            return this.$parent.arrowPlacement
        },
        itemStyle () {
            return this.depth > 0 ? { paddingLeft: `${15 * this.depth + 20}px` } : null
        },
        itemClass () {
            return {
                'non-action': !this.isAction && !this.children,
                disabled: this.disabled,
                expanded: this.children && this.expanded
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
@import '~_/styles/import';

.ui-item {
    &.bordered {
        border-top: @border-base;
        &:first-child {
            border-top: none;
        }
    }
    &-inner {
        position: relative;
        padding: @list-item-padding;
        display: flex;
        align-items: center;
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
            .ui-item-arrow {
                opacity: 1;
            }
        }
        &.non-action {
            cursor: default;
        }
        &.expanded {
            .ui-item-arrow {
                transform: rotate(180deg);
            }
        }
    }
    &-content {
        flex: 1;
    }
    &-right {
        display: flex;
        align-items: center;
        align-self: flex-end;
    }
    &-arrow {
        margin-right: -15px;
        font-size: 18px;
        font-weight: 600;
        opacity: 0.7;
        transition: transform 0.3s ease-in-out;
    }
}
</style>
