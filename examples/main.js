import Vue from 'vue'
import App from './App'
import router from './router'
import comments from '_'
import codeBlock from './components/codeBlock'
import docsPage from './components/page'

Vue.config.productionTip = false
Vue.config.debug = true

Vue.use(comments)
Vue.component(codeBlock.name, codeBlock)
Vue.component(docsPage.name, docsPage)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
