import Vue from 'vue'
// import Vuex from 'vuex'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueLazyLoad from 'vue-lazyload'

Vue.use(MintUI)

// Vue.use(Vuex)
Vue.use(VueLazyLoad, {
	loading: require('@/assets/imgs/loading.gif'),
	error: require('@/assets/imgs/loading.gif')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  render: h => h(App)
})
