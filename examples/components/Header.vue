<template>
    <header class="header">
        <div class="header-inner">
            <img :src="logo" alt="logo" class="logo">
            <h1 class="title">Vue components</h1>
        </div>
    </header>
</template>
<script>
import logo from '../assets/logo.png'

export default {
    data() {
        return {
            logo
        }
    }
}
</script>
<style lang="less" scoped>
.header {
    width: 100%;
    background: #fff;
    margin-bottom: 30px;
    box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    &-inner {
        width: 90%;
        height: 60px;
        margin: 0 auto;
        display: flex;
        align-items: center
    }
}
.title {
    margin: 0;
    font-size: 20px;
}
.logo {
    width: 40px;
    margin-right: 12px;
}
</style>
