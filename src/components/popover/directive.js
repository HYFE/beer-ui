import Vue from 'vue'

export const bus = new Vue()

class PopTrigger {
    constructor(el, { name, trigger = 'click' }) {
        this.$el = el
        this.name = name
        this.trigger = trigger
        this.bindEvents()
    }

    payload(event) {
        return {
            reference: this.$el,
            type: this.trigger,
            event
        }
    }

    showPopover = e => {
        bus.$emit(`show:popover-${this.name}`, this.payload(e))
    }

    hidePopover = e => {
        bus.$emit(`hide:popover-${this.name}`, this.payload(e))
    }

    bindEvents() {
        const $el = this.$el
        switch(this.trigger) {
            case 'hover':
                $el.addEventListener('mouseenter', this.showPopover)
                $el.addEventListener('mouseleave', this.hidePopover)
                break
            case 'focus':
                $el.addEventListener('focus', this.showPopover)
                $el.addEventListener('blur', this.hidePopover)
                break
            default:
                $el.addEventListener('click', this.showPopover)
        }
    }

    destroy() {
        const $el = this.$el
        switch(this.trigger) {
            case 'hover':
                $el.removeEventListener('mouseenter', this.showPopover)
                $el.removeEventListener('mouseleave', this.hidePopover)
                break
            case 'focus':
                $el.removeEventListener('focus', this.showPopover)
                $el.removeEventListener('blur', this.hidePopover)
                break
            default:
                $el.removeEventListener('click', this.showPopover)
        }
    }
}

export default {
    inserted(el, { modifiers, arg }) {
        const name = arg
        const trigger = Object.keys(modifiers)[0]
        const instance = new PopTrigger(el, {
            name,
            trigger
        })
        el.__POP_TRIGGER = instance
    },
    unbind(el) {
        el.__POP_TRIGGER.destroy()
        delete el.__POP_TRIGGER
    }
}
