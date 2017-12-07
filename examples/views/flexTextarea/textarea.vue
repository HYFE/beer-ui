<template>
    <div>
        <ui-flex-textarea :value="value"
                    :wrapable="true"
                    @change="change">
        </ui-flex-textarea>
        <button @click="value = '22222'">change</button>
        {{value}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: '我是一个多行文本框我是一个多行文本框我是一个多行文本框我是一个多行文本框我是一个多行文本框我是一个多行文本框我是一个多行文本框我是一个多行文本框我是一个多行文本框我是一个多行文本框我是一个多行文本框我是一个多行文本框我是一个多行文本框'
        }
    },
    methods: {
        change(val) {
            console.log(val)
        }
    }
}
</script>
