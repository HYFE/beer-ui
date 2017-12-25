<template>
    <ui-loadmore style="height: 300px;"
                 :pageNum="pageNum"
                 :pageCount="pageCount"
                 :autoLoad="false"
                 :loading="loading"
                 @loadMore="getData">
        <ui-list bordered>
            <ui-listitem v-for="item in dataSource"
                         :key="item">{{item}}</ui-listitem>
        </ui-list>
    </ui-loadmore>
</template>
<script>
export default {
    data () {
        return {
            pageNum: 1,
            pageCount: 5,
            loading: false,
            dataSource: []
        }
    },
    methods: {
        getData (nextPage) {
            this.loading = true
            // 此处为模拟异步数据请求，实际使用请替换为相应的数据请求
            setTimeout(() => {
                const nextData = Array.from(Array(10)).map((val, i) => `第${nextPage}页 > 第${i + 1}项`)
                this.dataSource = this.dataSource.concat(nextData)
                this.loading = false
                this.pageNum += 1
            }, 600)
        }
    },
}
</script>
