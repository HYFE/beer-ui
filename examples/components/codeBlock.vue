<template>
    <div class="code-block">
        <div class="code-show">
            <slot></slot>
        </div>
        <div class="code-info">
            <strong class="code-title">{{title}}</strong>
            <slot name="desc"></slot>
            <div v-if="!$slots.desc" v-html="descHtml"></div>
            <a class="code-toggle"
               title="Code"
               @click="visible = !visible">
                <i class="icon-code"></i>
            </a>
        </div>
        <expand-transition>
            <div class="code-content"
                 v-show="visible">
                <pre><code ref="code" class="lang-html">{{code}}</code></pre>
            </div>
        </expand-transition>
    </div>
</template>
<script>
export default {
    name: 'codeBlock',
    props: {
        title: String,
        desc: String,
        code: String
    },
    data() {
        return {
            visible: false
        }
    },
    computed: {
        descHtml() {
            return this.$marked(this.desc || '')
        }
    },
    mounted() {
        this.$hljs.highlightBlock(this.$refs.code)
    }
}
</script>
<style lang="less">
.code-block {
    margin-bottom: 25px;
    border-radius: 3px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}
.code-show {
    padding: 20px 30px;
}
.code-info {
    position: relative;
    margin-top: 20px;
    padding: 20px 30px;
    line-height: 1.6;
    border-top: 1px solid #e8e8e8;
    p {
        margin: 5px 0;
    }
}
.code-title {
    position: absolute;
    top: -12px;
    left: 36px;
    padding: 0 12px;
    line-height: 22px;
    font-size: 15px;
    background: #fff;
}
.code-toggle {
    position: absolute;
    bottom: 10px;
    right: 8px;
    cursor: pointer;
    padding: 4px 8px;
    line-height: 1;
    font-size: 16px;
    font-weight: 600;
    opacity: .5;
    &:hover {
        opacity: .8
    }
}
.code-content {
    border-top: 1px dashed #ddd;
    pre {
        margin-bottom: 0;
        padding: 0;
    }
    .hljs {
        padding: 18px 30px;
        line-height: 1.8;
    }
}
</style>
