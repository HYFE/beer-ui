<template>
    <ui-list>
        <ui-listitem to="/icon">图标</ui-listitem>
        <ui-listitem :to="{ name: 'transition' }">过渡</ui-listitem>
        <ui-listitem :to="{ name: 'list' }">列表</ui-listitem>
    </ui-list>
</template>
