<template>
    <div class="code-block">
        <header class="code-header"
                @click="visible = !visible">
            <h4>{{title}}</h4>
            <a class="code-toggle"
               title="code">
                <i class="icon-code"></i>
            </a>
        </header>
        <expand-transition>
            <div class="code-content"
                 v-show="visible">
                <pre><code ref="code" class="lang-html">{{code}}</code></pre>
            </div>
        </expand-transition>
        <div class="code-show">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/github-gist.css'

export default {
    name: 'codeBlock',
    props: {
        title: String,
        code: String
    },
    data () {
        return {
            visible: false
        }
    },
    mounted () {
        hljs.highlightBlock(this.$refs.code)
    }
}
</script>
<style lang="less">
.code-block {
    margin-bottom: 30px;
    border-radius: 3px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    h4 {
        font-size: 14px;
        margin: 0;
    }
}
.code-header {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    border-bottom: 1px solid #e8e8e8;
    background: #fafafa;
    cursor: pointer;
    &:hover {
        background: #f0f0f0;
    }
}
.code-show {
    position: relative;
    padding: 15px 20px;
}
.code-content {
    border-bottom: 2px dotted #ddd;
    .hljs {
        margin: 0;
        padding: 15px 20px;
        line-height: 1.8;
        color: #484848;
        background: #f8f8f8;
    }
}
.code-toggle {
    cursor: pointer;
    padding: 4px 8px;
    line-height: 1;
    font-size: 16px;
    color: #7d7d7d;
    &:hover {
        color: #444;
    }
}
</style>
