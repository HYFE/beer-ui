import list from './list'
import listItem from './listItem'
import subHeader from './subHeader'

const install = Vue => {
    Vue.component(list.name, list)
    Vue.component(listItem.name, listItem)
    Vue.component(subHeader.name, subHeader)
}

export {
    list,
    listItem,
    install,
    subHeader
}
