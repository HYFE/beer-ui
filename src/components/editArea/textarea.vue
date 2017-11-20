<template>
    <textarea class="ui-edit-area-textarea"
              ref="textarea"
              v-model.trim="content"
              :focus="focus"
              :maxlength="maxlength"
              :readonly="readonly"
              :spellcheck="false"
              rows="1"
              @focus="e => $emit('focus', e)"
              @blur="e => $emit('blur', e)"
              @input="e => {resize();$emit('input', content)}"
              @change="change"
              @keydown="keydownEvent"></textarea>
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
        maxlength: Number,
        readonly: Boolean,
        wrapable: Boolean
    },
    data() {
        return {
            content: '',
            textareaHeight: ''
        }
    },
    methods: {
        initValue() {
            // Fix JSON.parse error
            this.content = this.value.replace(/\r|\n/g, '\\n')
            this.$nextTick(() => {
                this.resize()
            })
        },
        keydownEvent(e) {
            if (e.keyCode === 13 && (this.wrapable ? !e.shiftKey : true)) {
                e.preventDefault()
                this.$refs.textarea.blur()
            }
        },
        resize() {
            const textarea = this.$refs.textarea
            this.changeOverflow(textarea)
            this.setHeight(textarea)
        },
        changeOverflow(ta) {
            const overflowY = window.getComputedStyle(ta, null).overflowY
            if (overflowY === 'hidden') {
                ta.style.overflowY = 'scroll'
                ta.style.overflowY = 'hidden'
                return
            }
            ta.style.overflowY = 'hidden'
        },
        setHeight(ta) {
            const originalHeight = ta.style.height
            ta.style.height = ''
            const endHeight = ta.scrollHeight
            if (endHeight === 0) {
                ta.style.height = originalHeight
                return
            }
            ta.style.height = `${endHeight}px`
        },
        change() {
            if(!this.readonly && this.content) {
                this.$emit('change', this.content)
                return
            }
            this.initValue()
        }
    },
    watch: {
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

.ui-edit-area-textarea {
    resize: none;
    overflow: hidden;
}
</style>
