<template>
    <ui-popover v-bind="popoverProps"
                v-on="popoverEvents"
                v-if="component"
                v-model="visible"
                ref="pop">
        <component :is="component"
                   v-bind="props"
                   v-on="events"
                   @close:popover="closePopover"></component>
    </ui-popover>
</template>
<script>
import { bus } from './directive'
import uiPopover from './popover'

export default {
    name: 'uiPopoverHolder',
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
        handler ({ component, popover = {}, ...options }, payload, cb) {
            // this.visible = false
            popover.name = 'singleton'
            const { events: popoverEvents, ...popoverProps } = popover
            const { events, ...props } = options
            this.popoverProps = popoverProps
            this.popoverEvents = popoverEvents
            this.props = props
            this.events = events
            this.component = component
            if(!this.visible) this.$nextTick(cb)
            else this.$refs.pop.updatePopper(payload)
        },
        closePopover() {
            this.visible = false
        }
    },
    created () {
        bus.$on('singleton:popover', this.handler)
    },
    destroyed () {
        bus.$off('singleton:popover', this.handler)
    }
}
</script>
