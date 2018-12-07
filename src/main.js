import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vConsole from 'vconsole';
import './config/rem';
// import StartAudioContext from './js/audio'

var v=new vConsole();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
