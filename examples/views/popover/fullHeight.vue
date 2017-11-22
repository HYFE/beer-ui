<template>
    <div>
        <button v-popover:full>示例1</button>
        <ui-popover fullHeight
                    name="full">
            <ul>
                <li v-for="n in 100">第 {{n}} 行</li>
            </ul>
        </ui-popover>
        <button v-popover:full2>示例2</button>
        <ui-popover fullHeight
                    name="full2"
                    placement="right">
            <ul>
                <li v-for="n in 100">第 {{n}} 行</li>
            </ul>
        </ui-popover>
        <button v-popover:full3>示例3</button>
        <ui-popover fullHeight
                    name="full3"
                    placement="right-start">
            <ul>
                <li v-for="n in count"
                    :key="n">第 {{n}} 行</li>
            </ul>
            <button @click="count += 10">click</button>
        </ui-popover>
    </div>
</template>
<script>
export default {
    data () {
        return {
            count: 30
        }
    }
}
</script>
<style scoped>
li {
    padding: 8px 10px;
    text-align: center;
}
</style>
