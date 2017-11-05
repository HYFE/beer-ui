<template>
    <ui-mask :visible.sync="popVisble"
             transparent>
        <div class="ui-popover"
             :class="popClass"
             ref="pop">
            <div class="ui-popover-panel">
                <div class="ui-popover-arrow"></div>
                <div class="ui-popover-content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </ui-mask>
</template>
<script>
import uiMask from '../mask'
import Popper from '_/libs/popper'

export default {
    name: 'uiPopover',
    components: {
        uiMask
    },
    props: {
        visible: Boolean,
        for: {
            type: [HTMLElement, String],
            required: true
        },
        trigger: {
            type: String,
            default: 'click'
        },
        placement: {
            type: String,
            default: 'bottom'
        },
        eventsEnabled: {
            type: Boolean,
            default: true
        },
        removeOnDestroy: {
            type: Boolean,
            default: true
        },
        modifiers: Object,
        popClass: [String, Array, Object],
    },
    data() {
        return {
            popper: null,
            reference: null,
            domEvents: []
        }
    },
    computed: {
        popVisble: {
            get() {
                return this.visible
            },
            set(val) {
                this.$emit('update:visible', val)
            }
        }
    },
    watch: {
        visible(val) {
            val ? this.createPop() : this.hidePop()
        }
    },
    methods: {
        showPop({ target }) {
            const reference = target.closest(this.for)
            if (!reference) return
            this.reference = reference
            this.popVisble = true
        },
        createPop() {
            this.$nextTick(() => {
                this.popper = new Popper(this.reference, this.$refs.pop, {
                    placement: this.placement,
                    eventsEnabled: this.eventsEnabled,
                    removeOnDestroy: this.removeOnDestroy,
                    modifiers: this.modifiers
                })
            })
        },
        hidePop() {
            this.popper.destroy()
            this.popper = null
        },
        bind() {
            document.addEventListener(this.trigger, this.showPop)
        },
        unBind() {
            document.removeEventListener(this.trigger, this.showPop)
        }
    },
    created() {
        console.log('created')
        this.bind()
    },
    destroyed() {
        this.unBind()
    }
}
</script>
<style lang="less">
@import "~_/styles/import";

.ui-popover {
    min-width: @popover-min-width;

    &-panel {
        position: relative;
        filter: drop-shadow(@popover-shadow)
    }
    &-content {
        background: #fff;
        border-radius: @popover-radius;
    }
    &-arrow {
        margin: auto;
        width: 0;
        height: 0;
        border: 7px solid transparent;
        border-bottom-color: #fff;
    }
}

</style>
