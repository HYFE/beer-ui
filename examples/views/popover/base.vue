<template>
    <div>
        <button v-popover:clickPop>Click</button>
        <ui-popover name="clickPop">
            <p>我是弹窗</p>
        </ui-popover>
        <button v-popover:hoverPop.hover>Hover</button>
        <ui-popover name="hoverPop">
            <p>我是弹窗2</p>
        </ui-popover>
    </div>
</template>
