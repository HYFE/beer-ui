import popover from './popover'
import Holder from './holder'
import directive from './directive'

popover.install = Vue => {
    Vue.directive('popover', directive)
    Vue.component(popover.name, popover)
    const holder = Holder(Vue)
    Vue.component(holder.name, holder)
}

export default popover
