<template>
    <div>
        <button v-popover:wrapPop>Click</button>
        <ui-popover name="wrapPop">
            <p>继续点击按钮</p>
            <button v-popover:innerPop>Click2</button>
        </ui-popover>
        <ui-popover name="innerPop">
            弹窗里的弹窗
        </ui-popover>
    </div>
</template>
