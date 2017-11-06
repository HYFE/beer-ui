<template>
    <transition name="fade-in">
        <div class="ui-popover"
             :class="{ 'ui-popover-full': true }"
             :style="{ zIndex: cssIndex }"
             v-if="exist"
             v-show="popVisble"
             ref="pop">
            <div class="ui-popover-panel"
                 v-where-close="{ visible: popVisble, handle: hideOnClickOutSide}">
                <div class="ui-popover-arrow"></div>
                <div class="ui-popover-content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import popManage from './popManage'
import Popper from '_/libs/popper'
import zIndex from '_/utils/zIndex'

export default {
    name: 'uiPopover',
    // components: {
    //     uiMask
    // },
    mixins: [popManage, zIndex],
    props: {
        visible: Boolean,
        for: {
            type: String,
            required: true
        },
        trigger: {
            type: String,
            default: 'click'
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
        fullHeight: Boolean,
    },
    data () {
        return {
            popper: null,
            reference: null,
            domEvents: [],
            exist: false,
        }
    },
    computed: {
        modifiers() {
            return {
                offset: {
                    offset: this.offset
                },
                arrow: {
                    enabled: this.arrow,
                    element: '.ui-popover-arrow',
                },
                fullHeight: {
                    enabled: true,
                    order: 1000,
                    fn(data) {
                        console.log(data)
                        return data
                    }
                }
            }
        },
        popVisble: {
            get () {
                return this.visible
            },
            set (val) {
                this.$emit('update:visible', val)
            }
        },
    },
    watch: {
        visible (val) {
            val ? this.createPop() : this.hidePop()
            if (!this.exist && val) this.exist = true
        }
    },
    methods: {
        showPop () {
            if (this.popVisble) {
                this.popVisble = false
                return
            }
            this.popVisble = true
            this.$nextTick(() => {
                this.pushStack()
            })
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
        hidePop () {
            this.popper.destroy()
            this.popper = null
        },
        hideOnLeave () {
            this.popVisble = false
        },
        bind () {
            const reference = this.$parent.$refs[this.for]
            const refEl = reference instanceof HTMLElement ? reference : reference.$el
            switch (this.trigger) {
                case 'hover':
                    refEl.addEventListener('mouseenter', this.showPop)
                    refEl.addEventListener('mouseleave', this.hideOnLeave)
                    break
                case 'focus':
                    refEl.addEventListener('focus', this.showPop)
                    refEl.addEventListener('blur', this.hideOnLeave)
                    break
                default:
                    refEl.addEventListener('click', this.showPop)
            }
            this.reference = refEl
        },
        unBind () {
            switch (this.trigger) {
                case 'hover':
                    this.reference.removeEventListener('mouseenter', this.showPop)
                    this.reference.removeEventListener('mouseleave', this.hideOnLeave)
                    break
                case 'focus':
                    this.reference.removeEventListener('focus', this.showPop)
                    this.reference.removeEventListener('blur', this.hideOnLeave)
                    break
                default:
                    this.reference.removeEventListener('click', this.showPop)
            }
        }
    },
    created () {
        console.log('created')
        this.bind()
    },
    mounted () {
        document.body.appendChild(this.$el)
    },
    destroyed () {
        this.unBind()
        if (this.$el.parentNode) this.$el.parentNode.removeChild(this.$el)
        if (this.popper) this.hidePop()
    }
}
</script>
<style lang="less">
@import '~_/styles/import';

.ui-popover {
    position: absolute;
    top: -100%;
    left: -100%;
    z-index: -1;
    min-width: @popover-min-width;

    &[x-placement^='top'] {
        .ui-popover- {
            &panel {
                padding-bottom: 8px;
            }
            &arrow {
                bottom: -3px;
                border-top-color: #fff;
            }
        }
    }
    &[x-placement^='right'] {
        .ui-popover- {
            &panel {
                padding-left: 8px;
            }
            &arrow {
                left: -3px;
                border-right-color: #fff;
            }
        }
    }
    &[x-placement^='bottom'] {
        .ui-popover- {
            &panel {
                padding-top: 8px;
            }
            &arrow {
                top: -3px;
                border-bottom-color: #fff;
            }
        }
    }
    &[x-placement^='left'] {
        .ui-popover- {
            &panel {
                padding-right: 8px;
            }
            &arrow {
                right: -3px;
                border-left-color: #fff;
            }
        }
    }

    &-panel {
        position: relative;
        filter: drop-shadow(@popover-shadow);
    }
    &-content {
        background: #fff;
        border-radius: @popover-radius;
    }
    &-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border: 6px solid transparent;
    }
    &-full {
        // &[x-placement^="bottom"] {
        //     bottom: 3px;
        // }
        // &[x-placement^="top"] {
        //     top: 3px;
        // }
    }
}
</style>
