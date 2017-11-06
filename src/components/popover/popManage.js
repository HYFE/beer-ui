import whereClose from '_/utils/whereClose'

const popStack = []

export default {
    directives: {
        whereClose
    },
    methods: {
        pushStack() {
            popStack.push(this.$refs.pop)
        },
        hideOnClickOutSide(target) {
            if(this.reference && this.reference.contains(target)) return
            const lastPop = popStack[popStack.length - 1]
            if(lastPop === this.$refs.pop) {
                this.popVisble = false
            }
        }
    }
}
