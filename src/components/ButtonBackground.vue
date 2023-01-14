<template>
  <v-row>
    <v-col cols="12">
      <h1
        style="
          margin: auto;
          max-width: 400px;
          border-radius: 50px;
          background: purple;
          color: white;
        "
        class="text-center"
      >
        Seleccione un fondo
      </h1>
    </v-col>
    <v-col cols="12" class="text-center ButtonSocket">
      <v-select
        @change="changeSelect()"
        style="background: white; max-width: 500px; margin: auto"
        :items="items"
        v-model="radio"
        dense
        outlined
        label="Cantidad de imagenes para mostrar"
      ></v-select>
    </v-col>
    <v-col
      v-for="(img, j) in arrayPartition($store.state.arrayBackgrounds)"
      :key="j"
    >
      <v-card class="mx-auto" min-width="150" max-width="350" max-height="400">
        <v-img
          style="margin: auto"
          class="white--text align-end"
          height="200px"
          width="auto"
          :src="img.image"
        >
          <v-card-title>
            <v-btn
              :disabled="img.image == $store.state.background || loading"
              color="primary"
              style="color: white"
              x-small
              :loading="loading"
              @click="backgroundchange(img.image); loader = 'loading'"
              >Seleccionar
              <template v-slot:loader> Cargando... </template></v-btn
            >
          </v-card-title>
        </v-img>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-pagination
        v-model="page"
        :length="lenghtPartition($store.state.arrayBackgrounds)"
        :total-visible="6"
      ></v-pagination>
    </v-col>
  </v-row>

  <!-- <v-btn-toggle
    @change="backgroundchange"
    v-model="$store.state.background"
    class="row mt-5 ml-lg-4 ml-1 ml-md-5"
    style="background: transparent !important"
  >
    <template v-for="(img, j) in $store.state.arrayBackgrounds">
      <v-btn
        :value="img.image"
        :key="j + 'noPrincipal'"
        fab
        :color="colorButton"
        style="font-size: 30px; opacity: 1"
      >

        <v-img
          width="30px"
          height="30px"
          contain
          style="flex: 0 1 auto"
          :src="img.image"
        ></v-img>
      </v-btn>
    </template>
  </v-btn-toggle> -->
</template>
<script>
export default {
  name: "ButtonsBackground",
  data: () => ({
    before: 10,
    page: 1,
    radio: 10,
    items: [5, 10, 20, 30, 50],
    loading: false,
    loader: null,
  }),
  props: {
    colorButton: {
      type: String,
      default: "purple",
    },
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 5000);

      this.loader = null;
    },
  },
  async mounted() {
    await this.getAllBackground();
  },
  methods: {
    changeSelect() {
      var aux = 1;
      if (this.before > this.radio) {
        aux = -1;
      }
      this.page = Math.floor(this.page * (this.before / this.radio)) + aux;

      // console.log(this.page);
      if (this.page < 1) {
        this.page = 1;
      } else if (
        this.lenghtPartition(this.$store.state.arrayBackgrounds) < this.page
      ) {
        this.page = this.lenghtPartition(this.$store.state.arrayBackgrounds);
      }
      this.before = this.radio;
    },
    lenghtPartition(array) {
      return Math.ceil(array.length / this.radio);
    },
    arrayPartition(array) {
      var partition = [];
      for (
        var i = this.radio * (this.page - 1);
        i < this.radio * this.page && array[i] != null;
        i++
      ) {
        partition.push(array[i]);
      }
      return partition;
    },
    backgroundchange(img) {
      this.$store.state.background = img;
      this.$socket.emit("backgroundChangeClient", this.$store.state.background);
    },
    async getAllBackground() {
      var api = this.$store.state.URL + "/backgrounds/getAll";

      var response = await this.axios.get(api);

      if (response) {
        if (response.data) {
          this.$store.state.arrayBackgrounds = response.data.backgrounds;
        }
      } else {
        this.$store.state.arrayBackgrounds = [];
      }
    },
  },
  // sockets: {
  //   emojiChangeServer: async function (data) {
  //     this.$store.state.arrayEmojis = data;
  //   },
  // },
};
</script>

<style>
.v-pagination__more {
  color: white;
}

.ButtonSocket label.v-label {
  background: purple !important;
  border-radius: 20px;
  padding: 0px 5px;
  color: white;
}
</style>