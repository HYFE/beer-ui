<template>
    <span class="ui-chip"
         :class="size"
         @click="onClick">
        <div class="ui-chip-inner">
            <div class="ui-chip-before"
                 v-if="$slots.before">
                <slot name="before"></slot>
            </div>
            <slot></slot>
            <a class="ui-chip-close"
               v-if="closeable"
               @click.stop="onClose"
               role="button">
                &times;
            </a>
        </div>
    </span>
</template>
<script>
export default {
    name: 'uiChip',
    props: {
        closeable: Boolean,
        size: {
            type: String,
            default: 'md'
        }
    },
    methods: {
        onClose (e) {
            this.$emit('close', e)
        },
        onClick (e) {
            this.$emit('click', e)
        }
    }
}
</script>
<style lang="less">
@import '../../styles/import';

.size(@step) {
    @val: @chip-size-start + @chip-size-step * @step;
    line-height: @val;
    border-radius: @val / 2;

    .ui-chip-before {
        width: @val;
        height: @val;
    }
    .ui-chip-close {
        width: @val * .6;
        height: @val * .6;
        line-height: @val * .6;
    }
}

.ui-chip {
    display: inline-block;
    padding: 0 12px;
    vertical-align: middle;
    color: @chip-color;
    background: @chip-background;
    cursor: pointer;
    &:hover {
        background: @chip-background-hover;
        .ui-chip-close {
            background: rgba(0, 0, 0, .3);
            color: #fff;
        }
    }
    &-inner {
        display: flex;
        align-items: center;
    }
    &-before {
        display: inline-block;
        margin-left: -12px;
        margin-right: 4px;
        border-radius: 50%;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            vertical-align: top;
        }
    }
    &-close {
        margin-left: 4px;
        margin-right: -8px;
        font-size: 16px;
        text-align: center;
        border-radius: 50%;
    }

    &.lg {
        font-size: @chip-lg-fs;
        .size(2);
    }

    &.md {
        font-size: @chip-md-fs;
        .size(1);
    }

    &.sm {
        font-size: @chip-sm-fs;
        .size(0);
    }
}
</style>
