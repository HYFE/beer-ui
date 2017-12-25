<template>
    <component class="ui-loadmore"
               :is="tag"
               @scroll.native="onScroll"
               @scroll="onScroll">
        <slot></slot>
        <div class="ui-loadmore-loading"
             :style="{ top: loadingTop }"
             v-if="autoLoad"
             v-show="loading">
            <slot name="loading">
                <i class="animate-spin"
                   :class="loadingIcon"></i>
            </slot>
        </div>
        <div class="ui-loadmore-footer"
             v-if="!autoLoad"
             v-show="pageNum <= pageCount">
            <i class="animate-spin"
               :class="loadingIcon"
               v-show="loading"></i>
            <button class="ui-loadmore-btn"
                    @click="loadData"
                    v-show="!loading">
                <slot name="loadMore">加载更多</slot>
            </button>
        </div>
    </component>
</template>
<script>
export default {
    name: 'uiLoadmore',
    props: {
        tag: {
            type: [String, Object],
            default: 'div'
        },
        autoLoad: {
            type: Boolean,
            default: true
        },
        loading: Boolean,
        pageNum: {
            type: Number,
            default: 1
        },
        pageCount: {
            type: Number,
            default: 1
        },
        loadingIcon: {
            type: String,
            default: 'icon-spin4'
        },
    },
    data () {
        return {
            loadingTop: '50%'
        }
    },
    methods: {
        onScroll (e) {
            if (!this.autoLoad) return
            const { scrollTop, scrollHeight, offsetHeight } = e.target
            if (scrollTop + offsetHeight >= scrollHeight) {
                this.loadData()
            }
        },
        loadData () {
            if (this.loading || this.pageNum > this.pageCount) return
            this.loadingTop = `${this.$el.scrollHeight - 60}px`
            this.$emit('loadMore', this.pageNum)
        }
    },
    mounted () {
        this.loadData()
    }
}
</script>
<style lang="less">
@import '../../styles/import';

.ui-loadmore {
    position: relative;
    overflow-y: auto;
    &-loading {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        text-align: center;
        margin: auto;
        font-size: 20px;
        color: @theme-color;
    }
    &-footer {
        padding: 8px 0;
        text-align: center;
        color: @theme-color;
        font-size: 16px;
    }
    &-btn {
        display: inline-block;
        padding: 0 12px;
        line-height: 28px;
        font-size: 14px;
        cursor: pointer;
        color: @theme-color;
        background: #fff;
        border: 1px solid @theme-color;
        border-radius: 2px;
    }
}
</style>
