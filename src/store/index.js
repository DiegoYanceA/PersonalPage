import Vue from 'vue'
import Vuex from 'vuex'

const MODE = process.env.NODE_ENV || "development";

const URL = MODE == "development"?"http://localhost:3000/api/v1":"https://DiegoYance.azurewebsites.net/api/v1";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    MODE: MODE,
    URL: URL,
    messageSubs: "",
    emoji: "",
    arrayEmojis: [],
    arrayBackgrounds: [],
    activeMessage: null,
    activeEmojis: null,
    background: ""
  },
  mutations: {
    "SOCKET_changeMessageRandom"(state, data){
      state.messageSubs = data;
    },
    "SOCKET_emojiChangeServer"(state, data){
      state.emoji = data;
    },
    "SOCKET_changeMessageEnable"(state, data){
      state.activeMessage = data;
    },
    "SOCKET_changeEmojiEnable"(state, data){
      state.activeEmojis = data;
    },
    "SOCKET_changeArrayEmojisServer"(state, data){
      state.arrayEmojis = data;
    },
    "SOCKET_backgroundChangeServer"(state, data){
      state.background = data;
    },
    "SOCKET_changeArrayBackgroundsServer"(state, data){
      state.arrayBackgrounds = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
