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
               @click.stop="onClose">
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

.size(@val) {
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
    line-height: 30px;
    vertical-align: middle;
    border-radius: 15px;
    background: @gray-color;
    cursor: pointer;
    &:hover {
        background: @gray-dark-color;
        .ui-chip-close {
            background: #999;
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
        font-size: 14px;
        .size(36px);
    }

    &.md {
        font-size: 13px;
        .size(30px);
    }

    &.sm {
        font-size: 12px;
        .size(24px);
    }
}
</style>
