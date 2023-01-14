<template>
  <v-app style="background: transparent !important;">
    <v-main >
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>

<style>

@font-face {font-family: "Gamer";
    src: url("./assets/font/Gamer.ttf");
  }
</style>
