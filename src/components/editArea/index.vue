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
        <textarea v-else
                  v-auto-height
                  ref="textarea"
                  :value="value"
                  :readonly="readonly"
                  class="ui-edit-area-textarea"
                  :class="{'ui-edit-area-editable': !readonly}"
                  :maxlength="maxlength"
                  :placeholder="placeholder"
                  :style="inputStyle"
                  rows="1"
                  @focus="e => $emit('focus', e)"
                  @blur="e => $emit('blur', e)"
                  @input="e => !readonly?$emit('input', e.target.value):''"
                  @change="e => !readonly?$emit('change', e.target.value):''"
                  @keydown="keydownEvent"></textarea>
    </div>
</template>
<script>
export default {
    name: 'uiEditArea',
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
    },
    data() {
        return {
            content: '',
        }
    },
    methods: {
        initValue() {
            // Fix JSON.parse error
            this.content = this.value.replace(/\r|\n/g, '\\n')
        },
        keydownEvent(e) {
            if (e.keyCode === 13 && (this.wrapable ? !e.shiftKey : true)) {
                e.preventDefault()
                this.$refs.textarea.blur()
            }
        },
        change() {
            if (!this.readonly && this.content) {
                this.$emit('change', this.content)
                return
            }
            this.initValue()
        }
    },
    watch: {
        value(val) {
            if(this.isTextarea) {
                this.initValue()
            }
        }
    },
    mounted() {
        if(this.isTextarea) {
            this.initValue()
        }
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
        white-space: nowrap;
    }
    &-input,
    &-textarea {
        border: 0;
        padding: 0 2px;
        width: 100%;
        background-color: transparent;
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

