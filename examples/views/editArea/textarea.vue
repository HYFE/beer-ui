<template>
    <div>
        <ui-edit-area v-model="value"
                    isTextarea
                    :wrapable="false">
        </ui-edit-area>
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
    }
}
</script>
