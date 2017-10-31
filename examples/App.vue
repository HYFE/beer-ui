<template>
    <div id="app">
        <v-header title="Vue components"></v-header>
        <main class="docs-container docs-main">
            <aside class="docs-aside">
                <ui-list exact>
                    <ui-list-item :to="{ name: 'home' }">开始</ui-list-item>
                    <ui-list-item :to="{ name: 'icon' }">图标</ui-list-item>
                    <ui-list-item :to="{ name: 'transition' }">过渡</ui-list-item>
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
        routes () {
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
    &container {
        width: 90%;
        margin: 0 auto;
    }
    &main {
        display: flex;
        margin-bottom: 30px;
        background: #fff;
        border-radius: 3px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
    &aside {
        width: 18%;
        min-height: 85vh;
        padding: 20px 0;
        border-right: 1px solid #e8e8e8;
        .ui-item-inner {
            text-transform: capitalize;
        }
    }
    &body {
        flex: 1;
        padding: 25px 30px;
        overflow: hidden;
    }
}
</style>
