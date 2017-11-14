<template>
    <div>
        <ui-list bordered>
            <ui-listitem v-for="n in 3"
                         @click="onClick(n)"
                         :key="n">列表项{{n}}</ui-listitem>
        </ui-list>
        <h3>{{msg}}</h3>
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg: '点击列表试试'
        }
    },
    methods: {
        onClick (n) {
            this.msg = `你点击了列表项${n}`
        }
    }
}
</script>
