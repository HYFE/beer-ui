<template>
    <div class="ui-divider"
         :class="{ isLabel: label }"
         role="separator">
        <label v-if="label"
               class="ui-divider-label"
               :class="align">{{label}}</label>
    </div>
</template>
<script>
export default {
    name: 'uiDivider',
    props: {
        label: String,
        align: {
            type: String,
            default: 'center'
        }
    },
}
</script>
<style lang="less">
@import '../../styles/import';

.ui-divider {
    position: relative;
    margin: 0;
    width: 100%;
    height: 1px;
    background-color: @divider-color;
    &.isLabel {
        margin: 20px 0;
    }
    &-label {
        position: absolute;
        top: -12px;
        padding: 0 10px;
        line-height: 24px;
        color: @text-light-color;
        font-size: 14px;
        background: #fff;

        &.center {
            left: 50%;
            transform: translateX(-50%);
        }
        &.left {
            left: 5%;
        }
        &.right {
            right: 5%;
        }
    }
}
</style>
