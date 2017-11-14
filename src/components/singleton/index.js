import VM from 'vue'

const Instance = (Component, el) => (options = {}) => {
    const vm = new VM({
        // data: _props,
        render(h) {
            return h(Component, {
                props: options.props,
                on: options.on
            })
        }
    }).$mount(el)
    document.body.appendChild(vm.$el)
    return vm.$children[0]
}

export default {
    install(Vue, config) {
        Vue.prototype[config.method] = Instance(config)
    }
}
