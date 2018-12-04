import Vue from 'vue'
import App from './App.vue'
import router from './route'
import fastClidk from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont/iconfont.css'

Vue.config.productionTip = false
fastClidk.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
