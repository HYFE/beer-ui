
class AutoHeight {
    constructor(el) {
        this.$el = el
        this.value = el.value
        this.borderWidth = window.getComputedStyle(el, null).borderWidth.replace('px', '')

        this.initDom()
        this.resize()
        this.bind()
    }

    initDom() {
        this.$el.style.resize = 'none'
        this.$el.style.boxSizing = 'border-box'
    }
    bind () {
        this.$el.addEventListener('input', this.resize)
    }

    unbind() {
        this.$el.removeEventListener('input', this.resize)
    }

    resize = e => {
        this.changeOverflow()
        this.setHeight()
    }

    changeOverflow() {
        const overflowY = window.getComputedStyle(this.$el, null).overflowY
        if (overflowY === 'hidden') {
            this.$el.style.overflowY = 'scroll'
            this.$el.style.overflowY = 'hidden'
            return
        }
        this.$el.style.overflowY = 'hidden'
    }

    setHeight() {
        const originalHeight = this.$el.style.height
        this.$el.style.height = 'auto'
        const endHeight = this.$el.scrollHeight
        if (endHeight === 0) {
            this.$el.style.height = originalHeight
            return
        }
        this.$el.style.height = `${endHeight + this.borderWidth * 2}px`
    }
}

const plugin = {
    inserted(el) {
        if(el.tagName !== 'TEXTAREA') return
        el.__AutoHeight = new AutoHeight(el)
    },
    unbind(el) {
        if(el.__AutoHeight) {
            el.__AutoHeight.unbind()
            delete el.__AutoHeight
        }
    },
    install(Vue) {
        Vue.directive('autoHeight', plugin)
    }
}

export default plugin
