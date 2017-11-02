import './styles/base.less'
import divider from './components/divider'
import { list, listItem } from './components/list'
import expandTransition from './components/expandTransition'
import { tabbar, tab } from './components/tabbar'
import { tabs, tabPanel } from './components/tabs'

export const install = Vue => {
    Vue.component(divider.name, divider)
    Vue.component(list.name, list)
    Vue.component(listItem.name, listItem)
    Vue.component(expandTransition.name, expandTransition)
    Vue.component(tabbar.name, tabbar)
    Vue.component(tab.name, tab)
    Vue.component(tabs.name, tabs)
    Vue.component(tabPanel.name, tabPanel)
}

export default {
    install
}
