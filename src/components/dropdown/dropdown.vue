<template>
    <div class="ui-dropdown"
         :class="{ disabled }">
        <slot></slot>
        <slot name="menu"></slot>
    </div>
</template>
<script>
export default {
    name: 'uiDropdown',
    props: {
        value: Boolean,
        trigger: {
            type: String,
            default: 'click'
        },
        placement: {
            type: String,
            default: 'bottom-start'
        },
        arrow: Boolean,
        disabled: Boolean
    },
    data () {
        return {
            visible: this.value
        }
    },
    watch: {
        value (val) {
            this.visible = val
        },
        visible (val) {
            if (val !== this.value) {
                this.$emit('input', val)
                this.$emit('change', val)
            }
        },
    },
    methods: {
        toggle () {
            if(this.disabled) return
            this.visible = !this.visible
        },
        hide () {
            this.visible = false
        },
    },
}
</script>
<style lang="less">
@import '../../styles/import';
.ui-dropdown {
    display: inline-block;
    &.disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
}
</style>
