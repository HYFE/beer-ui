<template>
    <div class="ui-edit-area">
        <input type="text"
               v-if="!isTextarea"
               :value="value"
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
               @change="e => !readonly?$emit('change', e.target.value):''">
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
        <i class="icon-pencil ui-edit-area-icon"></i>
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
        placeholder: '',
        wrapable: {
            type: Boolean,
            default: true
        }
    }
}
</script>
<style lang="less">
@import '../../styles/variables';

.ui-edit-area {
    display: flex;
    border-radius: 4px;
    align-items: center;
    &-input {
        border: 0;
        padding: 4px;
        width: 100%;
        background-color: transparent;
    }
    &-icon {
        padding-top: 4px;
        color: transparent;
        align-self: flex-start;
    }
    &:focus,
    &:hover {
        background-color: @border-color;
        .ui-edit-area-icon {
            color: @text-light-color;
        }
    }
}
</style>

