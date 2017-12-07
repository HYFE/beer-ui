import Vue from 'vue'
import Router from 'vue-router'
import { components, directives } from './routes'
import home from '@/views/home'
import icon from '@/views/icon'
import contributing from '@/views/contributing'
import transition from '@/views/transition'

Vue.use(Router)

const mapRoutes = (items, path) => items.map(item => ({
    name: item.name,
    path: `/${path}/${item.name}`,
    component: require(`@/views/${item.name}/index`).default
}))

const componentsRoutes = mapRoutes(components, 'components')
const directivesRoutes = mapRoutes(directives, 'directives')

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
    }].concat(componentsRoutes, directivesRoutes)
})
