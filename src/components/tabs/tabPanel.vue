<template>
    <transition :name="animate">
        <div class="ui-tab-panel"
             role="tabpanel"
             v-show="name === current">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'uiTabPanel',
    props: {
        name: {
            type: String,
            required: true
        },
    },
    computed: {
        animate () {
            return this.$parent.animate
        },
        current () {
            return this.$parent.value
        },
    },
    created () {
        this.$parent.push(this.name)
    }
}
</script>
<style lang="less">
@import '../../styles/import';

.ui-tab-panel {
    flex-shrink: 0;
    width: 100%;
    overflow-y: auto;
}
</style>
