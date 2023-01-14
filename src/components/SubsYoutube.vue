<template>
  <div>
    <v-icon color="red">mdi-youtube</v-icon>
    <span class="count-channel">{{ subsCount }}</span>
    <!-- <v-btn @click="TEST"> GAAAA </v-btn> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    subsCount: 0,
  }),
  sockets: {
    async connect() {
      // console.log("Esta conectado");
    //   console.log(this.subsCount)
    //   this.subsCount = this.getSubsCountYT();
    //   console.log(this.subsCount)
    },

    async disconnect() {
      // console.log("Esta desconectado");
    },
    customEmit: async function (data) {
      // console.log(data);
    },
  },
  methods: {
    // TEST() {
    //   this.$socket.emit("customEmit", "GG");
    // },
    async getSubsCountYT() {
      var api = this.$store.state.URL + "/channels/mySubsCountYT";
        var response = await this.axios.get(api)
        if(response != null){
            this.subsCount = response.data.subsCount;
        }
    },
  },
  async mounted() {
      var $this = this;
      // this.getSubsCountYT();
      // setInterval(async ()=> {
      //     $this.getSubsCountYT();
      // }, 60000)
  },
};
</script>
