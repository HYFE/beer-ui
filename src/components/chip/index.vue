<template>
    <div class="ui-chip"
         @click="onClick">
        <div class="ui-chip-inner">
            <div class="ui-chip-before"
                 v-if="$slots.before">
                <slot name="before"></slot>
            </div>
            <slot></slot>
            <a class="ui-chip-close"
               v-if="closeable"
               @click="onClose">
                &times;
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'uiChip',
    props: {
        closeable: Boolean
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

.ui-chip {
    display: inline-block;
    padding: 0 12px;
    line-height: 30px;
    font-size: 12px;
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
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
    &-close {
        margin-left: 4px;
        margin-right: -8px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-align: center;
        border-radius: 50%;
    }
}
</style>
