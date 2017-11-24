<template>
    <div class="ui-item"
         :class="{ bordered }">
        <div v-if="!route || !isAction"
             class="ui-item-inner"
             :style="itemStyle"
             :class="itemClass"
             @click="expand">
            <div class="ui-item-content">
                <slot :node="tree"></slot>
            </div>
            <slot name="right"></slot>
            <div class="ui-item-right"
                 v-if="hasChild">
                <i class="icon-up-open ui-item-arrow"
                    @click.stop="expanded = !expanded"></i>
            </div>
        </div>
        <router-link v-if="!!route"
                     class="ui-item-inner"
                     exact-active-class="active"
                     :exact="exact"
                     :class="itemClass"
                     :style="itemStyle"
                     :to="route"
                     @click.native="expand">
            <div class="ui-item-content">
                <slot :node="tree"></slot>
            </div>
            <slot name="right"></slot>
            <div class="ui-item-right"
                 v-if="hasChild">
                <i class="icon-up-open ui-item-arrow"
                    @click.stop="expanded = !expanded"></i>
            </div>
        </router-link>
        <expand-transition>
            <div v-if="hasChild"
                 class="ui-item-children"
                 v-show="expanded">
                <ui-listitem v-for="item in tree.children"
                             :key="item[nodeKey]"
                             :to="item.to"
                             :tree="item"
                             :depth="depth + 1"
                             :router="router"
                             :expanedByNode="expanedByNode"
                             @click="onClick">
                    <template slot-scope="{ node }">
                        <slot :node="node"></slot>
                    </template>
                </ui-listitem>
            </div>
        </expand-transition>
    </div>
</template>
<script>
import expandTransition from '../expandTransition'

export default {
    name: 'uiListitem',
    components: {
        expandTransition
    },
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
        disabled: Boolean,
        tree: Object,
        router: Function,
        expanedByNode: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            expanded: true,
        }
    },
    computed: {
        parent() {
            return this.$parent.$options.name === 'uiList' ? this.$parent : this.$parent.$parent
        },
        bordered () {
            return this.parent.bordered
        },
        exact () {
            return this.parent.exact
        },
        nodeKey () {
            return this.parent.nodeKey
        },
        arrowPlacement () {
            return this.parent.arrowPlacement
        },
        alignPadding () {
            return this.parent.alignPadding
        },
        itemStyle () {
            return this.depth > 0 ? { paddingLeft: `${this.alignPadding * this.depth + 20}px` } : null
        },
        itemClass () {
            return {
                'non-action': !this.isAction && !this.hasChild,
                disabled: this.disabled,
                expanded: this.hasChild && this.expanded
            }
        },
        hasChild () {
            return this.tree && this.tree.children && this.tree.children.length
        },
        route () {
            return this.router ? this.router(this.tree) : this.to
        }
    },
    methods: {
        expand(e) {
            if (this.expanedByNode && this.hasChild) {
                this.expanded = !this.expanded
            }
            this.onClick(e, this.tree)
        },
        onClick (e, item) {
            this.$emit('click', e, item)
        }
    },
}
</script>
<style lang="less">
@import '../../styles/import';

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
        &:after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: @list-item-active-border;
            background: @theme-color;
            opacity: 0;
            transition: transform .2s ease-in-out;
            transform: scaleY(0);
        }
        &.active {
            color: @theme-color;
            background: @lighter-color;
            &:after {
                opacity: 1;
                transform: scaleY(1);
            }
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
        opacity: 0.7;
        transition: transform 0.3s ease-in-out;
    }
}
</style>
