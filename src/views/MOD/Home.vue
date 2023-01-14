<template>
  <v-container>
    <!--LOADING-->
    <v-row v-if="loading" class="text-center">
      <v-col>
        <v-progress-circular
          :size="100"
          indeterminate
          color="primary"
        ></v-progress-circular>
        <h2>Ta cargando pe</h2>
      </v-col>
    </v-row>

    <v-app-bar app height="230px">
      <!--Config Mensaje-->
      <v-container>
        <v-row>
          <v-col cols="12">
            <ButtonLogOut />
          </v-col>
        </v-row>
        <v-row cols="12" style="font-size:15px">
          <MessageRandom colorMessage="black"></MessageRandom>
        </v-row>
        <v-row>
          <v-col class="text-center" style="color: black" cols="4">
            Habilitar mensaje
            <v-btn
              v-if="$store.state.activeMessage != null"
              :color="$store.state.activeMessage ? 'success' : 'error'"
              @click="enableMessage"
            >
              <template v-if="$store.state.activeMessage"> Activado </template>
              <template v-else> Desactivado </template>
            </v-btn>
          </v-col>
          <v-col cols="8" class="text-center">
            <v-text-field
              label="Escribe cualquier webada, solo moderadores..."
              solo
              maxlength="80"
              v-model="$store.state.messageSubs"
              @keyup="changeMessageRandomClient"
              counter="80"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-row>
      <v-col>
        Habilitar emojis
        <v-btn
          v-if="$store.state.activeEmojis != null"
          :color="$store.state.activeEmojis ? 'success' : 'error'"
          @click="enableEmoji"
        >
          <template v-if="$store.state.activeEmojis"> Activado </template>
          <template v-else> Desactivado </template>
        </v-btn>
      </v-col>
      <v-col>
        <img style="margin-right:auto;margin-left: auto" height="100px" width="auto" :src="$store.state.emoji" />
      </v-col>
    </v-row>

    <!--LISTADO DE IMAGENES-->
    
    <ButtonsEmoji/>
    
    <!--LISTADO DE FONDOS-->
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">Fondo fake de Diego</h1>
      </v-col>
      <v-col cols="12">
        <img style="margin-right:auto;margin-left: auto; display: block" height="100px" width="auto" :src="$store.state.background" />
      </v-col>
    </v-row>
    
    <ButtonBackground />

    <!-- <v-row class="mt-5">
      <v-col cols="12 text-center mt-5">
        <h1 style="color: black">IMAGEN NUEVA</h1>
      </v-col>
      <v-col cols="6">
        <v-text-field
          label="Ingrese el enlace la imagen"
          v-model="imageEmoji"
        ></v-text-field>
      </v-col>
      <v-col cols="6" class="text-center">
        <v-btn color="primary" @click="changeImageForEmoji()"
          >Ingresar imagen</v-btn
        >
      </v-col>
    </v-row> -->
  </v-container>
</template>
<script>
import MessageRandom from "@/components/MessageRandom.vue";
import ButtonsEmoji from "@/components/ButtonsEmoji.vue";
import ButtonBackground from "@/components/ButtonBackground.vue";
import ButtonLogOut from "@/components/ButtonLogOut.vue";

export default {
  name: "Mod_Home",
  components: {
    MessageRandom,
    ButtonsEmoji,
    ButtonBackground,
    ButtonLogOut
  },
  data: () => ({
    loading: true,
    token: null,
    code: "",
    selectItemEmoji: null,
    showImage: false,
    selectImage: null,
    imageEmoji: "",
  }),
  sockets: {
    async connect() {},

    async disconnect() {
    },
  },
  created() {
    this.loading = true;
  },
  mounted() {
    this.loading = false;
    this.token = window.localStorage.getItem("token-DiegoYance");
    this.$socket.connect() 
  },
  methods: {
    changeImageForEmoji() {
      this.$store.state.emoji = this.imageEmoji;
      this.$socket.emit("emojiChangeClient", this.$store.state.emoji);
      this.imageEmoji = "";
    },

    enableMessage() {
      var api = this.$store.state.URL + "/permission/userupdate";
      var payload = {
        read: !this.$store.state.activeMessage
      }
      this.axios
        .post(api, payload, {
          headers: {
            "x-access-token": this.token
          }
        })
        .then((response) => {
          if (response.data == null) {
            console.log("Error");
          }
          return response.data;
        })
        .then((data) => {
          console.log(data)
          if(data.operation){
            console.log(data.msg)
            this.$store.state.activeMessage = !this.$store.state.activeMessage;
            this.$socket.emit("changeMessageServer", this.$store.state.activeMessage);
          } else {
            window.localStorage.removeItem("token-DiegoYance");
            window.location.href = "/login"
          }
        })
        .catch((e) => {
          console.log(e);
        });
      
    },

    enableEmoji() {
      this.$store.state.activeEmojis = !this.$store.state.activeEmojis;
      this.$socket.emit("changeEmojiServer", this.$store.state.activeEmojis);
    },

    changeMessageRandomClient() {
      this.$socket.emit("messageRandom", this.$store.state.messageSubs);
    },
  },
};
</script>
