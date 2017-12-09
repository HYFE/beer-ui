import Vue from 'vue'
import guid from '../../utils/guid'

export const bus = new Vue()

class PopTrigger {
    constructor(el, { name, options, trigger = 'click', only = false }) {
        this.$el = el
        this.trigger = trigger
        this.only = only
        this.name = only ? 'onlyPopover' : name
        this.guid = only ? guid('onlyPopover') : null
        this.options = options
        this.bindEvents()
    }

    hoverDelay = 200

    payload(event) {
        return {
            reference: this.$el,
            type: this.trigger,
            event
        }
    }

    update({ name, options }) {
        if (name) this.name = name
        if (options) {
            this.options = options
            bus.$emit('sync:popover.only', this.guid, this.options)
        }
    }

    show(e) {
        bus.$emit(`show:popover-${this.name}`, this.payload(e))
    }

    handleShow = e => {
        this.only
            ? bus.$emit('popover.only', this.guid, this.options, this.payload(e), () =>
                  this.show(e)
              )
            : this.show(e)
    }

    handleHide = e => {
        bus.$emit(`hide:popover-${this.name}`, this.payload(e))
    }

    _timer = null
    onMouseEnter = e => {
        if (this._timer) clearTimeout(this._timer)
        if(this.$el.contains(e.target)) {
            this._timer = setTimeout(() => this.handleShow(e), this.hoverDelay)
        } else {
            this.handleShow(e)
        }
    }

    onMouseLeave = e => {
        if (this._timer) clearTimeout(this._timer)
        this._timer = setTimeout(() => this.handleHide(e), 200)
    }

    bindEvents() {
        const $el = this.$el
        switch (this.trigger) {
            case 'hover':
                $el.addEventListener('mouseenter', this.onMouseEnter)
                $el.addEventListener('mouseleave', this.onMouseLeave)
                bus.$emit(`hover:popover-${this.name}`, this.onMouseEnter, this.onMouseLeave, hoverDelay => (this.hoverDelay = hoverDelay))
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
        switch (this.trigger) {
            case 'hover':
                $el.removeEventListener('mouseenter', this.onMouseEnter)
                $el.removeEventListener('mouseleave', this.onMouseLeave)
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
        const trigger = modifiers.hover ? 'hover' : modifiers.focus ? 'focus' : 'click' // eslint-disable-line
        const instance = new PopTrigger(el, {
            name,
            trigger,
            options: value,
            only: modifiers.only
        })
        el.__POP_TRIGGER = instance
    },
    update(el, { value, oldValue, modifiers = {} }) {
        if (el.__POP_TRIGGER && value && value !== oldValue) {
            const updateVal = modifiers.name ? { name: value } : { options: value }
            el.__POP_TRIGGER.update(updateVal)
        }
    },
    unbind(el) {
        el.__POP_TRIGGER.destroy()
        delete el.__POP_TRIGGER
    }
}
