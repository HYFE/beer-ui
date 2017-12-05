import list from './list'
import listItem from './listItem'
import treeItem from './treeItem'
import subHeader from './subHeader'

list.install = Vue => {
    Vue.component(list.name, list)
    Vue.component(listItem.name, listItem)
    Vue.component(treeItem.name, treeItem)
    Vue.component(subHeader.name, subHeader)
}

list.item = listItem
list.treeitem = treeItem
list.subHeader = subHeader

export default list
