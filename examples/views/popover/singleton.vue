<template>
    <div>
        <!-- 实际应用中把占位组件放在根组件下 -->
        <ui-popover-holder></ui-popover-holder>
        <button v-popover.only="singlePop">Click</button>
        <button v-popover.only="singlePop2">Click2</button>
        <button v-popover.only="singlePop3">Click3</button>
        <h3>{{msg}}</h3>
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

const pop3 = {
    template: `<button @click="onClick">内部关闭弹窗</button>`,
    methods: {
        onClick () {
            this.$popover.visible = false
            // this.$emit('close:popover')
        }
    }
}

export default {
    data () {
        return {
            msg: '',
            singlePop: {
                component: pop, // 装载到 popover 的组件
                message: '传入弹窗1的数据', // 传入弹窗内容组件的配置
            },
            singlePop2: {
                component: pop2,
                events: { // 传入弹窗内容组件的事件
                    click: msg => {
                        this.msg = msg
                    },
                },
                popover: { // 传入弹窗的配置
                    placement: 'top',
                    events: { // 传入弹窗的事件
                        hide: () => {
                            this.msg = ''
                        }
                    }
                },
            },
            singlePop3: {
                component: pop3
            }
        }
    }
}
</script>
