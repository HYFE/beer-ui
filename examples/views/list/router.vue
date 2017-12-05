<template>
    <ui-list class="demo-treelist">
        <ui-listitem to="/">首页</ui-listitem>
        <ui-listitem to="/icon">图标</ui-listitem>
        <ui-listitem :to="{ name: 'list' }">列表</ui-listitem>
    </ui-list>
</template>
