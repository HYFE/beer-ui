<template>
    <div>
        <button ref="btn">Click</button>
        <ui-popover :visible.sync="visible"
                    for="btn">
            <p>我是弹窗</p>
        </ui-popover>
        <button ref="btn2">Hover</button>
        <ui-popover :visible.sync="visible2"
                    trigger="hover"
                    for="btn2">
            <p>我是弹窗2</p>
        </ui-popover>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visible: false,
            visible2: false
        }
    }
}
</script>
