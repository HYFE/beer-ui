
class AutoHeight {
    constructor(el) {
        this.el = el
        this.value = el.value
        this.borderWidth = window.getComputedStyle(el, null).borderWidth.replace('px', '')

        this.initDom()
        this.resize()
    }

    initDom() {
        this.el.style.resize = 'none'
        this.el.style.boxSizing = 'border-box'
    }

    resize() {
        this.changeOverflow(this.el)
        this.setHeight(this.el)
    }

    changeOverflow = dom => {
        const overflowY = window.getComputedStyle(dom, null).overflowY
        if (overflowY === 'hidden') {
            dom.style.overflowY = 'scroll'
            dom.style.overflowY = 'hidden'
            return
        }
        dom.style.overflowY = 'hidden'
    }

    setHeight = dom => {
        const originalHeight = dom.style.height
        const endHeight = dom.scrollHeight
        dom.style.height = 'auto'
        if (endHeight === 0) {
            dom.style.height = originalHeight
            return
        }
        dom.style.height = `${endHeight + this.borderWidth * 2}px`
    }
}

export default {
    name: 'AutoHeight',
    inserted(el, binding, node) {
        if(node.tag !== 'textarea') return
        el._AutoHeight = new AutoHeight(el)
    },
    update(el, binding) {
        if(el._AutoHeight) {
            el._AutoHeight.resize()
        }
    },
    unbind(el) {
        if(el._AutoHeight) {
            delete el._AutoHeight
        }
    }
}
