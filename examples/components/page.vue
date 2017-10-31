<template>
    <article class="docs-page">
        <header class="docs-page-header">
            <h2>{{title}}</h2>
            <p v-if="desc">{{desc}}</p>
            <slot name="desc"
                  v-if="!desc"></slot>
        </header>
        <slot></slot>
        <template v-if="!$slots.default">
            <h3>示例</h3>
            <slot name="code"></slot>
            <h3>API</h3>
            <slot name="api"></slot>
        </template>
    </article>
</template>
<script>
export default {
    name: 'docsPage',
    props: {
        title: String,
        desc: String
    },
}
</script>
<style lang="less">
.docs-page {
    &-header {
        margin-bottom: 20px;
    }
    p {
        margin: 5px 0 1rem;
        a {
            color: #2fb791;
            text-decoration: none;
        }
    }
    h2,
    h3 {
        font-weight: 400;
        margin: 0 0 0.6em;
    }
    h2 {
        font-size: 24px;
    }
    h3 {
        font-size: 18px;
    }
    code {
        margin: 0 4px;
        padding: 2px 4px;
        font-family: 'Source Code Pro', Consolas, Menlo, Monaco, 'Courier New',
            monospace;
        background: #eee;
        border: 1px solid #ddd;
        border-radius: 2px;
    }
}
</style>
