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
        Seleccione un emoji
      </h1>
    </v-col>

    <v-col cols="12" md="6" class="text-center ButtonSocket">
      <v-select
        @change="changeCategorySelect()"
        style="background: white; max-width: 500px; margin: auto"
        :items="category"
        v-model="categorySelect"
        dense
        outlined
        label="Seleccione la categoría"
      ></v-select>
    </v-col>

    <v-col cols="12" md="6" class="text-center ButtonSocket">
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
      v-for="(img, j) in arrayPartition($store.state.arrayEmojis)"
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
              x-small
              :disabled="img.image == $store.state.emoji || loading"
              :loading="loading"
              color="primary"
              style="color: white"
              @click="emojichange(img.image); loader = 'loading'"
              >Seleccionar
              <template v-slot:loader>
                Cargando...
              </template>
            </v-btn>
          </v-card-title>
        </v-img>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-pagination
        v-model="page"
        :length="lenghtPartition($store.state.arrayEmojis)"
        :total-visible="6"
      ></v-pagination>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "ButtonsEmoji",
  props: {
    colorButton: {
      type: String,
      default: "primary",
    },
  },
  data: () => ({
    before: 10,
    page: 1,
    radio: 10,
    items: [5, 10, 20, 30, 50],
    category: ["Todos"],
    categorySelect: "Todos",
    tempArray: [],
    loading: false,
    loader: null
  }),
  async mounted() {
    await this.getAllEmojis();
    this.tempArray = JSON.parse(JSON.stringify(this.$store.state.arrayEmojis));
  },
  watch: {
    loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 5000)

        this.loader = null
      },
  },
  methods: {
    changeSelect() {
      var aux = 1;
      if (this.before > this.radio) {
        aux = -1;
      }
      this.page = Math.floor(this.page * (this.before / this.radio)) + aux;

      if (this.page < 1) {
        this.page = 1;
      } else if (
        this.lenghtPartition(this.$store.state.arrayEmojis) < this.page
      ) {
        this.page = this.lenghtPartition(this.$store.state.arrayEmojis);
      }
      this.before = this.radio;
    },
    changeCategorySelect() {
      if (this.categorySelect == "Todos") {
        this.$store.state.arrayEmojis = this.tempArray;
      } else {
        this.$store.state.arrayEmojis = this.tempArray.filter(
          (element) => element.type == this.categorySelect
        );
      }

      this.changeSelect();
    },
    lenghtPartition(array) {
      return Math.ceil(array.length / this.radio);
    },
    arrayPartition(array) {
      // this.tempArray = JSON.parse(JSON.stringify(array));
      var partition = [];
      for (
        var i = this.radio * (this.page - 1);
        i < this.radio * this.page && array[i] != null;
        i++
      ) {
        partition.push(JSON.parse(JSON.stringify(array[i])));
      }
      return partition;
    },
    emojichange(emoji) {
      this.$store.state.emoji = emoji;
      this.$socket.emit("emojiChangeClient", this.$store.state.emoji);
    },
    async getAllEmojis() {
      var api = this.$store.state.URL + "/emojis/getAll";

      var response = await this.axios.get(api);

      if (response) {
        if (response.data) {
          this.$store.state.arrayEmojis = response.data.emojis;
          this.$store.state.arrayEmojis = this.$store.state.arrayEmojis.sort(
            function (a, b) {
              return a.type.localeCompare(b.type);
            }
          );
        }
      } else {
        this.$store.state.arrayEmojis = [];
      }

      for (var i = 0; i < this.$store.state.arrayEmojis.length; i++) {
        if (!this.category.includes(this.$store.state.arrayEmojis[i].type)) {
          this.category.push(this.$store.state.arrayEmojis[i].type);
        }
      }
      // console.log(this.category)
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
.ButtonSocket label.v-label {
  background: purple !important;
  color: white;
  border-radius: 20px;
  padding: 0px 5px;
}
</style>
