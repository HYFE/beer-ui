<template>
    <ui-dropdown>
        <a class="demo-link">{{value}}<i class="icon-down-dir"></i></a>
        <ui-dropdown-menu slot="menu" v-model="value">
            <ui-dropdown-group>水果</ui-dropdown-group>
            <ui-dropdown-item v-for="item in fruits"
                              :value="item"
                              :key="item">{{item}}</ui-dropdown-item>
            <ui-dropdown-group>主食</ui-dropdown-group>
            <ui-dropdown-item v-for="item in foods"
                              :value="item"
                              :key="item">{{item}}</ui-dropdown-item>
        </ui-dropdown-menu>
    </ui-dropdown>
</template>
<script>
export default {
    data () {
        return {
            fruits: ['苹果', '香蕉', '梨'],
            foods: ['米饭', '面条'],
            value: '苹果'
        }
    }
}
</script>
