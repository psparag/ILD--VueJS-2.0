import Vue from 'vue'
import App from './App.vue'
import router from './router'
import appheader from './components/appheader'
import appnavigation from './components/navigation'
import AppCursor from "./components/AppCursor"
import PageTitle from "./components/PageTitle"

Vue.component('page-title', PageTitle)
Vue.component('app-cursor', AppCursor )
Vue.component('appheader', appheader )
Vue.component('appnavigation', appnavigation )


Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
