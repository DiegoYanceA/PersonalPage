import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';

import "./assets/style.css"

import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';
const MODE = process.env.NODE_ENV || "development";
const URL = MODE == "development"?"http://localhost:3000":"https://DiegoYance.azurewebsites.net";
const SocketInstance = socketio(URL,{
  autoConnect: false,
});

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketInstance,
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  },
  // options: { path: "/my-app/" } //Optional options
}))

Vue.use(VueAxios, axios)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
