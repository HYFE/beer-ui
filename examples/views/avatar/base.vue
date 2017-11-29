<template>
    <div>
        <ui-avatar v-for="s in size" icon="icon-user" :size="s" :key="s" class="demo-avatar"></ui-avatar><br>
        <ui-avatar v-for="s in size" icon="icon-user" circle :size="s" :key="s" class="demo-avatar"></ui-avatar>
    </div>
</template>
<script>
export default {
    data () {
        return {
            size: ['xl', 'lg', 'md', 'sm', 'xs']
        }
    }
}
</script>
<style lang="less">
.demo-avatar {
    margin: 10px;
}
</style>
