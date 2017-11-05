<template>
    <div>
        <button id="popbtn">Click</button>
        <ui-popover :visible.sync="visible"
                    for="#popbtn">我是弹窗</ui-popover>
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
