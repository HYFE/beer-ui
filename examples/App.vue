<template>
    <div id="app">
        <v-header></v-header>
        <main class="docs-main">
            <aside class="docs-aside">
                <ui-list exact>
                    <ui-list-item :to="{ name: 'home' }">开始</ui-list-item>
                    <ui-list-item :to="{ name: 'icon' }">图标</ui-list-item>
                    <ui-list-item :isAction="false"
                                  :children="routes">
                        <template slot-scope="{ value }">{{ value ? value.text : '组件'}}</template>
                    </ui-list-item>
                </ui-list>
            </aside>
            <router-view class="docs-body" />
        </main>
    </div>
</template>
<script>
import vHeader from './components/header'
import list from './router/components'

export default {
    name: 'app',
    components: {
        vHeader
    },
    data () {
        return {
            list
        }
    },
    computed: {
        routes() {
            return this.list.map(item => ({
                id: item.name,
                to: {
                    name: item.name
                },
                text: `${item.name} ${item.text}`
            }))
        }
    }
}
</script>
<style lang="less">
html,
body {
    height: 100%;
    min-height: 100%;
}

body {
    margin: 0;
    color: #4a4a4a;
    font-size: 14px;
    background: #f0f0f0;
}
.docs- {
    &main {
        display: flex;
        width: 90%;
        margin: 0 auto 30px;
        background: #fff;
        border-radius: 3px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
    &aside {
        width: 18%;
        padding: 20px 0;
        border-right: 1px solid #e8e8e8;
        .ui-item-inner {
            text-transform: capitalize
        }
    }
    &body {
        flex: 1;
        padding: 25px 20px;
        h2 {
            margin: 0 0 10px;
            line-height: 40px;
            font-size: 18px;
            border-bottom: 1px solid #e8e8e8;
        }
        h3 {
            margin: 10px 0;
            font-size: 16px;
            line-height: 34px;
        }
    }
}
</style>
