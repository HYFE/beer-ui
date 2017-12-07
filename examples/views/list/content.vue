<template>
    <div>
        <ui-list bordered>
            <ui-listitem v-for="n in 3" :key="n">
                <ui-avatar icon="icon-user" circle slot="left" style="margin-right: 1em"></ui-avatar>
                <div><strong>list title {{n}}</strong></div>
                <div>list desc list desc list desc list desc list desc list desc </div>
                <div slot="right">
                    <i class="icon-edit"></i>
                    <i class="icon-trash"></i>
                </div>
            </ui-listitem>
        </ui-list>
        <br>
        <ui-list bordered>
            <ui-listitem v-for="n in 3" :key="n">
                <div><strong>list title {{n}}</strong></div>
                <div>list desc list desc list desc list desc list desc list desc </div>
                <div slot="right">
                    <img src="//placeholder.qiniudn.com/200x100" >
                </div>
            </ui-listitem>
        </ui-list>
    </div>
</template>
