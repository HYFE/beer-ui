<template>
    <transition :name="transitionName">
        <div class="ui-popover"
             :style="{ zIndex: cssIndex }"
             :class="{ __arrow: arrow }"
             v-if="exist && (reset ? visible : true)"
             v-show="visible"
             v-transclude="transclude"
             ref="pop">
            <div class="ui-popover-panel"
                 v-where-close="{ visible, handle: hideOnClickOutSide}"
                 :style="{ width: cssWidth }">
                <div class="ui-popover-arrow"
                     v-if="arrow"></div>
                <div class="ui-popover-content"
                     :style="{ maxHeight }">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
// import Vue from 'vue'
import { bus } from './directive'
import popManage from './popManage'
import Popper from '../../libs/popper'
import zIndex from '../../mixins/zIndex'
import transclude from '../../directives/transclude'

const component = {
    name: 'uiPopover',
    mixins: [popManage, zIndex],
    directives: {
        transclude
    },
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
        mountPoint: {
            type: [Boolean, String],
            default: true
        },
        transitionName: {
            type: String,
            default: 'fade-in'
        },
        reset: { // 重绘 or 保留状态
            type: Boolean,
            default: false
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
            trigger: 'click',
            cssIndex: this.zIndex
        }
    },
    computed: {
        cssWidth () {
            return this.width ? `${this.width}px`.replace(/(px){2}$/, 'px') : undefined
        },
        transclude () {
            return this.visible ? this.mountPoint : false
        }
    },
    watch: {
        visible (val) {
            val ? this.createPop() : this.destroyPop()
            if (!this.exist && val) this.exist = true
            this.$emit('change', val)
            this.$emit('input', val)
        },
        value (val) {
            this.visible = val
        },
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
        handleFullHeight () {
            if (!this.fullHeight) return
            const clientHeight = window.innerHeight
            const { top, bottom } = this.reference.getBoundingClientRect()
            if (/top|bottom/.test(this.placement)) {
                const tHeight = top - 15
                const bHeight = clientHeight - bottom - 15
                this.maxHeight = `${Math.max(tHeight, bHeight)}px`
            } else {
                this.maxHeight = `${clientHeight - 10}px`
            }
        },
        createPop () {
            this.cssIndex = this.zIndex || this.nextIndex()
            this.handleFullHeight()
            this.$nextTick(() => {
                this.popper = new Popper(this.reference, this.$refs.pop, {
                    placement: this.placement,
                    eventsEnabled: this.eventsEnabled,
                    onCreate: this.onPopCreate,
                    onUpdate: this.onPopUpdate,
                    modifiers: {
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
                        // test: {
                        //     enabled: true,
                        //     order: 1000,
                        //     fn: data => console.log(data)
                        // }
                    },
                })
            })
        },
        updatePopper ({ reference }) {
            if (this.reference === reference) {
                this.hide()
                return
            }
            this.reference = reference
            if (this.popper) {
                this.destroyPop()
                this.createPop()
            }
        },
        onPopCreate (data) {
            this.handleFullHeight()
            this.$emit('createPopover', data)
        },
        onPopUpdate (data) {
            this.$emit('updatePopover', data)
        },
        destroyPop () {
            if (!this.popper) return
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
        },
    },
    created () {
        this.bind()
    },
    destroyed () {
        this.unBind()
        this.destroyPop()
    }
}

export default component
</script>
<style lang="less">
@import '../../styles/import';

@panel-padding: 4px;
@panel-arrow-padding: 5px + @panel-padding;
@arrow-offset: -3px;

.ui-popover {
    position: absolute;
    top: -100%;
    left: -100%;
    z-index: -1;
    transition: opacity 0.4s ease-in-out;

    &[x-placement^='top'] {
        .ui-popover-panel {
            padding-bottom: @panel-padding;
        }
    }
    &[x-placement^='right'] {
        .ui-popover-panel {
            padding-left: @panel-padding;
        }
    }
    &[x-placement^='bottom'] {
        .ui-popover-panel {
            padding-top: @panel-padding;
        }
    }
    &[x-placement^='left'] {
        .ui-popover-panel {
            padding-right: @panel-padding;
        }
    }

    &.__arrow {
        &[x-placement^='top'] {
            .ui-popover- {
                &panel {
                    padding-bottom: @panel-arrow-padding;
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
                    padding-left: @panel-arrow-padding;
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
                    padding-top: @panel-arrow-padding;
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
                    padding-right: @panel-arrow-padding;
                }
                &arrow {
                    right: @arrow-offset;
                    border-left-color: #fff;
                }
            }
        }
    }

    &[x-out-of-boundaries] {
        opacity: 0;
        visibility: hidden;
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
