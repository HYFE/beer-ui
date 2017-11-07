<template>
    <transition :name="transitionName">
        <div class="ui-popover"
             :style="{ zIndex: cssIndex }"
             v-if="exist"
             v-show="visible"
             ref="pop">
            <div class="ui-popover-panel"
                 v-where-close="{ visible, handle: hideOnClickOutSide}"
                 :style="{ width: cssWidth }">
                <div class="ui-popover-arrow"></div>
                <div class="ui-popover-content"
                     :style="{ maxHeight }">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import { bus } from './directive'
import popManage from './popManage'
import Popper from '_/libs/popper'
import zIndex from '_/utils/zIndex'

export default {
    name: 'uiPopover',
    mixins: [popManage, zIndex],
    props: {
        value: Boolean,
        name: {
            type: String,
            required: true
        },
        placement: {
            type: String,
            default: 'bottom'
        },
        eventsEnabled: {
            type: Boolean,
            default: true
        },
        offset: {
            type: Number,
            default: 0
        },
        arrow: {
            type: Boolean,
            default: true
        },
        width: [Number, String],
        fullHeight: Boolean,
        transitionName: {
            type: String,
            default: 'fade-in'
        }
    },
    data () {
        return {
            visible: this.value,
            popper: null,
            reference: null,
            domEvents: [],
            exist: false,
            maxHeight: '',
            trigger: 'click'
        }
    },
    computed: {
        cssWidth () {
            return this.width ? `${this.width}px`.replace(/(px){2}$/, 'px') : undefined
        },
        modifiers () {
            return {
                offset: {
                    offset: this.offset
                },
                preventOverflow: {
                    boundariesElement: 'viewport'
                },
                arrow: {
                    enabled: this.arrow,
                    element: '.ui-popover-arrow',
                },
                fullHeight: {
                    enabled: !!this.fullHeight,
                    order: 850,
                    fn: data => {
                        // console.log(data)
                        const reference = data.instance.reference
                        const { top, bottom } = reference.getBoundingClientRect()
                        const tHeight = top - 17
                        const bHeight = window.innerHeight - bottom - 17
                        // // const clientHeight = window.innerHeight
                        const isTop = /top/.test(data.originalPlacement)
                        const isBottom = /bottom/.test(data.originalPlacement)
                        // // data.styles.height = `${height}px`
                        if (isTop || isBottom) {
                            this.maxHeight = `${Math.max(tHeight, bHeight)}px`
                        }
                        // if (isBottom) {
                        //     this.maxHeight = `${bHeight}px`
                        // }
                        return data
                    }
                }
            }
        },
    },
    watch: {
        visible (val) {
            val ? this.createPop() : this.destroyPop()
            if (!this.exist && val) this.exist = true
            this.$emit('change', val)
        },
        value (val) {
            this.visible = val
        }
    },
    methods: {
        show ({ name, reference, type }) {
            if (this.visible && type === 'click' && this.reference === reference) {
                this.hide()
                return
            }
            this.reference = reference
            this.trigger = type
            this.visible = true
            this.pushStack()
            this.$emit('show')
        },
        hide () {
            this.visible = false
            this.popStack()
            this.$emit('hide')
        },
        createPop () {
            this.$nextTick(() => {
                this.popper = new Popper(this.reference, this.$refs.pop, {
                    placement: this.placement,
                    eventsEnabled: this.eventsEnabled,
                    modifiers: this.modifiers
                })
            })
        },
        destroyPop () {
            this.popper.destroy()
            this.popper = null
        },
        bind () {
            bus.$on(`show:popover-${this.name}`, this.show)
            bus.$on(`hide:popover-${this.name}`, this.hide)
        },
        unBind () {
            bus.$off(`show:popover-${this.name}`, this.show)
            bus.$off(`hide:popover-${this.name}`, this.hide)
        }
    },
    created () {
        this.bind()
    },
    mounted () {
        document.body.appendChild(this.$el)
    },
    destroyed () {
        this.unBind()
        if (this.$el.parentNode) this.$el.parentNode.removeChild(this.$el)
        if (this.popper) this.destroyPop()
    }
}
</script>
<style lang="less">
@import '~_/styles/import';

@panel-padding: 8px;
@arrow-offset: -3px;

.ui-popover {
    position: absolute;
    top: -100%;
    left: -100%;
    z-index: -1;

    &[x-placement^='top'] {
        .ui-popover- {
            &panel {
                padding-bottom: @panel-padding;
            }
            &arrow {
                bottom: @arrow-offset;
                border-top-color: #fff;
            }
        }
    }
    &[x-placement^='right'] {
        .ui-popover- {
            &panel {
                padding-left: @panel-padding;
            }
            &arrow {
                left: @arrow-offset;
                border-right-color: #fff;
            }
        }
    }
    &[x-placement^='bottom'] {
        .ui-popover- {
            &panel {
                padding-top: @panel-padding;
            }
            &arrow {
                top: @arrow-offset;
                border-bottom-color: #fff;
            }
        }
    }
    &[x-placement^='left'] {
        .ui-popover- {
            &panel {
                padding-right: @panel-padding;
            }
            &arrow {
                right: @arrow-offset;
                border-left-color: #fff;
            }
        }
    }

    &-panel {
        position: relative;
        min-width: @popover-min-width;
        filter: drop-shadow(@popover-shadow);
    }
    &-content {
        max-height: 100vh;
        overflow-y: auto;
        background: #fff;
        border-radius: @popover-radius;
    }
    &-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border: 6px solid transparent;
    }
}
</style>
