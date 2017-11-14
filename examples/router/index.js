import Vue from 'vue'
import Router from 'vue-router'
import components from './components'
import home from '@/views/home'
import icon from '@/views/icon'
import contributing from '@/views/contributing'
import transition from '@/views/transition'

Vue.use(Router)

const componentsRoutes = components.map(item => ({
    name: item.name,
    path: `/components/${item.name}`,
    component: require(`@/views/${item.name}/index`).default
}))

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: home
    }, {
        path: '/icon',
        name: 'icon',
        component: icon
    }, {
        path: '/contributing',
        name: 'contributing',
        component: contributing
    }, {
        path: '/transition',
        name: 'transition',
        component: transition
    }].concat(componentsRoutes)
})
