import Vue from 'vue'
import App from './App.vue'
import router from './route'
import fastClidk from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont/iconfont.css'

Vue.config.productionTip = false
fastClidk.attach(document.body)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
