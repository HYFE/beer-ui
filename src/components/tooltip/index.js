import './tooltip.less'
import Popper from '../../libs/popper'
import nextIndex from '../../utils/zIndex'

export default class Tooltip {
    constructor(el, { text, placement, theme = '' }) {
        this.$el = el
        this.text = text
        this.placement = placement
        this.theme = /dark|light/.test(theme) ? theme : Tooltip.config.theme

        this.bind()
    }

    globalId = 'uiTooltip'
    popover = null
    timer = null

    get visible() {
        return this.tooltip.style.display === 'block'
    }

    set visible(value) {
        this.tooltip.style.display = value ? 'block' : 'none'
    }

    createEl() {
        let tooltip = document.getElementById(this.globalId)
        if (!tooltip) {
            tooltip = document.createElement('div')
            tooltip.id = this.globalId
            document.body.appendChild(tooltip)
        }
        tooltip.className = `ui-tooltip ui-tooltip-${this.theme}`
        tooltip.innerHTML = `<div class="ui-tooltip-arrow"></div><div class="ui-tooltip-content">${this.text}</div>`
        tooltip.style.zIndex = nextIndex()
        this.tooltip = tooltip
    }

    destroyPop() {
        if(this.popover) {
            this.popover.destroy()
            this.popover = null
        }
    }

    show = e => {
        if(this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            this.createEl()
            this.destroyPop()
            this.visible = true

            this.popover = new Popper(this.$el, this.tooltip, {
                placement: this.placement,
                modifiers: {
                    arrow: {
                        enabled: Tooltip.config.arrow,
                        element: '.ui-tooltip-arrow',
                    },
                    computeStyle: {
                        gpuAcceleration: false
                    }
                },
                onCreate: data => {
                    this.tooltip.classList.add('in')
                }
            })
        }, Tooltip.config.delay)
    }

    hide = e => {
        if(this.tooltip) this.tooltip.classList.remove('in')
        if(this.timer) clearTimeout(this.timer)
        if(!this.popover) return
        this.timer = setTimeout(() => {
            this.visible = false
            this.destroyPop()
        }, 300)
    }

    update({ text }) {
        this.text = text
        if(this.tooltip && this.visible) {
            this.tooltip.querySelector('.ui-tooltip-content').innerHTML = text
            this.popover && this.popover.update()
        }
    }

    bind() {
        this.$el.addEventListener('mouseenter', this.show)
        this.$el.addEventListener('mouseleave', this.hide)
    }

    unbind() {
        this.destroyPop()
        this.$el.removeEventListener('mouseenter', this.show)
        this.$el.removeEventListener('mouseleave', this.hide)
        if(this.timer) clearTimeout(this.timer)
    }

    static config = {
        theme: 'dark', // or light
        arrow: true,
        delay: 500
    }

    static install(Vue, config = {}) {
        Tooltip.config = {
            ...Tooltip.config,
            ...config
        }

        Vue.directive('tooltip', {
            bind(el, { value, arg = 'top', modifiers }) {
                const tooltip = new Tooltip(el, {
                    text: value,
                    placement: arg,
                    theme: Object.keys(modifiers)[0] || ''
                })
                el.__TOOLTIP = tooltip
            },
            update(el, { value, oldValue }) {
                if(oldValue && value !== oldValue) {
                    el.__TOOLTIP.update({
                        text: value
                    })
                }
            },
            unbind(el) {
                if(el.__TOOLTIP) {
                    el.__TOOLTIP.unbind()
                    delete el.__TOOLTIP
                }
            }
        })
    }
}
