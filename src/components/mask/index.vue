<template>
    <transition :name="animate">
        <div class="ui-mask"
             v-if="visible"
             :style="{ zIndex: cssZIndex }"
             :class="{ transparent }"
             @click="clickMask">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
import zIndex from './zIndex'

export default {
    name: 'uiMask',
    props: {
        visible: Boolean,
        transparent: Boolean,
        animate: {
            type: String,
            default: 'fade-in'
        },
        zIndex: Number,
        hideOnClick: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            inBody: false
        }
    },
    computed: {
        cssZIndex() {
            return this.zIndex || zIndex()
        }
    },
    watch: {
        visible(val) {
            this.appendToBody()
        }
    },
    methods: {
        appendToBody() {
            if(this.visible && !this.inBody) {
                document.body.appendChild(this.$el)
                this.inBody = true
            }
        },
        clickMask({ target }) {
            if(this.hideOnClick && target === this.$el) this.$emit('update:visible', false)
        }
    },
    mounted() {
        this.appendToBody()
    },
    destroyed() {
        if(this.inBody) {
            document.body.removeChild(this.$el)
        }
    }
}
</script>
<style lang="less">
@import "~_/styles/import";

.ui-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: @mask-background;

    &.transparent {
        background: transparent;
    }
}

</style>
