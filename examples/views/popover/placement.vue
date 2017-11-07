<template>
    <div class="wrap">
        <div class="top">
            <button v-popover:pop1>top-start</button>
            <ui-popover placement="top-start"
                        name="pop1">
                <p>我是弹窗</p>
            </ui-popover>
            <button v-popover:pop2>top</button>
            <ui-popover placement="top"
                        name="pop2">
                <p>我是弹窗</p>
            </ui-popover>
            <button v-popover:pop3>top-end</button>
            <ui-popover placement="top-end"
                        name="pop3">
                <p>我是弹窗</p>
            </ui-popover>
        </div>
        <div class="center">
            <div class="col">
                <button v-popover:pop4>left-start</button>
                <ui-popover placement="left-start"
                            name="pop4">
                    <p>我是弹窗</p>
                </ui-popover>
                <button v-popover:pop5>left</button>
                <ui-popover placement="left"
                            name="pop5">
                    <p>我是弹窗</p>
                </ui-popover>
                <button v-popover:pop6>left-end</button>
                <ui-popover placement="left-end"
                            name="pop6">
                    <p>我是弹窗</p>
                </ui-popover>
            </div>
            <div class="col">
                <button v-popover:pop7>right-start</button>
                <ui-popover placement="right-start"
                            name="pop7">
                    <p>我是弹窗</p>
                </ui-popover>
                <button v-popover:pop8>right</button>
                <ui-popover placement="right"
                            name="pop8">
                    <p>我是弹窗</p>
                </ui-popover>
                <button v-popover:pop9>right-end</button>
                <ui-popover placement="right-end"
                            name="pop9">
                    <p>我是弹窗</p>
                </ui-popover>
            </div>
        </div>
        <div class="bottom">
            <button v-popover:pop10>bottom-start</button>
            <ui-popover acement="bottom-start"
                        name="pop10">
                <p>我是弹窗</p>
            </ui-popover>
            <button v-popover:pop11>bottom</button>
            <ui-popover acement="bottom"
                        name="pop11">
                <p>我是弹窗</p>
            </ui-popover>
            <button v-popover:pop12>bottom-end</button>
            <ui-popover acement="bottom-end"
                        name="pop12">
                <p>我是弹窗</p>
            </ui-popover>
        </div>
    </div>
</template>
<script>
export default {
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
