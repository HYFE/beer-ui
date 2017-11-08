<template>
    <div>
        <!-- 实际应用中把占位组件放在根组件下 -->
        <ui-popover-holder></ui-popover-holder>
        <h3>{{msg}}</h3>
        <button v-popover="singlePop">Click</button>
        <button v-popover="singlePop2">Click2</button>
    </div>
</template>
<script>
const pop = {
    template: `<h1>{{message}}</h1>`,
    props: {
        message: String
    }
}

const pop2 = {
    template: `<button @click="onClick">Click!</button>`,
    methods: {
        onClick () {
            this.$emit('click', '来自弹窗2的消息')
        }
    }
}

export default {
    data () {
        return {
            msg: '',
            singlePop: {
                component: pop, // 装载到 popover 的组件
                popover: {  // 传入弹窗的配置
                    placement: 'top'
                },
                options: {  // 传入弹窗内部组件的配置
                    message: '传入弹窗1的数据',
                }
            },
            singlePop2: {
                component: pop2,
                popover: {
                    events: { // 传入弹窗的事件
                        hide: () => {
                            this.msg = ''
                        }
                    }
                },
                options: {
                    events: { // 传入弹窗内部组件的事件
                        click: msg => {
                            this.msg = msg
                        }
                    }
                }
            }
        }
    }
}
</script>
