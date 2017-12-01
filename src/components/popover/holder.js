import { bus } from './directive'
import uiPopover from './popover'

const template = `
    <ui-popover v-bind="popoverProps"
                v-on="popoverEvents"
                v-if="component"
                v-model="visible"
                ref="pop">
        <component :is="component"
                   v-bind="props"
                   v-on="events"
                   v-if="visible"
                   @close:popover="closePopover"></component>
    </ui-popover>
`

export default Vue => ({
    name: 'uiPopoverHolder',
    template,
    components: {
        uiPopover
    },
    props: {
        settings: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data () {
        return {
            guid: '',
            component: null,
            props: null,
            events: null,
            popoverProps: null,
            popoverEvents: null,
            visible: false
        }
    },
    methods: {
        handler (guid, options, payload, cb) {
            this.guid = guid
            this.syncValue(guid, options, true)
            this.component = options.component
            if(!this.visible) this.$nextTick(cb)
            else this.$refs.pop.updatePopper(payload)
        },
        syncValue(guid, { component, popover = {}, ...options }, changed) {
            if(!changed && this.guid !== guid) return
            popover.name = 'onlyPopover'
            const { events: popoverEvents, ...popoverProps } = popover
            const { events, ...props } = options
            this.popoverProps = { ...this.settings, ...popoverProps }
            this.popoverEvents = popoverEvents
            this.props = props
            this.events = events
        },
        closePopover() {
            this.visible = false
        },
    },
    beforeCreate () {
        Vue.prototype.$popover = this
    },
    created () {
        bus.$on('popover.only', this.handler)
        bus.$on('sync:popover.only', this.syncValue)
    },
    destroyed () {
        bus.$off('popover.only', this.handler)
        bus.$off('sync:popover.only', this.syncValue)
    }
})
