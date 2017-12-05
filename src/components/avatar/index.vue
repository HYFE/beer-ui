<template>
    <span class="ui-avatar"
          :class="[{ circle, reverse }, size]">
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
}
</script>
<style lang="less">
@import '../../styles/import';

.size(@step) {
    @val: @avatar-size-start + @avatar-size-step * @step;
    width: @val;
    height: @val;
    line-height: @val;
    font-size: @val / 2;
}

.ui-avatar {
    display: inline-block;
    text-align: center;
    overflow: hidden;
    color: @avatar-color;
    background: @avatar-background;
    border-radius: @avatar-rect-radius;

    &.reverse {
        color: @avatar-color-reverse;
        background: @avatar-background-reverse;
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
        .size(0);
    }
    &.sm {
        .size(1);
    }
    &.md {
        .size(2);
    }
    &.lg {
        .size(3);
    }
    &.xl {
        .size(4);
    }
}
</style>
