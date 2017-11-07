import popover from './popover'
import vPopover from './directive'

const install = Vue => {
    Vue.directive('popover', vPopover)
    Vue.component(popover.name, popover)
}

export default {
    install
}
