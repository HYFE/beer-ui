// Fork by https://github.com/calebroseland/vue-dom-portal

/**
 * Get target DOM Node
 * @param {(Node|string|Boolean)} [node=document.body] DOM Node, CSS selector, or Boolean
 * @return {Node} The target that the el will be appended to
 */
function getTarget(node = document.body) {
    if (node === true) return document.body
    return node instanceof window.Node ? node : document.querySelector(node)
}

export default {
    inserted(el, { value }) {
        const parentNode = el.parentNode
        const target = getTarget(value)
        if (!parentNode || parentNode === target) {
            console.log(el)
            return
        }
        const placeholder = document.createComment('')
        let hasMovedOut = false

        if (value !== false) {
            // 用注释节点替换组件节点
            parentNode.replaceChild(placeholder, el)
            // 把组件节点放到指定的位置
            target.appendChild(el)
            // 标记组件节点已移动
            hasMovedOut = true
        }
        // 缓存原来的位置信息
        if(!el.__TRANSCLUDE) {
            el.__TRANSCLUDE = { parentNode, placeholder, hasMovedOut }
        }
    },
    componentUpdated(el, { value }) { // 确保在 children 全部更新时调用（vs: `update`）
        const { parentNode, placeholder, hasMovedOut } = el.__TRANSCLUDE
        if (!hasMovedOut && value) {
            // 如果节点没有移动，且存在目标位置就移动到目标位置
            parentNode.replaceChild(placeholder, el)
            getTarget(value).appendChild(el)
            el.__TRANSCLUDE = {
                parentNode,
                placeholder,
                hasMovedOut: true
            }
        } else if (hasMovedOut && value === false) {
            // 节点已移动，但取消目标位置，进行节点重置
            parentNode.replaceChild(el, placeholder)
            el.__TRANSCLUDE = {
                parentNode,
                placeholder,
                hasMovedOut: false
            }
        } else if (value) {
            // 已经移动过
            getTarget(value).appendChild(el)
        }
    },
    unbind(el, { value }) {
        if(!el.__TRANSCLUDE) return
        // const { placeholder, parentNode, hasMovedOut } = el.__TRANSCLUDE
        // if(hasMovedOut) { // v-if 时会在外部遗留一个注释节点，需要手动移除
        //     // parentNode.appendChild(el)
        //     const target = getTarget(value)
        //     // 移除注释节点
        //     // target.lastChild.nodeType === 8 && target.removeChild(target.lastChild)
        //     // 返回原位置
        //     console.log(parentNode, placeholder, target.lastChild)
        //     // parentNode.replaceChild(placeholder, target.lastChild)
        // }
        delete el.__TRANSCLUDE
    }
}
