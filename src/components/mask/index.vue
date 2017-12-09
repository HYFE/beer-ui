<template>
    <transition :name="animate">
        <div class="ui-mask"
             v-if="visible"
             :style="{ zIndex: cssIndex }"
             :class="{ transparent }"
             @click="clickMask">
        </div>
    </transition>
</template>
<script>
import zIndex from '../../mixins/zIndex'

export default {
    name: 'uiMask',
    mixins: [zIndex],
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
