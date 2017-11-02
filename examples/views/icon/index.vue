<template>
    <docs-page>
        <ul class="icons-list">
            <li v-for="icon in config.glyphs"
                class="item"
                @click="copy($event, icon.css)">
                <i :class="config.css_prefix_text + icon.css"></i>
                <span>{{config.css_prefix_text + icon.css}}</span>
            </li>
        </ul>
        <transition name="copy"
                    @after-enter="copying = false">
            <div class="copy-layer"
                 :style="position"
                 v-if="copying">
                <i class="icon-ok-circled"></i>Copy!
            </div>
        </transition>
        <input type="text"
               v-model="copyText"
               ref="instead"
               class="coppy-instead">
    </docs-page>
</template>
<script>
import config from './config'

export default {
    data () {
        return {
            config,
            copyText: '',
            copying: false,
            position: null
        }
    },
    methods: {
        copy (e, name) {
            this.position = { top: `${e.clientY}px`, left: `${e.clientX}px` }
            this.copying = true
            this.copyText = `<i class="${config.css_prefix_text + name}"></i>`
            setTimeout(() => {
                this.$refs.instead.select()
                this.$nextTick(() => {
                    document.execCommand('cut')
                })
            }, 0)
        }
    }
}
</script>
<style lang="less">
.icons-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    font-size: 16px;
    li {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 16.666%;
        min-width: 200px;
        padding: 10px 0;
        color: #999;
        cursor: pointer;
    }
    i {
        margin-bottom: 5px;
        font-size: 24px;
        color: #555;
    }
}
.coppy-instead {
    position: fixed;
    top: -100px;
    z-index: -999;
    opacity: 0;
}
.copy-layer {
    position: fixed;
    margin: -10px 0 0 -32px;
    color: #4caf50;
    font-size: 14px;
    font-weight: bold;
    i {
        font-size: 14px;
        color: #4caf50;
    }
}
.copy-enter-active {
    transition: 0.1s ease-in;
}
.copy-leave-active {
    transition: all 0.5s ease-in-out;
}
.copy-enter,
.copy-leave-to {
    opacity: 0;
}
.copy-leave-to {
    transform: translateY(-150%);
}
</style>
