<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="6" lg="4">
        <h2>Aqui no hay nada causa, ya quieres hacer la competencia a Jorge el curioso. 🙈</h2>
        <p class="h5">
          Aprovecho tu instancia de tiempo aqui para invitarte a suscribirte o
          seguirme en youtube o twitch
        </p>
        <v-btn
          target="_blank"
          href="https://www.youtube.com/channel/UCH5RD3yCZhuDf8V51rC1R7g"
          block
          color="error"
          class="mb-2"
        >
          <h3><v-icon class="mr-1">mdi-youtube</v-icon> Youtube</h3>
        </v-btn>
        <v-btn
          target="_blank"
          href="https://www.twitch.tv/DiegoYance"
          block
          color="deep-purple"
          class="mb-2"
          dark
        >
          <h3><v-icon class="mr-1">mdi-twitch</v-icon> Twitch</h3>
        </v-btn>
        <p class="h5">
          Pos si no quieres hacerlo, puede ir a la página principal con el
          siguiente boton
        </p>
        <v-btn href="/" block color="primary" dark>
          <h3><v-icon>mdi-logout</v-icon> Toca aquí Jorge 🙈</h3>
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
            height="80%"
            width="80%"
            contain
            style="margin-left:auto;margin-right:auto"
          src="https://media.tenor.com/images/a4831c32c73fa16484ee97d76a90bbd5/tenor.png"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>
