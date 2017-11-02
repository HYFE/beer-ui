<template>
    <article class="docs-page"
             v-html-s="prevContent"
             v-html-e="nextContent">
        <slot></slot>
    </article>
</template>
<script>
export default {
    name: 'docsPage',
    directives: {
        htmlS: {
            inserted (el, { value }) {
                el.insertAdjacentHTML('afterbegin', value)
            },
        },
        htmlE: {
            inserted (el, { value }) {
                el.insertAdjacentHTML('beforeend', value)
            }
        }
    },
    computed: {
        folder () {
            return this.$route.name
        },
        content () {
            return require(`@/views/${this.folder}/${this.folder}.md`)
        },
        splitContent () {
            return this.content.split('<!--code-->')
        },
        prevContent () {
            return this.$marked(this.splitContent[0])
        },
        nextContent () {
            const string = this.splitContent[1]
            return string ? this.$marked(this.splitContent[1]) : ''
        }
    },
}
</script>
<style lang="less">
.docs-page {
    &-header {
        margin-bottom: 20px;
    }
    p {
        margin: 5px 0 16px;
        a {
            color: #2fb791;
            text-decoration: none;
        }
        &:last-child {
            margin-bottom: 0;
        }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 16px;
        font-weight: 500;
        line-height: 1.25;
    }
    h2,
    h3,
    h4 {
        margin-top: 20px;
    }
    h5 {
        margin-top: 15px;
    }
    h1 {
        font-size: 26px;
    }

    h2 {
        font-size: 22px;
    }

    h3 {
        font-size: 1.25em;
    }

    h4 {
        font-size: 1em;
    }

    h5 {
        font-size: 0.875em;
    }

    h6 {
        font-size: 0.85em;
        color: #6a737d;
    }

    ol,
    ul,
    dl,
    pre,
    table,
    blockquote {
        margin-top: 0;
        margin-bottom: 16px;
    }

    blockquote {
        padding: 0 1em;
        color: #6a737d;
        border-left: 0.25em solid #dfe2e5;
        > :first-child {
            margin-top: 0;
        }

        > :last-child {
            margin-bottom: 0;
        }
    }

    pre {
        padding: 16px;
        background: #f8f8f8;
        border-radius: 2px;
        > code {
            margin: 0;
            padding: 0;
            color: #555;
            background: #f8f8f8;
        }
    }
    code {
        margin: 0 4px;
        padding: 2px 4px;
        font-family: 'Source Code Pro', Consolas, Menlo, Monaco, 'Courier New',
            monospace;
        background: #eee;
        border-radius: 2px;
    }

    table {
        width: 100%;
        overflow: auto;
    }

    table th {
        text-align: left;
        font-weight: 600;
    }

    table th,
    table td {
        padding: 6px 13px;
        border: 1px solid #dfe2e5;
    }

    table tr {
        border-top: 1px solid #c6cbd1;
    }

    table thead {
        background-color: #f6f8fa;
    }
}
</style>
