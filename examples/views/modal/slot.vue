<template>
    <div>
        <button @click="visible = true" class="demo-btn">model</button>
        <ui-modal v-model="visible">
            <h4 slot="header">带头部和底部的弹窗</h4>
            带头部和底部的弹窗。
            <div slot="footer" style="text-align:right">
                <button class="demo-btn" @click="visible = false">保存</button>
            </div>
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
