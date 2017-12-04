import dropdown from './dropdown'
import dropdownMenu from './dropdownMenu'
import dropdownItem from './dropdownItem'
import dropdownGroup from './dropdownGroup'

dropdown.install = Vue => {
    Vue.component(dropdown.name, dropdown)
    Vue.component(dropdownMenu.name, dropdownMenu)
    Vue.component(dropdownItem.name, dropdownItem)
    Vue.component(dropdownGroup.name, dropdownGroup)
}
dropdown.menu = dropdownMenu
dropdown.item = dropdownItem
dropdown.group = dropdownGroup

export default dropdown
