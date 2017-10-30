import css from './styles/index.less'
import list from './components/list'

export const install = Vue => {
    Vue.comments(list)
}

export default {
    install
}
