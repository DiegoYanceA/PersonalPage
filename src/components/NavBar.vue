<template>
  <v-app-bar app color="primary" dark>
    <template v-if="photo">
      <a class="d-flex align-center deleteUnderlined" href="/">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="photo.youtube.default.url"
          transition="scale-transition"
          width="40"
          style="border-radius: 100%"
        />
        <h2 style="color:white"><template v-if="channelName">{{channelName.youtube}}</template></h2> 
      </a>
    </template>
    

    <v-spacer></v-spacer>

    <v-btn
      href="https://www.youtube.com/channel/UCH5RD3yCZhuDf8V51rC1R7g"
      target="_blank"
      text
    >
      <span class="mr-2">🙂 Canal principal 🙂</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'NavBar',

    data: () => ({

    }),
    props: ['channelName', "photo"],
  }
</script>
