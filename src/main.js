import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
// Vuesax
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

// Компонент-обёртка для сайдбаров
import SidebarWrapper from '@/components/Common/SidebarWrapper'
 
Vue.use(Vuesax)
Vue.use(VueLazyload)

Vue.component('SidebarWrapper', SidebarWrapper)

Vue.filter('price', value => {
    return new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(value)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
