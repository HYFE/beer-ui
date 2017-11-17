<template>
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
</template>
<script>
import { bus } from './directive'
import uiPopover from './popover'

export default {
    name: 'uiPopoverHolder',
    props: {
        settings: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    components: {
        uiPopover
    },
    data () {
        return {
            component: null,
            props: null,
            events: null,
            popoverProps: null,
            popoverEvents: null,
            visible: false
        }
    },
    methods: {
        handler (options, payload, cb) {
            this.syncValue(options, true)
            this.component = options.component
            if(!this.visible) this.$nextTick(cb)
            else this.$refs.pop.updatePopper(payload)
        },
        closePopover() {
            this.visible = false
        },
        syncValue({ component, popover = {}, ...options }, changed) {
            if(!changed && this.component && this.component !== component) return
            popover.name = 'singleton'
            const { events: popoverEvents, ...popoverProps } = popover
            const { events, ...props } = options
            this.popoverProps = { ...this.settings, ...popoverProps }
            this.popoverEvents = popoverEvents
            this.props = props
            this.events = events
        }
    },
    created () {
        bus.$on('singleton:popover', this.handler)
        bus.$on('singleton:popover.sync', this.syncValue)
    },
    destroyed () {
        bus.$off('singleton:popover', this.handler)
        bus.$off('singleton:popover.sync', this.syncValue)
    }
}
</script>
