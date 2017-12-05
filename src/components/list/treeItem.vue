<template>
    <div class="ui-treeitem">
        <div class="ui-item ui-treeitem-inner"
             :style="itemStyle"
             :class="itemClass"
             @click="expand">
            <div class="ui-treeitem-left"
                 v-if="hasChild && arrowPlacement ==='left'">
                <i class="icon-up-open ui-treeitem-arrow"
                   @click.stop="expanded = !expanded"></i>
            </div>
            <div class="ui-treeitem-content">
                <slot :node="tree"></slot>
            </div>
            <div class="ui-treeitem-right"
                 v-if="hasChild && arrowPlacement ==='right'">
                <i class="icon-up-open ui-treeitem-arrow"
                   @click.stop="expanded = !expanded"></i>
            </div>
        </div>
        <expand-transition>
            <div v-if="hasChild"
                 class="ui-treeitem-children"
                 v-show="expanded">
                <ui-treeitem v-for="item in tree.children"
                             :key="item[nodeKey]"
                             :tree="item"
                             :nodeKey="nodeKey"
                             :depth="depth + 1"
                             :isHighlight="isHighlight"
                             :arrowPlacement="arrowPlacement"
                             :alignPadding="alignPadding"
                             :expanedByNode="expanedByNode"
                             @nodeClick="onClick">
                    <template slot-scope="{ node }">
                        <slot :node="node"></slot>
                    </template>
                </ui-treeitem>
            </div>
        </expand-transition>
    </div>
</template>
<script>
import expandTransition from '../expandTransition'

export default {
    name: 'uiTreeitem',
    components: {
        expandTransition
    },
    props: {
        depth: {
            type: Number,
            default: 0
        },
        nodeKey: {
            type: String,
            default: 'id'
        },
        tree: Object,
        isHighlight: Function,
        expanedByNode: {
            type: Boolean,
            default: true
        },
        arrowPlacement: {
            type: String,
            default: 'right'
        },
        alignPadding: {
            type: Number,
            default: 20
        },
    },
    data () {
        return {
            expanded: true,
        }
    },
    computed: {
        parent () {
            return this.$parent.$options.name === 'uiList' ? this.$parent : this.$parent.$parent
        },
        itemStyle () {
            return this.depth > 0 ? { paddingLeft: `${this.alignPadding * this.depth + 20}px` } : null
        },
        itemClass () {
            return {
                expanded: this.hasChild && this.expanded,
                active: this.isHighlight ? this.isHighlight(this.tree) : null
            }
        },
        hasChild () {
            return this.tree && this.tree.children && this.tree.children.length
        },
    },
    methods: {
        expand (e) {
            if (this.expanedByNode && this.hasChild) {
                this.expanded = !this.expanded
            }
            this.onClick(e, this.tree)
        },
        onClick (e, item) {
            this.$emit('nodeClick', e, item)
        }
    },
}
</script>
<style lang="less">
@import '../../styles/import';

.ui-treeitem {
    &-inner {
        &.expanded {
            .ui-treeitem-arrow {
                transform: rotate(180deg);
            }
        }
    }
    &-content {
        flex: 1;
    }
    &-left,
    &-right {
        display: flex;
        align-items: center;
    }
    &-left {
        .ui-treeitem-arrow {
            margin-left: -15px;
        }
    }
    &-right {
        align-self: flex-end;
        .ui-treeitem-arrow {
            margin-right: -15px;
        }
    }
    &-arrow {
        font-size: 18px;
        opacity: 0.7;
        transition: transform 0.3s ease-in-out;
    }
}
</style>
