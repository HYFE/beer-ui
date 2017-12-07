<script>
export default {
    name: 'uiListitem',
    props: {
        to: [Object, String],
        href: String,
        isAction: {
            type: Boolean,
            default: true
        },
        disabled: Boolean,
    },
    computed: {
        bordered () {
            return this.$parent.bordered
        },
        exact () {
            return this.$parent.exact
        },
        itemClass () {
            return {
                'non-action': !this.isAction,
                disabled: this.disabled,
                bordered: this.bordered
            }
        },
    },
    methods: {
        onClick (e) {
            if(this.disabled) return
            this.$emit('click', e)
        }
    },
    render (h) {
        let tag = 'div'
        if (this.href && !this.disabled) tag = 'a'
        if (this.to) tag = !this.disabled ? 'router-link' : 'a'
        return h(tag, {
            class: [this.itemClass, 'ui-item'],
            attrs: {
                href: this.href,
                role: 'listitem',
                'aria-disabled': this.disabled
            },
            props: this.to && !this.disabled ? {
                'exact-active-class': 'active',
                exact: this.exact,
                to: this.to
            } : null,
            on: {
                click: this.onClick
            },
        }, [
            this.$slots.left,
            h('div', {
                class: 'ui-item-content'
            }, this.$slots.default),
            this.$slots.right
        ])
    }
}
</script>
<style lang="less">
@import '../../styles/import';

.ui-item {
    position: relative;
    padding: @list-item-padding;
    display: flex;
    align-items: center;
    color: @text-base-color;
    text-decoration: none;
    cursor: pointer;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: @list-item-active-border;
        background: @theme-color;
        opacity: 0;
        transition: transform 0.2s ease-in-out;
        transform: scaleY(0);
    }
    &.active {
        color: @theme-color;
        background: @lighter-color;
        &:after {
            opacity: 1;
            transform: scaleY(1);
        }
    }
    &:not(.non-action):not(.disabled):hover {
        background: @lighter-color;
    }
    &.non-action,
    &.disabled {
        cursor: default;
    }
    &.disabled {
        opacity: .56;
    }
    &.bordered {
        border-top: @border-base;
        &:first-child {
            border-top: none;
        }
    }
    &-content {
        flex: 1 1 auto;
    }
}
</style>
