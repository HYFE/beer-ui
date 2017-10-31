import './styles/index.less'
import divider from './components/divider'
import { list, listItem } from './components/list'
import expandTransition from './components/expandTransition'

export const install = Vue => {
    Vue.component(divider.name, divider)
    Vue.component(list.name, list)
    Vue.component(listItem.name, listItem)
    Vue.component(expandTransition.name, expandTransition)
}

export default {
    install
}
