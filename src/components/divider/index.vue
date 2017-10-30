<template>
    <div class="ui-divider"
         :class="{ isLabel: label }">
        <label v-if="label"
               class="ui-divider-label">{{label}}</label>
    </div>
</template>
<script>
export default {
    name: 'uiDivider',
    props: {
        label: String
    },
}
</script>
<style lang="less">
@import '~_/styles/variables';

.ui-divider {
    position: relative;
    margin: @divider-spacing 0;
    width: 100%;
    height: 1px;
    background-color: @divider-color;
    &.isLabel {
        margin: 20px 0;
    }
    &-label {
        position: absolute;
        top: 0;
        left: 50%;
        padding: 0 10px;
        color: @text-light-color;
        font-size: 14px;
        background: #fff;
        transform: translate(-50%, -50%);
    }
}
</style>
