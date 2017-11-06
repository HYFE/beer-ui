<template>
    <div>
        <button ref="btn">Click</button>
        <ui-popover :visible.sync="visible"
                    fullHeight
                    for="btn">
            <ul>
                <li v-for="n in 100">第 {{n}} 行</li>
            </ul>
        </ui-popover>
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
<style scoped>
li {
    padding: 8px 10px;
    text-align: center
}
</style>
