<template>
    <div class="wrap">
        <div class="top">
            <button ref="btn">top-start</button>
            <ui-popover :visible.sync="visible1"
                        for="btn"
                        placement="top-start">
                <p>我是弹窗</p>
            </ui-popover>
            <button ref="btn2">top</button>
            <ui-popover :visible.sync="visible2"
                        for="btn2"
                        placement="top">
                <p>我是弹窗</p>
            </ui-popover>
            <button ref="btn3">top-end</button>
            <ui-popover :visible.sync="visible3"
                        for="btn3"
                        placement="top-end">
                <p>我是弹窗</p>
            </ui-popover>
        </div>
        <div class="center">
            <div class="col">
                <button ref="btn4">left-start</button>
                <ui-popover :visible.sync="visible4"
                            for="btn4"
                            placement="left-start">
                    <p>我是弹窗</p>
                </ui-popover>
                <button ref="btn5">left</button>
                <ui-popover :visible.sync="visible5"
                            for="btn5"
                            placement="left">
                    <p>我是弹窗</p>
                </ui-popover>
                <button ref="btn6">left-end</button>
                <ui-popover :visible.sync="visible6"
                            for="btn6"
                            placement="left-end">
                    <p>我是弹窗</p>
                </ui-popover>
            </div>
            <div class="col">
                <button ref="btn7">right-start</button>
                <ui-popover :visible.sync="visible7"
                            for="btn7"
                            placement="right-start">
                    <p>我是弹窗</p>
                </ui-popover>
                <button ref="btn8">right</button>
                <ui-popover :visible.sync="visible8"
                            for="btn8"
                            placement="right">
                    <p>我是弹窗</p>
                </ui-popover>
                <button ref="btn9">right-end</button>
                <ui-popover :visible.sync="visible9"
                            for="btn9"
                            placement="right-end">
                    <p>我是弹窗</p>
                </ui-popover>
            </div>
        </div>
        <div class="bottom">
            <button ref="btn10">bottom-start</button>
            <ui-popover :visible.sync="visible10"
                        for="btn10"
                        placement="bottom-start">
                <p>我是弹窗</p>
            </ui-popover>
            <button ref="btn11">bottom</button>
            <ui-popover :visible.sync="visible11"
                        for="btn11"
                        placement="bottom">
                <p>我是弹窗</p>
            </ui-popover>
            <button ref="btn12">bottom-end</button>
            <ui-popover :visible.sync="visible12"
                        for="btn12"
                        placement="bottom-end">
                <p>我是弹窗</p>
            </ui-popover>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            visible1: false,
            visible2: false,
            visible3: false,
            visible4: false,
            visible5: false,
            visible6: false,
            visible7: false,
            visible8: false,
            visible9: false,
            visible10: false,
            visible11: false,
            visible12: false,
        }
    }
}
</script>
<style scoped>
button {
    width: 100px;
    text-align: center;
    border: none;
    padding: 4px;
    margin-bottom: 5px;
    border-radius: 2px;
}
.wrap {
    width: 510px;
    margin: 0 auto;
}
.top,
.bottom {
    text-align: center;
}
.center {
    display: flex;
    justify-content: space-between;
}
.col {
    width: 100px;
}
</style>
