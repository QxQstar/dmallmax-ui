import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './filters/common/index.js'
import './styles/index.less'
import './../dist/DMALLMAX.css'
// import DMUI from './../dist/DMALLMAX.common'
import DMUI from 'dmallmax-ui'


Vue.use(DMUI)

Vue.config.productionTip = false

new Vue({
  router,
  created(){
    Vue.prototype.$rootApp = this
  },
  render: h => h(App)
}).$mount('#app')
