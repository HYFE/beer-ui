<template>
    <transition :name="amimate"
                @after-leave="transclude = false">
        <ul class="ui-dropdown-menu"
            :style="{ zIndex: cssIndex }"
            v-show="visible"
            v-where-close="{ visible, handle: handleWhereClose }"
            v-transclude="transclude"
            ref="pop">
            <slot></slot>
        </ul>
    </transition>
</template>
<script>
import Popper from '../../libs/popper'
import zIndex from '../../mixins/zIndex'
import whereClose from '../../directives/whereClose'
import transclude from '../../directives/transclude'

export default {
    name: 'uiDropdownMenu',
    directives: {
        whereClose,
        transclude
    },
    mixins: [zIndex],
    data () {
        return {
            reference: null,
            popper: null,
            transclude: false,
            cssIndex: this.zIndex
        }
    },
    computed: {
        visible () {
            return this.$parent.visible
        },
        placement () {
            return this.$parent.placement
        },
        amimate () {
            return `zoom-in-${this.placement.replace('-', '')}`
        },
    },
    watch: {
        visible (val) {
            if (val) {
                this.cssIndex = this.zIndex || this.nextIndex()
                this.transclude = true
                this.createPopover()
            }
        }
    },
    methods: {
        hide() {
            this.$parent.hide()
        },
        handleWhereClose (target) {
            if (this.reference && this.reference.contains(target)) return
            this.hide()
        },
        createPopover () {
            if (!this.popper) {
                this.$nextTick(() => {
                    this.popper = new Popper(this.reference, this.$refs.pop, {
                        placement: this.placement,
                        modifiers: {
                            computeStyle: {
                                gpuAcceleration: false
                            },
                        },
                    })
                })
                return
            }
            this.popper.update()
        },
        destroyPopover () {
            if (!this.popper) return
            this.popper.destroy()
            this.popper = null
        },
        toggle () {
            this.$parent.toggle()
        },
        bind () {
            this.reference = this.$parent.$slots.default[0].elm
            this.reference.addEventListener('click', this.toggle)
        },
        unBind () {
            this.reference.removeEventListener('click', this.toggle)
        },
    },
    mounted () {
        this.bind()
    },
    update () {
        if (this.popper) this.popper.update()
    },
    destroyed () {
        this.unBind()
        this.destroyPopover()
    }
}
</script>
<style lang="less">
@import '../../styles/import';

.ui-dropdown-menu {
    display: inline-block;
    min-width: @popover-min-width;
    padding: 4px 0;
    background: #fff;
    border-radius: 4px;
    box-shadow: @popover-shadow;
    .ui-divider {
        margin-top: 4px;
        margin-bottom: 4px;
    }
}

.zoom-in(@origin) {
    &enter-active,
    &leave-active {
        opacity: 1;
        transform: scale(1);
        transition: opacity 0.16s ease-in-out, transform 0.16s ease-in-out;
        transform-origin: @origin;
    }
    &enter,
    &leave-active {
        opacity: 0;
        transform: scale(0);
    }
}

.zoom-in- {
    &bottomstart- {
        .zoom-in(20% top);
    }
    &bottom- {
        .zoom-in(center top);
    }
    &bottomend- {
        .zoom-in(80% top);
    }
    &topstart- {
        .zoom-in(20% bottom);
    }
    &top- {
        .zoom-in(center bottom);
    }
    &topend- {
        .zoom-in(80% bottom);
    }
}
</style>
