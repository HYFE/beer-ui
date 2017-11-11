import list from './list'
import listItem from './listItem'

const install = Vue => {
    Vue.component(list.name, list)
    Vue.component(listItem.name, listItem)
}

export {
    list,
    listItem,
    install
}
