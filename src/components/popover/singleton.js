import popHolder from './holder'

export default (Vue, settings = {}) => {
    const Component = Vue.extend({
        render(h) {
            return h(popHolder, {
                props: {
                    settings
                }
            })
        }
    })
    const instance = new Component().$mount()
    document.body.appendChild(instance.$el)
    return instance.$children[0]
}
