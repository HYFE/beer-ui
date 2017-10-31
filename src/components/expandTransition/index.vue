<template>
    <transition name="ui-expand"
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                @after-enter="onAfterEnter"
                @before-leave="onBforeLeave"
                @leave="onLeave"
                @after-leave="onAfterLeave">
        <slot></slot>
    </transition>
</template>
<script>
export default {
    name: 'expandTransition',
    data() {
        return {
            paddingTop: '',
            paddingBottom: '',
            overflow: ''
        }
    },
    methods: {
        saveStyle(el) {
            const { paddingTop, paddingBottom } = el.style
            this.paddingTop = paddingTop
            this.paddingBottom = paddingBottom
        },
        resetStyle(el) {
            el.style.paddingTop = this.paddingTop
            el.style.paddingBottom = this.paddingBottom
        },
        close(el) {
            el.style.height = '0'
            el.style.paddingTop = 0
            el.style.paddingBottom = 0
        },
        onBeforeEnter(el) {
            this.saveStyle(el)
            this.close(el)
        },
        onEnter(el) {
            this.overflow = el.style.overflow
            el.style.height = `${el.scrollHeight}px`
            this.resetStyle(el)
            el.style.overflow = 'hidden'
        },
        onAfterEnter(el) {
            el.style.height = ''
            el.style.overflow = this.overflow
            this.resetStyle(el)
        },
        onBforeLeave(el) {
            this.saveStyle(el)
            el.style.height = `${el.scrollHeight}px`
            el.style.overflow = 'hidden'
        },
        onLeave(el) {
            if(el.scrollHeight !== 0) {
                this.close(el)
            }
        },
        onAfterLeave(el) {
            el.style.height = ''
            el.style.overflow = this.overflow
            this.resetStyle(el)
        }
    }
}
</script>
<style lang="less">
@import '~_/styles/import';

.ui-expand-enter-active,
.ui-expand-leave-active {
    transition: height .3s ease-in-out, padding .3s ease-in-out;
    backface-visibility: hidden;
    will-change: height, padding;
}
</style>
