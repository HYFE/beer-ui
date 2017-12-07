<template>
    <div class="ui-treeitem"
         role="treeitem">
        <div class="ui-item ui-treeitem-inner"
             :style="itemStyle"
             :class="itemClass"
             @click="clickNode">
            <div class="ui-treeitem-left"
                 v-if="hasChild && arrowPlacement ==='left'">
                <i class="icon-up-open ui-treeitem-arrow"
                   role="button"
                   @click.stop="expand"></i>
            </div>
            <div class="ui-treeitem-content">
                <slot :node="tree"></slot>
            </div>
            <div class="ui-treeitem-right"
                 v-if="hasChild && arrowPlacement ==='right'">
                <i class="icon-up-open ui-treeitem-arrow"
                   role="button"
                   @click.stop="expand"></i>
            </div>
        </div>
        <expand-transition>
            <div v-if="hasChild"
                 class="ui-treeitem-children"
                 :aria-expanded="expanded"
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
                             :accordion="accordion"
                             :expandAll="expandAll"
                             :expandedKeys="expandedKeys"
                             @nodeClick="onClick"
                             @expandParent="expandParent"
                             @closeSiblings="closeSiblings"
                             ref="childs">
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
        accordion: Boolean,  // 手风琴
        expandAll: {        // 展开全部
            type: Boolean,
            default: true
        },
        expandedKeys: Array, // 展开的节点
    },
    data () {
        return {
            expanded: this.expandAll
        }
    },
    watch: {
        expandedKeys (val = []) {
            this.expandByKeys()
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
                active: this.isHighlight && this.isHighlight(this.tree)
            }
        },
        hasChild () {
            return this.tree && this.tree.children && this.tree.children.length
        },
        currentKey () {
            return this.tree[this.nodeKey]
        },
    },
    methods: {
        clickNode (e) {
            if (this.expanedByNode && this.hasChild) {
                this.expand()
            }
            this.onClick(e, this.tree)
        },
        handleAccordion() {
            if (this.expanded && this.accordion && this.depth !== 0) {
                this.$emit('expandParent')
                this.$emit('closeSiblings', this.currentKey)
            }
        },
        expand (e) {
            this.expanded = !this.expanded
            this.handleAccordion()
        },
        expandParent (key) {
            this.expanded = true
            if (this.depth !== 0) {
                this.$emit('expandParent')
            }
        },
        closeSiblings (key) {
            this.$refs.childs.forEach(item => {
                if(item.currentKey !== key) {
                    item.expanded = false
                }
            })
        },
        onClick (e, item) {
            this.$emit('nodeClick', e, item)
        },
        expandByKeys() {
            if(this.expandedKeys.some(key => key === this.currentKey)) {
                this.expanded = true
                this.handleAccordion()
            }
        }
    },
    created() {
        this.expandByKeys()
    }
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
