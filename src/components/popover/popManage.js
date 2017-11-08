import whereClose from '_/directives/whereClose'

const popStack = []

export default {
    directives: {
        whereClose
    },
    methods: {
        pushStack() {
            this.trigger === 'click' && popStack.push(this.name)
        },
        popStack() {
            this.trigger === 'click' && popStack.pop()
        },
        hideOnClickOutSide(target) {
            if(this.reference && this.reference.contains(target)) return
            const lastPop = popStack[popStack.length - 1]
            if(lastPop === this.name) {
                this.hide()
            }
        }
    }
}
