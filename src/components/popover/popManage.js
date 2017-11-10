import whereClose from '../../directives/whereClose'

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
            if(target.__POP_TRIGGER && target.__POP_TRIGGER.name === this.name) return
            const lastPop = popStack[popStack.length - 1]
            if(lastPop === this.name) {
                console.log('hideOnClickOutSide', this.name)
                this.hide()
            }
        }
    }
}
