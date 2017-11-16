<template>
    <textarea class="ui-textarea"
                ref="textarea"
                v-model="content"
                :focus="focus"
                :maxlength="maxlength"
                :readonly="readonly"
                :spellcheck="false"
                rows="1"
                @focus="e => $emit('focus', e)"
                @blur="e => $emit('blur', e)"
                @input="e => {resize();$emit('input', content)}"
                @change="!readonly?$emit('change', content):''"
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
        wrapable: {
            type: Boolean,
            default: true
        }
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
        },
        keydownEvent(e) {
            if(e.keyCode === 13 && !this.wrapable) {
                e.preventDefault()
                this.$emit('change', this.content)
            }
        },
        resize() {
            const textarea = this.$refs.textarea
            this.changeOverflow(textarea)
            this.setHeight(textarea)
        },
        changeOverflow(ta) {
            const overflowY = window.getComputedStyle(ta, null).overflowY
            if(overflowY === 'hidden') {
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
            if(endHeight === 0) {
                ta.style.height = originalHeight
                return
            }
            ta.style.height = `${endHeight}px`
        }
    },
    watch: {
        value(val) {
            this.initValue()
        }
    },
    mounted() {
        this.initValue()
        this.resize()
    }
}
</script>
<style lang="less">
@import '../../styles/variables';

.ui-textarea {
    resize: none;
    overflow: hidden;
    padding: 4px;
    border: 0;
    width: 100%;
    background-color: transparent;
}
</style>
