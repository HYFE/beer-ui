<template>
    <div>
        <button v-tooltip:top="top" @click="top = 'change'">top</button>
        <button v-tooltip:left="'left'">left</button>
        <button v-tooltip:right="'right'">right</button>
        <button v-tooltip:bottom="'bottom'">bottom</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            top: 'top'
        }
    }
}
</script>
<style scoped>
button {
    width: 100px;
    text-align: center;
    border: none;
    padding: 4px;
    margin-right: 20px;
    margin-bottom: 5px;
    border-radius: 2px;
}
</style>
