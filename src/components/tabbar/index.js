import tabbar from './tabbar'
import tab from './tab'

tabbar.item = tab
tabbar.install = Vue => {
    Vue.component(tab.name, tab)
    Vue.component(tabbar.name, tabbar)
}

export default tabbar
