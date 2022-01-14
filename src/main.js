import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueHtml2Canvas from 'vue-html2canvas';
 
import 'regenerator-runtime'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueHtml2Canvas);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
