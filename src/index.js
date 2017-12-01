import './styles/base.less'
import './styles/icons.css'
import divider from './components/divider'
import { list, listItem, subHeader } from './components/list'
import expandTransition from './components/expandTransition'
import { tabbar, tab } from './components/tabbar'
import { tabs, tabPanel } from './components/tabs'
import popover from './components/popover'
import tooltip from './components/tooltip'
import editArea from './components/editArea'
import chip from './components/chip'
import avatar from './components/avatar'

export const install = (Vue, option = {}) => {
    Vue.component(divider.name, divider)
    Vue.component(list.name, list)
    Vue.component(subHeader.name, subHeader)
    Vue.component(listItem.name, listItem)
    Vue.component(expandTransition.name, expandTransition)
    Vue.component(tabbar.name, tabbar)
    Vue.component(tab.name, tab)
    Vue.component(tabs.name, tabs)
    Vue.component(tabPanel.name, tabPanel)
    Vue.component(editArea.name, editArea)
    Vue.component(chip.name, chip)
    Vue.component(avatar.name, avatar)
    Vue.use(popover, option.popover)
    Vue.use(tooltip, option.tooltip)
}

export default {
    install
}
