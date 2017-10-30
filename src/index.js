import './styles/index.less'
import divider from './components/divider'
import { list, listItem } from './components/list'

export const install = Vue => {
    Vue.component(divider.name, divider)
    Vue.component(list.name, list)
    Vue.component(listItem.name, listItem)
}

export default {
    install
}
