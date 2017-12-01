import tabs from './tabs'
import tabPanel from './tabPanel'

tabs.panel = tabPanel
tabs.install = Vue => {
    Vue.component(tabs.name, tabs)
    Vue.component(tabPanel.name, tabPanel)
}

export default tabs
