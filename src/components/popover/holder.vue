<template>
    <ui-popover v-bind="props"
                v-on="events"
                v-if="component"
                v-model="visible"
                ref="pop">
        <component :is="component"
                   v-bind="innerProps"
                   v-on="innerEvents"></component>
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
            innerProps: null,
            innerEvents: null,
            visible: false
        }
    },
    methods: {
        handler ({ component, popover = {}, options = {} }, cb) {
            this.visible = false
            popover.name = 'singleton'
            const { events, ...props } = popover
            const { events: innerEvents, ...innerProps } = options
            this.props = props
            this.events = events
            this.innerProps = innerProps
            this.innerEvents = innerEvents
            this.component = component
            if(!this.visible) this.$nextTick(cb)
            else this.$refs.pop.updatePopper()
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
