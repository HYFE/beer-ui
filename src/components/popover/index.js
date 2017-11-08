import popover from './popover'
import holder from './holder'
import directive from './directive'

popover.install = Vue => {
    Vue.directive('popover', directive)
    Vue.component(popover.name, popover)
    Vue.component(holder.name, holder)
}

export default popover
