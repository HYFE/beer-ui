<template>
    <ui-loadmore style="height: 300px;"
                 :pageNum="pageNum"
                 :pageCount="pageCount"
                 :loadMore="getData"
                 :autoLoad="false">
        <ui-list bordered slot-scope="{ dataSource }">
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
            pageCount: 5
        }
    },
    methods: {
        getData (nextPage) {
            // 此处为模拟异步数据请求，实际使用请替换为返回 Promise 的 HTTP 请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const nextData = Array.from(Array(10)).map((val, i) => `第${nextPage}页 > 第${i + 1}项`)
                    resolve(nextData)
                    this.pageNum += 1
                }, 1000)
            })
        }
    },
}
</script>
