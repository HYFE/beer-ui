<template>
    <docs-page title="Icon 图标"
               desc="集成了 158 枚通用图标。">
        <ul class="icon-list">
            <li v-for="icon in config.glyphs"
                class="item">
                <i :class="config.css_prefix_text + icon.css"></i>
                {{config.css_prefix_text + icon.css}}
            </li>
        </ul>
    </docs-page>
</template>
<script>
import config from './config'

export default {
    data () {
        return {
            config
        }
    }
}
</script>
<style lang="less" scope>
.icon-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    font-size: 16px;
    li {
        width: 25%;
        padding: 10px 0;
    }
}
</style>
