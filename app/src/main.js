import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let a = 5;

new Vue({
  render: h => h(App),
}).$mount('#app')
