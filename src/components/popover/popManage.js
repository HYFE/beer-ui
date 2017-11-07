import whereClose from '_/utils/whereClose'

const popStack = []

export default {
    directives: {
        whereClose
    },
    methods: {
        pushStack() {
            popStack.push(this.name)
        },
        popStack() {
            popStack.pop()
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
