<template>
    <div>
        <button @click="visible = true" class="demo-btn">model</button>
        <ui-modal v-model="visible">
            第一个弹窗。
        </ui-modal>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visible: false
        }
    }
}
</script>
