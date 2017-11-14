<template>
    <header class="docs-header">
        <div class="docs-container docs-header-inner">
            <img :src="logo"
                 alt="logo"
                 class="docs-logo">
            <h1 class="docs-title">{{title}}</h1>
        </div>
    </header>
</template>
<script>
import logo from '../assets/logo.png'

export default {
    props: {
        title: String
    },
    data () {
        return {
            logo
        }
    }
}
</script>
<style lang="less">
.docs- {
    &header {
        width: 100%;
        background: #fff;
        margin-bottom: 30px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647),
            0 1px 4px rgba(0, 0, 0, 0.117647);
        &-inner {
            height: 60px;
            display: flex;
            align-items: center;
        }
    }
    &title {
        margin: 0;
        font-size: 20px;
    }
    &logo {
        width: 40px;
        margin-right: 12px;
    }
}
</style>
