<template>
    <textarea class="ui-textarea"
                ref="textarea"
                v-model="content"
                :focus="focus"
                :maxlength="maxlength"
                :readonly="readonly"
                @focus="e => $emit('focus', e)"
                @blur="e => $emit('blur', e)"
                @input="e => {resize();$emit('input', e.target.value)}"
                @change="!readonly?$emit('change', content):''"
                @keyup.enter="e => !readonly?$emit('save', e.target.value):''"></textarea>
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
        readonly: Boolean
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
