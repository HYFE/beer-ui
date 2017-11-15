<template>
    <textarea class="ui-textarea"
                ref="textarea"
                v-model="content"
                :focus="focus"
                :maxlength="maxlength"
                @focus="e => $emit('focus', e)"
                @blur="e => $emit('blur', e)"
                @input="$emit('input', content)"
                @change="$emit('change', content)"
                @keyup.enter="e => $emit('save', e.target.value)"
                :style="{height: textareaHeight?`${textareaHeight}px`:''}"></textarea>
</template>
<script>
export default {
    name: 'textareaComponent',
    props: {
        value: String,
        focus: {
            type: Boolean,
            default: false
        },
        maxlength: Number
    },
    data() {
        return {
            content: '',
            textareaHeight: ''
        }
    },
    methods: {
        initValue() {
            this.content = this.value
        }
    },
    watch: {
        content() {
            this.textareaHeight = this.$refs.textarea.scrollHeight
        },
        value(val) {
            this.initValue()
        }
    },
    mounted() {
        this.initValue()
    }
}
</script>
<style lang="less">
@import '../../styles/variables';

.ui-textarea {
    resize: none;
    overflow: hidden;
    padding: 2px;
    border: 0;
}
</style>
