<template>
    <ui-edit-area :value="value"
                  isTextarea>
    </ui-edit-area>
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
