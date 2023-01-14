import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Mod_Home from '../views/MOD/Home.vue'
import Admin_Home from '../views/ADMIN/Home.vue'
// import PageNotFound from '../views/PageNotFound.vue'
import ViewEmoji from '../views/ViewEmoji.vue'
import ViewMessage from '../views/ViewMessage.vue'
import ViewBackground from '../views/ViewBackground.vue'
import SubsYoutube from '../components/SubsYoutube.vue'
// import MessageRandom from '../components/MessageRandom.vue'
// import EmojiRandom from '../components/EmojiRandom.vue'



const MODE = process.env.NODE_ENV || "development";
const URL = MODE == "development" ? "http://localhost:3000/api/v1" : "https://DiegoYance.azurewebsites.net/api/v1";


Vue.use(VueRouter)

async function existUser(token) {
  var api = URL + "/auth/existUser";
  var response = await axios.get(api, {
    headers: {
      "x-access-token": token,
    },
  });

  var user = {};
  if (response) {
    var data = response.data;
    user = data;
  }
  return user;
}

function verify(user, view, next) {
  if (user.rol == view) {
    if (user.expired_at != null && user.expired_at != 0) {
      setTimeout(() => {
        alert("Bye causa");
        window.location.href = '/login';
      }, user.expired_at * 1000);
    }

    //Si todo esta correcto
    if (user.auth) {
      next();
    } else {
      window.localStorage.removeItem("token-DiegoYance");
      next("login");
    }
  } else {
    next("login");
  }

}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: async (to, from, next) => {
      var token = window.localStorage.getItem("token-DiegoYance");
      if (token == null) {
        next();
        return;
      }

      var user = await existUser(token);
      
      //Si todo esta correcto
      if (user.auth) {
        if (user.rol) {
          next("home/" + user.rol.toLowerCase());
          return;
        } else {
          next();
        }
      } else {
        next();
      }
    }
  },
  {
    path: '/subsYoutube',
    name: 'SubsYoutube',
    component: SubsYoutube
  },
  {
    path: '/messageRandom',
    name: 'MessageRandom',
    component: ViewMessage,
  },
  {
    path: '/emojiRandom',
    name: 'EmojiRandom',
    component: ViewEmoji,
  },
  {
    path: '/viewBackground',
    name: 'ViewBackground',
    component: ViewBackground,
  },
  {
    path: '/home/mod',
    name: 'Mod_Home',
    component: Mod_Home,
    beforeEnter: async (to, from, next) => {
      var token = window.localStorage.getItem("token-DiegoYance");
      if (token == null) {
        next("login");
        return;
      }

      var user = await existUser(token);
      verify(user, "MOD", next);
    }
  },
  {
    path: '/home/admin',
    name: 'Admin_Home',
    component: Admin_Home,
    beforeEnter: async (to, from, next) => {
      var token = window.localStorage.getItem("token-DiegoYance");
      if (token == null) {
        next("login");
        return;
      }

      var user = await existUser(token);
      verify(user, "ADMIN", next);
    }
  },
  {
    path: '/servers',
    name: 'Servers',
    component: () => import(/* webpackChunkName: "Servers" */ '../views/Servers.vue')
  },
  { path: "*", component: Home }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
