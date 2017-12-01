import dropdown from './dropdown'
import dropdownMenu from './dropdownMenu'
import dropdownItem from './dropdownItem'

dropdown.install = Vue => {
    Vue.component(dropdown.name, dropdown)
    Vue.component(dropdownMenu.name, dropdownMenu)
    Vue.component(dropdownItem.name, dropdownItem)
}
dropdown.menu = dropdownMenu
dropdown.item = dropdownItem

export default dropdown
