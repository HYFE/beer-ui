const popStack = []

const manager = {
    push(name) {
        popStack.push(name)
    },
    pop() {
        popStack.pop()
    },
    isLast(name) {
        return name === popStack[popStack.length - 1]
    },
    remove(name) {
        if(manager.isLast(name)) manager.pop()
    }
}

export default manager
