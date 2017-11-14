<template>
    <div class="ui-edit-area">
        <input type="text"
               v-if="!isTextarea"
               v-model="value"
               :readonly="readonly"
               class="ui-edit-area-input"
               @focus="$emit('focus')"
               @blur="$emit('blur')"
               @input="value => $emit('input', value)"
               @change="value => $emit('change', value)">
        <textarea-component v-else
                            :value="value"
                            @focus="$emit('focus')"
                            @blur="$emit('blur')"
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
        maxLength: Number,
        readonly: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="less">
@import '../../styles/variables';

.ui-edit-area {
    &-input {
        border: 2px solid transparent;
        padding: 2px;
        border-radius: 2px;
        &:focus,
        &:hover {
            border-color: @theme-color;
        }
    }
}
</style>

