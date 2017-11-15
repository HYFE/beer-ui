<template>
    <div>
        <ui-edit-area v-model="value"
                    isTextarea>
        </ui-edit-area>
        {{value}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: '我是一个多行文本框'
        }
    }
}
</script>
