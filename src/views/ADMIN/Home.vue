<template>
  <v-container>
    <v-row style="margin-bottom:20px">
      <!--FORMULARIO PARA EMOJIS-->
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="searchEmoji"
              append-icon="mdi-magnify"
              label="Busca por tipo"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headersEmojis"
            :items="$store.state.arrayEmojis"
            :items-per-page="10"
            :loading="$store.state.arrayEmojis.length == 0"
            loading-text="Esta cargando los ricos emojis"
            class="elevation-1"
            :search="searchEmoji"
          >
            <template v-slot:item.image="{ item }">
              <img :src="item.image" width="auto" height="30px" alt="imagen" />
            </template>
            <template v-slot:item._id="{ item }">
              <v-btn
                @click="deteleEmoji(item._id)"
                color="error"
                small
                :loading="idSelect == item._id"
                :disabled="idSelect == item._id"
              >
                <v-icon>mdi-delete</v-icon> Eliminar</v-btn
              >
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-form v-model="valid" ref="formEmoji">
          <v-container>
            <v-col cols="12">
              <v-text-field
                :autocomplete="true"
                label="Link de la imagen del emoji"
                solo
                v-model="imageEmoji"
                :rules="nameRules"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                :autocomplete="true"
                label="Tipo de imagen"
                solo
                v-model="type"
                hint='Si no se llena este campo, por defecto será "Random"'
                persistent-hint
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-btn
                color="primary"
                :loading="loadingAddEmoji"
                :disabled="loadingAddEmoji"
                @click="createEmoji"
              >
                <v-icon class="mr-1">mdi-plus-circle</v-icon>
                Agregar
              </v-btn>
            </v-col>
            <v-col cols="12" v-if="imageEmoji && imageEmoji != ''">
              <img
                :src="imageEmoji"
                height="200px"
                width="auto"
                alt="No existe esta imagen"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Ingrese el code, solo DiegoYance par de mongoles"
                v-model="code"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-btn color="primary" @click="createToken()"
                >Ingresar Code</v-btn
              >
            </v-col>
          </v-container>
        </v-form>
      </v-col>

      <!--FORMULARIO PARA BACKGROUND-->
      <v-col cols="12" md="8">
        <v-card v-if="$store.state.arrayBackgrounds != null">
          <v-data-table
            :headers="headersBackground"
            :items="$store.state.arrayBackgrounds"
            :items-per-page="10"
            :loading="$store.state.arrayBackgrounds.length == 0"
            loading-text="Esta cargando los ricos fondos"
            class="elevation-1"
          >
            <template v-slot:item.image="{ item }">
              <img :src="item.image" width="auto" height="30px" alt="imagen" />
            </template>
            <template v-slot:item._id="{ item }">
              <v-btn
                @click="deteleBackground(item._id)"
                color="error"
                small
                :loading="idSelect == item._id"
                :disabled="idSelect == item._id"
              >
                <v-icon>mdi-delete</v-icon> Eliminar</v-btn
              >
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-form v-model="valid" ref="formBackground">
          <v-container>
            <v-col cols="12">
              <v-text-field
                :autocomplete="true"
                label="Link de la imagen del fondo"
                solo
                v-model="imageBackground"
                :rules="nameRules"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-btn
                color="primary"
                :loading="loadingAddBackgound"
                :disabled="loadingAddBackgound"
                @click="createBackground"
              >
                <v-icon class="mr-1">mdi-plus-circle</v-icon>
                Agregar
              </v-btn>
            </v-col>
            <v-col cols="12" v-if="imageBackground && imageBackground != ''">
              <img
                :src="imageBackground"
                height="200px"
                width="auto"
                alt="No existe esta imagen"
              />
            </v-col>

          </v-container>
        </v-form>
      </v-col>
    </v-row>
    <hr>
    <Home />
    <v-snackbar top v-model="messageShow" timeout="5000">
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="messageShow = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script>
import ButtonLogOut from "@/components/ButtonLogOut.vue";
import Home from "@/views/MOD/Home.vue";

export default {
  name: "Admin_Home",
  components: {
    ButtonLogOut,
    Home,
  },
  data: () => ({
    valid: true,
    code: "",
    searchEmoji: "",
    messageShow: false,
    loadingAddEmoji: false,
    loadingAddBackgound: false,
    message: "",
    imageEmoji: "",
    imageBackground: "",
    type: "",
    token: "",
    idSelect: "",
    headersEmojis: [
      {
        text: "Emoji",
        align: "start",
        sortable: false,
        value: "image",
        filterable: false,
      },
      { text: "Tipo", value: "type" },
      { text: "Operaciones", value: "_id", sortable: false },
    ],
    headersBackground: [
      {
        text: "Fondo",
        align: "start",
        sortable: false,
        value: "image",
        filterable: false,
        width: "70%",
        height: "100",
      },
      { text: "Operaciones", value: "_id", sortable: false },
    ],
    emojis: [],
    nameRules: [(v) => !!v || "Este campo es requerido"],
  }),
  methods: {
    async createToken() {
      var api =
        this.$store.state.URL + "/channels/myTokenStreamlabs?code=" + this.code;

      var response = await this.axios.get(api);
      if (response) {
        if (response.data) {
          this.code = response.data.message;
        }
      } else {
        this.code = "F de los F";
      }
    },

    async getAllEmojis() {
      var api = this.$store.state.URL + "/emojis/getAll";

      var response = await this.axios.get(api);

      if (response) {
        if (response.data) {
          this.$store.state.arrayEmojis = response.data.emojis;
          this.$socket.emit("changeArrayEmojisClient", response.data.emojis);
        }
      } else {
        this.$store.state.emojis = [];
      }
    },

    async getAllBackground() {
      var api = this.$store.state.URL + "/backgrounds/getAll";

      var response = await this.axios.get(api);

      if (response) {
        if (response.data) {
          this.$store.state.arrayBackgrounds = response.data.backgrounds;
          this.$socket.emit("changeArrayBackgroundsClient", response.data.backgrounds);
        }
      } else {
        this.$store.state.arrayBackgrounds = [];
      }
    },

    //Crear un emoji
    async createEmoji() {
      
      var validForm = this.$refs.formEmoji.validate();
      // console.log(validForm)
      if (validForm) {

        this.loadingAddEmoji = true;
        var api = this.$store.state.URL + "/emojis/create";

        var payload = {
          image: this.imageEmoji.trim(),
          type: this.type.trim(),
        };

        var response = await this.axios.post(api, payload, {
          headers: {
            "x-access-token": this.token,
          },
        });

        if (response) {
          if (response.data) {
            var data = response.data;
            if (!data.error) {
              await this.getAllEmojis();
              this.$refs.formEmoji.reset();
              this.imageEmoji = "";
              this.type = "";
            }
            this.message = response.data.msg;
            this.messageShow = true;
          }
        } else {
          this.message = "Error en el sistema";
          this.messageShow = true;
        }
        this.loadingAddEmoji = false;
      }
    },

    //Crear un emoji
    async createBackground() {
      var validForm = this.$refs.formBackground.validate();
      if (validForm) {
        this.loadingAddBackgound = true;
        var api = this.$store.state.URL + "/backgrounds/create";

        var payload = {
          image: this.imageBackground.trim(),
          type: this.type.trim(),
        };

        var response = await this.axios.post(api, payload, {
          headers: {
            "x-access-token": this.token,
          },
        });

        if (response) {
          if (response.data) {
            var data = response.data;
            if (!data.error) {
              await this.getAllBackground();
              this.$refs.formBackground.reset();
              this.imageBackground = "";
            }
            this.message = response.data.msg;
            this.messageShow = true;
          }
        } else {
          this.message = "Error en el sistema";
          this.messageShow = true;
        }
        this.loadingAddBackgound = false;
      }
    },

    async deteleEmoji(id) {
      this.idSelect = id;
      var api = this.$store.state.URL + "/emojis/delete/" + this.idSelect;

      var response = await this.axios.delete(api, {
        headers: {
          "x-access-token": this.token,
        },
      });

      if (response) {
        if (response.data) {
          var data = response.data;
          if (!data.error) {
            await this.getAllEmojis();
          }
          this.message = response.data.msg;
          this.messageShow = true;
        }
      } else {
        this.message = "Error en el sistema";
        this.messageShow = true;
      }
      this.idSelect = "";
    },

    async deteleBackground(id) {
      this.idSelect = id;
      var api = this.$store.state.URL + "/backgrounds/delete/" + this.idSelect;

      var response = await this.axios.delete(api, {
        headers: {
          "x-access-token": this.token,
        },
      });

      if (response) {
        if (response.data) {
          var data = response.data;
          if (!data.error) {
            await this.getAllBackground();
          }
          this.message = response.data.msg;
          this.messageShow = true;
        }
      } else {
        this.message = "Error en el sistema";
        this.messageShow = true;
      }
      this.idSelect = "";
    },  
  },
  async mounted() {
    this.$socket.connect();
    this.token = window.localStorage.getItem("token-DiegoYance");
    await this.getAllBackground ();
  },
  sockets: {
    changeArrayEmojisSever: async function (data) {
      this.$store.state.arrayEmojis = data;
    },
    // changeArrayBackgroundSever: async function (data) {
    //   this.$store.state.arrayBackgrounds = data;
    // },
  },
};
</script>
