const popStack = []

const manager = {
    push(name) {
        popStack.push(name)
        console.log(popStack)
    },
    pop() {
        popStack.pop()
    },
    isLast(name) {
        console.log(name, popStack)
        return name === popStack[popStack.length - 1]
    },
    remove(name) {
        if(manager.isLast(name)) manager.pop()
    }
}

export default manager
