/**
 * 点击文档触发当前节点关闭/隐藏
 *
 * 使用：
 *    `visible`: 显示状态
 *    `handle`: 执行关闭/隐藏操作的函数
 *    <div v-where-close="{ visible: Boolen, handle: Function }"></div>
 */
let startClick
const queue = {}
const uniqueKey = () => `WHERE_CLOSE_${Object.keys(queue).length + 1}`

const whereClose = target => {
    Object.values(queue).forEach(({ element, visible, handle }) => {
        if (visible && target === startClick && !element.contains(target)) {
            handle(target)
        }
    })
}

// mouse left
const isLeftClick = e => e.button === 0 || e.which === 1

document.addEventListener('mousedown', e => {
    if(isLeftClick(e)) startClick = e.target
})
document.addEventListener('mouseup', e => isLeftClick(e) && whereClose(e.target))

export default {
    bind(el, { value: { visible, handle } }) {
        const key = uniqueKey()
        queue[key] = {
            element: el,
            visible,
            handle
        }
        el._WHERE_CLOSE_KEY = key
    },
    update(el, { value: { visible, handle } }) {
        queue[el._WHERE_CLOSE_KEY] = {
            element: el,
            visible,
            handle
        }
    },
    unbind(el) {
        delete queue[el._WHERE_CLOSE_KEY]
    }
}
