<template>
    <span class="ui-avatar"
          :class="[{ circle, reverse }, size]"
          @click="onClick">
        <slot>
            <img :src="src" v-if="src">
            <i :class="icon" v-if="icon"></i>
        </slot>
    </span>
</template>
<script>
export default {
    name: 'uiAvatar',
    props: {
        circle: Boolean,
        size: {
            type: String,
            default: 'md'
        },
        src: String,
        icon: String,
        reverse: Boolean
    },
    methods: {
        onClick (e) {
            this.$emit('click', e)
        }
    }
}
</script>
<style lang="less">
@import '../../styles/import';

.size(@val) {
    width: @val;
    height: @val;
    line-height: @val;
    font-size: @val / 2;
}

.ui-avatar {
    display: inline-block;
    text-align: center;
    overflow: hidden;
    color: @text-lightest-color;
    background: @gray-color;
    border-radius: @avatar-rect-radius;

    &.reverse {
        color: #fff;
        background: @text-lightest-color;
    }

    &.circle {
        border-radius: 50%;
    }
    img {
        width: 100%;
        height: 100%;
        vertical-align: top;
    }

    &.xs {
        .size(24px);
    }
    &.sm {
        .size(30px);
    }
    &.md {
        .size(36px);
    }
    &.lg {
        .size(42px);
    }
    &.xl {
        .size(48px);
    }
}
</style>
