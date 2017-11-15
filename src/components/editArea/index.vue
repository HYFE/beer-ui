<template>
    <div class="ui-edit-area">
        <input type="text"
               v-if="!isTextarea"
               :value="value"
               :readonly="readonly"
               :maxlength="maxlength"
               :placeholder="placeholder"
               class="ui-edit-area-input"
               :class="{'ui-edit-area-editable': !readonly}"
               :style="inputStyle"
               @focus="e => $emit('focus', e)"
               @blur="e => $emit('blur', e)"
               @input="e => !readonly?$emit('input', e.target.value):''"
               @change="e => !readonly?$emit('change', e.target.value):''"
               @keyup.enter="e => !readonly?$emit('save', e.target.value):''">
        <textarea-component v-else
                            :value="value"
                            :readonly="readonly"
                            :maxlength="maxlength"
                            :placeholder="placeholder"
                            :class="{'ui-edit-area-editable': !readonly}"
                            :style="inputStyle"
                            @focus="e => $emit('focus', e)"
                            @blur="e => $emit('blur', e)"
                            @input="value => $emit('input', value)"
                            @change="value => $emit('change', value)"
                            @save="value => $emit('save', value)"></textarea-component>
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
        placeholder: ''
    }
}
</script>
<style lang="less">
@import '../../styles/variables';

.ui-edit-area {
    &-input {
        border: 0;
        padding: 2px;
        width: 100%;
    }
    &-editable {
        &:focus,
        &:hover {
            background-color: @border-color;
        }
    }
}
</style>

