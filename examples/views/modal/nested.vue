<template>
    <div>
        <button @click="visible = true" class="demo-btn">弹个窗</button>
        <ui-modal v-model="visible" key="modal1">
            <h4>嵌套弹窗</h4>
            <button @click="visible2 = true" class="demo-btn">再弹一个</button>
        </ui-modal>
        <ui-modal v-model="visible2" center key="modal2">
            <h4>嵌套弹窗2</h4>
            <button v-popover:pop class="demo-btn">再弹一个</button>
        </ui-modal>
        <ui-popover name="pop">
            弹弹弹弹弹~
        </ui-popover>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visible: false,
            visible2: false,
            visible3: false
        }
    }
}
</script>
