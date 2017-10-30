<template>
    <div class="code-block">
        <h4>{{title}}</h4>
        <div class="code-content"
             v-show="visible">
            <pre><code ref="code" class="lang-html">{{code}}</code></pre>
        </div>
        <div class="code-show">
            <a class="code-toggle"
               @click="visible = !visible">
                <i class="icon-code"></i> 展开代码</a>
            <slot></slot>
        </div>
    </div>
</template>
<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

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
        padding: 12px 20px;
        border-bottom: 1px solid #e8e8e8;
    }
}
.code-show {
    position: relative;
    padding: 15px 20px;
}
.code-content {
    border-bottom: 1px solid #e8e8e8;
    .hljs {
        padding: 20px;
        font-family: "Source Code Pro",Consolas,Menlo,Monaco,"Courier New",monospace
    }
}
.code-toggle {
    position: absolute;
    top: -15px;
    left: 50%;
    background: #fff;
    cursor: pointer;
    padding: 2px 10px;
    font-size: 16px;
    // border: 1px solid #e8e8e8;
    border-radius: 2px;
    transform: translateX(-50%);
    box-shadow: 0 0 2px rgba(0, 0, 0, .2);
    &:hover {
        color: #000;
    }
}
</style>
