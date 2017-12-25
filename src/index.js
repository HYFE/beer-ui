import './styles/base.less'
import './styles/icons.css'
import Divider from './components/divider'
import List from './components/list'
import ExpandTransition from './components/expandTransition'
import Tabbar from './components/tabbar'
import Tabs from './components/tabs'
import Popover from './components/popover'
import EditArea from './components/editArea'
import Chip from './components/chip'
import Avatar from './components/avatar'
import Dropdown from './components/dropdown'
import Mask from './components/mask'
import Modal from './components/modal'
import LoadMore from './components/loadMore'

import Tooltip from './directives/tooltip'
import WhereClose from './directives/whereClose'
import AutoHeight from './directives/autoHeight'

export const install = (Vue, option = {}) => {
    Vue.component(Divider.name, Divider)
    Vue.use(List)
    Vue.component(ExpandTransition.name, ExpandTransition)
    Vue.use(Tabbar)
    Vue.use(Tabs)
    Vue.component(EditArea.name, EditArea)
    Vue.component(Chip.name, Chip)
    Vue.component(Avatar.name, Avatar)
    Vue.use(Popover, option.popover)
    Vue.use(Tooltip, option.tooltip)
    Vue.use(Dropdown)
    Vue.use(WhereClose)
    Vue.use(AutoHeight)
    Vue.component(Mask.name, Mask)
    Vue.use(Modal)
    Vue.component(LoadMore.name, LoadMore)
}

export default {
    install
}
