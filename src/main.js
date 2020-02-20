import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './components/element-ui/index.js'
import './filters/common/index.js'
import './styles/index.less'
import './assets/dist/dmallmax-ui.css'
import DMUI from './assets/dist/dmallmax-ui.common.js'

Vue.use(DMUI)

Vue.config.productionTip = false

new Vue({
  router,
  created(){
    Vue.prototype.$rootApp = this
  },
  render: h => h(App)
}).$mount('#app')
