import Vue from 'vue'

export const bus = new Vue()

class PopTrigger {
    constructor(el, { name, options, trigger = 'click' }) {
        this.$el = el
        this.trigger = trigger
        this.options = options
        this.isSingleton = !!options && !name
        this.name = this.isSingleton ? 'singleton' : name
        this.bindEvents()
    }

    payload(event) {
        return {
            reference: this.$el,
            type: this.trigger,
            event
        }
    }

    update({ name, options }) {
        if(name) this.name = name
        if(options) {
            this.options = options
            bus.$emit('singleton:popover.sync', this.options)
        }
    }

    show(e) {
        bus.$emit(`show:popover-${this.name}`, this.payload(e))
    }

    handleShow = e => {
        this.isSingleton
            ? bus.$emit('singleton:popover', this.options, this.payload(e), () => this.show(e))
            : this.show(e)
    }

    handleHide = e => {
        bus.$emit(`hide:popover-${this.name}`, this.payload(e))
    }

    bindEvents() {
        const $el = this.$el
        switch(this.trigger) {
            case 'hover':
                $el.addEventListener('mouseenter', this.handleShow)
                $el.addEventListener('mouseleave', this.handleHide)
                break
            case 'focus':
                $el.addEventListener('focus', this.handleShow)
                $el.addEventListener('blur', this.handleHide)
                break
            default:
                $el.addEventListener('click', this.handleShow)
        }
    }

    destroy() {
        const $el = this.$el
        switch(this.trigger) {
            case 'hover':
                $el.removeEventListener('mouseenter', this.handleShow)
                $el.removeEventListener('mouseleave', this.handleHide)
                break
            case 'focus':
                $el.removeEventListener('focus', this.handleShow)
                $el.removeEventListener('blur', this.handleHide)
                break
            default:
                $el.removeEventListener('click', this.handleShow)
        }
    }
}

export default {
    inserted(el, { value, modifiers = {}, arg }) {
        const name = modifiers.name ? value : arg
        const trigger = modifiers.hover ? 'hover' : (modifiers.focus ? 'focus' : 'click')  // eslint-disable-line
        const instance = new PopTrigger(el, {
            name,
            trigger,
            options: value
        })
        el.__POP_TRIGGER = instance
    },
    update(el, { value, oldValue, modifiers = {} }) {
        if(el.__POP_TRIGGER && value && value !== oldValue) {
            const updateVal = modifiers.name ? { name: value } : { options: value }
            el.__POP_TRIGGER.update(updateVal)
        }
    },
    unbind(el) {
        el.__POP_TRIGGER.destroy()
        delete el.__POP_TRIGGER
    }
}
