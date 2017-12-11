<template>
    <div class="ui-modal-wrap"
         :class="{ 'modal-center': center }"
         :style="{ zIndex: cssIndex }"
         v-transclude="appendToBody ? visible : false"
         v-show="visible">
        <ui-mask :visible="visible"
                 v-if="mask"></ui-mask>
        <transition :name="animate"
                    @after-leave="afterLeave">
            <div role="dialog"
                 :aria-describedby="name"
                 tabindex="-1"
                 class="ui-modal"
                 :class="modalClass"
                 :style="styles"
                 v-where-close="{ visible, handle: clickOutside }"
                 v-if="exist && (reset ? visible : true)"
                 v-show="modalVisible">
                <a role="button"
                   aria-label="Close"
                   class="ui-modal-close"
                   @click="hide">&times;</a>
                <header class="ui-modal-header"
                        v-if="$slots.header">
                    <slot name="header"></slot>
                </header>
                <div class="ui-modal-body">
                    <slot></slot>
                </div>
                <footer class="ui-modal-footer"
                        v-if="$slots.footer">
                    <slot name="footer"></slot>
                </footer>
            </div>
        </transition>
    </div>
</template>
<script>
import uiMask from '../mask'
import zIndex from '../../mixins/zIndex'
import whereClose from '../../directives/whereClose'
import transclude from '../../directives/transclude'
import popStack from '../../utils/popStack'
import guid from '../../utils/guid'

export default {
    name: 'uiModal',
    mixins: [zIndex],
    components: {
        uiMask
    },
    directives: {
        whereClose,
        transclude
    },
    props: {
        value: Boolean,
        mask: {
            type: Boolean,
            default: true
        },
        animate: {
            type: String,
            default: 'scale-in'
        },
        width: {
            type: [String, Number],
            default: '36%'
        },
        lockScreen: {
            type: Boolean,
            default: true
        },
        modalClass: [String, Array, Object],
        outsideCloseable: {
            type: Boolean,
            default: true
        },
        appendToBody: {
            type: Boolean,
            default: true
        },
        top: {
            type: [String, Number],
            default: '20%'
        },
        center: Boolean,
        reset: {
            type: Boolean,
            default: true
        },
        beforeClose: {
            type: Function,
            default: () => true
        },
    },
    data () {
        return {
            name: guid('uiModel'),
            modalVisible: false,
            exist: false,
        }
    },
    computed: {
        cssIndex () {
            return this.zIndex || this.nextIndex()
        },
        styles () {
            const top = isNaN(this.top) ? this.top : `${this.top}px`
            return {
                width: isNaN(this.width) ? this.width : `${this.width}px`,
                top: this.center ? 0 : top
            }
        },
        visible: {
            get () {
                return this.value
            },
            set (val) {
                this.$emit('input', val)
                this.$emit('change', val)
            }
        }
    },
    watch: {
        visible (val) {
            val ? this.onShow() : this.onHide()
        }
    },
    methods: {
        onShow () {
            if (!this.exist) this.exist = true
            popStack.push(this.name)
            this.lockScroll(true)
            this.$nextTick(() => {
                this.modalVisible = true
            })
        },
        onHide () {
            popStack.remove(this.name)
            this.lockScroll(false)
        },
        hide () {
            if (this.beforeClose) {
                this.modalVisible = false
            }
        },
        lockScroll (toggle) {
            if (!this.lockScreen) return
            const body = document.body
            if (toggle) {
                const scrollW = window.innerWidth - body.clientWidth
                body.style.paddingRight = `${scrollW}px`
                body.style.overflow = 'hidden'
            } else {
                body.style.paddingRight = ''
                body.style.overflow = ''
            }
        },
        clickOutside () {
            if (this.outsideCloseable && popStack.isLast(this.name)) {
                this.hide()
            }
        },
        afterLeave () {
            this.visible = this.modalVisible
        }
    }
}
</script>
<style lang="less">
@import '../../styles/import';
@import '../../styles/animation';

.ui-modal {
    position: relative;
    z-index: 3000;
    margin: 0 auto;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    outline: 0;

    &-wrap {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
        &.modal-center {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    &-header {
        padding: 12px 20px;
        border-bottom: @border-base;
    }
    &-body {
        padding: 24px;
    }
    &-footer {
        padding: 10px 20px;
        border-top: @border-base;
    }
    &-close {
        position: absolute;
        top: 8px;
        right: 10px;
        padding: 4px 8px;
        font-size: 24px;
        font-weight: 700;
        line-height: 1;
        color: #000;
        opacity: 0.3;
        cursor: pointer;
        text-decoration: none;
        &:hover {
            color: inherit;
            opacity: 0.6;
            text-decoration: none;
        }
    }
}
</style>
