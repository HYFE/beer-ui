<template>
    <div>
        <button v-tooltip="'Dark主题'">Dark</button>
        <button v-tooltip.light="'Light主题'">Light</button>
    </div>
</template>
<script>
export default {
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
