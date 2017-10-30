<template>
    <div>
        <h2>图标</h2>
        <ul class="list">
            <li v-for="icon in config.glyphs"
                class="item">
                <i :class="config.css_prefix_text + icon.css"></i>
                {{config.css_prefix_text + icon.css}}
            </li>
        </ul>
    </div>
</template>
<script>
import config from './config'

export default {
    data() {
        return {
            config
        }
    }
}
</script>
<style lang="less" scope>
.list {
    display: flex;
    flex-wrap: wrap;
}
.item {
    width: 25%;
    padding: 10px 0;
}
</style>
