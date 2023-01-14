<template>
  <v-container fluid class="messageRandom" :style="'color:' + colorMessage">
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="text-random">
          {{ $store.state.messageSubs }}
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MessageRandom",
  data: () => ({
  }),
  props: {
    colorMessage: {
      type: String,
      default: "white"
    }
  },
  sockets: {
    async connect() {
    },
    async disconnect() {
    }
  },
  mounted(){
    this.$socket.connect();
  },
  methods: {},
};
</script>


<style>
.text-random{
  color: white;
  font-weight: bold;
  -webkit-text-stroke: 2px black;
  text-shadow: 0px 0px  15px yellow;
  animation: latidos 1.5s infinite;
}

@keyframes latidos {
    from { transform: none; }
    50% { transform: scale(0.8); }
    to { transform: none; }
}
</style>