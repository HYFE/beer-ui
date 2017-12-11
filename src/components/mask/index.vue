<template>
    <transition :name="animate">
        <div class="ui-mask"
             v-if="visible"
             :class="{ transparent }"
             @click="clickMask">
        </div>
    </transition>
</template>
<script>
export default {
    name: 'uiMask',
    props: {
        visible: Boolean,
        animate: {
            type: String,
            default: 'fade-in'
        },
        transparent: Boolean
    },
    computed: {
        cssIndex() {
            return this.zIndex || this.nextIndex()
        }
    },
    methods: {
        clickMask() {
            this.$emit('click')
        }
    },
}
</script>
<style lang="less">
@import "../../styles/import";

.ui-mask {
    position: absolute;
    z-index: 2000;
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
