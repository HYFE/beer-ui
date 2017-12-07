<template>
    <div class="demo-treelist">
        <ui-list>
            <ui-listitem disabled
                         to="/">首页</ui-listitem>
            <ui-listitem to="/icon">图标</ui-listitem>
            <ui-divider></ui-divider>
            <ui-sub-header>组织架构</ui-sub-header>
            <ui-treeitem :tree="treeRoutes" :expandAll="false" :expandedKeys="['111']" accordion>
                <template slot-scope="{ node }">
                    <i v-if="node.icon"
                       :class="`icon-${node.icon}`"></i> {{node.text}}
                </template>
            </ui-treeitem>
        </ui-list>
    </div>
</template>
<script>
export default {
    data () {
        return {
            treeRoutes: {
                id: '000',
                text: '企业组织架构',
                icon: 'sitemap',
                children: [{
                    id: '111',
                    text: '开发部',
                    icon: 'code',
                    children: [{
                        id: '1111',
                        text: '前端'
                    }, {
                        id: '1112',
                        text: '后端'
                    }, {
                        id: '1113',
                        text: '设计'
                    }, {
                        id: '1114',
                        text: '产品'
                    }]
                }, {
                    id: '222',
                    text: '销售部',
                    icon: 'tasks',
                    children: [{
                        id: '2221',
                        text: '销售1部'
                    }, {
                        id: '2222',
                        text: '销售2部'
                    }]
                }, {
                    id: '333',
                    text: '行政部',
                    icon: 'user-circle',
                    children: [{
                        id: '3331',
                        text: '行政1部'
                    }, {
                        id: '3332',
                        text: '行政2部'
                    }]
                }]
            }
        }
    }
}
</script>
<style>
.demo-treelist {
    max-width: 300px;
    border: 1px solid #ddd;
}
</style>
