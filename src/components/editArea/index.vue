<template>
    <div class="ui-edit-area">
        <input type="text"
               v-if="!isTextarea"
               :value.trim="value"
               :readonly="readonly"
               :maxlength="maxlength"
               :placeholder="placeholder"
               :spellcheck="false"
               class="ui-edit-area-input"
               :class="{'ui-edit-area-editable': !readonly}"
               :style="inputStyle"
               @focus="e => $emit('focus', e)"
               @blur="e => $emit('blur', e)"
               @input="e => !readonly?$emit('input', e.target.value):''"
               @change="e => !readonly?$emit('change', e.target.value):''"
               @keyup.enter="e => e.target.blur()">
        <textarea-component v-else
                            :value="value"
                            :readonly="readonly"
                            :maxlength="maxlength"
                            :placeholder="placeholder"
                            :class="{'ui-edit-area-editable': !readonly}"
                            :style="inputStyle"
                            :wrapable="wrapable"
                            @focus="e => $emit('focus', e)"
                            @blur="e => $emit('blur', e)"
                            @input="value => $emit('input', value)"
                            @change="value => $emit('change', value)"></textarea-component>
    </div>
</template>
<script>
import textareaComponent from './textarea'

export default {
    name: 'uiEditArea',
    components: { textareaComponent },
    props: {
        value: String,
        isTextarea: {
            type: Boolean,
            default: false
        },
        inputStyle: Object,
        maxlength: Number,
        readonly: {
            type: Boolean,
            default: false
        },
        placeholder: String,
        wrapable: Boolean
    }
}
</script>
<style lang="less">
@import '../../styles/variables';

.ui-edit-area {
    display: flex;
    align-items: center;
    width: 100%;
    &-input {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: no-wrap;
    }
    &-input,
    &-textarea {
        border: 0;
        padding: 4px;
        width: 100%;
        background-color: transparent;
        font-size: 16px;
        line-height: 24px;
        min-height: 24px;
    }
    &-editable {
        border: 2px solid transparent;
        border-radius: 3px;
        &:hover {
            background-color: @border-color;
        }
        &:focus {
            background-color: #fff;
            border-color: @theme-color;
        }
    }
}
</style>

