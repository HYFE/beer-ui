<template>
    <div class="ui-textarea-wrap">
        <div class="ui-textarea-mirror"
             ref="mirror"
             :style="{minHeight: mirrorMinHeight?`${mirrorMinHeight}px`:''}">
            <p v-for="line in content.split('\n')" v-html="isSpace(line)?'<br>':line"></p>
        </div>
        <textarea class="ui-textarea"
                  ref="textarea"
                  v-model="content"
                  :focus="focus"
                  @focus="$emit('focus')"
                  @blur="$emit('blur')"
                  @input="$emit('input', content)"
                  @change="$emit('blur', content)"
                  :style="{height: mirrorHeight?`${mirrorHeight}px`:''}"></textarea>
    </div>
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
    },
    data() {
        return {
            content: '',
            mirrorHeight: '',
            mirrorMinHeight: ''
        }
    },
    methods: {
        initMirrorHeight() {
            this.mirrorMinHeight = this.$refs.textarea.getBoundingClientRect().height
        },
        initValue() {
            this.content = this.value
        },
        isSpace(text) {
            if(text === '') return true
            return /^\s+$/.test(text)
        }
    },
    watch: {
        content() {
            this.$nextTick(() => {
                this.mirrorHeight = this.$refs.mirror.getBoundingClientRect().height
            })
        },
        value(val) {
            this.content = val
        }
    },
    mounted() {
        this.initMirrorHeight()
        this.initValue()
    }
}
</script>
<style lang="less">
@import '../../styles/variables';

.ui-textarea {
    position: absolute;
    bottom: 0;
    left: 0;
    resize: none;
    border-radius: 2px;
    overflow: hidden;
    &:focus,
    &:hover {
        border-color: @theme-color;
    }
    &-wrap {
        line-height: 18px;
        position: relative;
        max-width: 100%;
    }
    &-mirror {
        // color: transparent;
        overflow: hidden;
        word-break: break-all;
        &,
        & > p {
            // min-height: 15px;
            margin: 0;
        }
    }
    &,
    &-mirror {
        padding: 2px;
        border: 2px solid transparent;
    }
}
</style>
