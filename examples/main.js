import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.config.debug = true

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
