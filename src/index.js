import './styles/base.less'
import './styles/icons.css'
import divider from './components/divider'
import { list, listItem } from './components/list'
import expandTransition from './components/expandTransition'
import { tabbar, tab } from './components/tabbar'
import { tabs, tabPanel } from './components/tabs'
import popover from './components/popover'
import tooltip from './components/tooltip'
import editArea from './components/editArea'

export const install = (Vue, option = {}) => {
    Vue.component(divider.name, divider)
    Vue.component(list.name, list)
    Vue.component(listItem.name, listItem)
    Vue.component(expandTransition.name, expandTransition)
    Vue.component(tabbar.name, tabbar)
    Vue.component(tab.name, tab)
    Vue.component(tabs.name, tabs)
    Vue.component(tabPanel.name, tabPanel)
    Vue.component(editArea.name, editArea)
    Vue.use(popover)
    Vue.use(tooltip, option.tooltip)
}

export default {
    install
}
