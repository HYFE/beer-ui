import Vue from 'vue'
import App from './App'
import router from './router'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-gist.css'
import marked from 'marked'
import comments from '_'
import codeBlock from './components/codeBlock'
import docsPage from './components/docsPage'

Vue.config.productionTip = false
Vue.config.debug = true

Vue.use(comments)
Vue.component(codeBlock.name, codeBlock)
Vue.component(docsPage.name, docsPage)

Vue.prototype.$hljs = hljs
marked.setOptions({
    highlight(code, lang = 'html') {
        return hljs.highlight(lang, code).value
    }
})
Vue.prototype.$marked = marked

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
