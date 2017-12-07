<template>
    <div>
        <div class="box" v-where-close="{ visible, handle }" v-show="visible">点击容器外部隐藏</div>
        <button v-show="!visible" @click="visible = true">点我显示</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visible: true
        }
    },
    methods: {
        handle() {
            this.visible = false
        }
    }
}
</script>
<style scoped>
.box {
    display: inline-block;
    padding: 30px;
    color: #fff;
    background: #03A9F4;
    box-shadow: 0 0 4px rgba(0, 0, 0, .3)
}
</style>
