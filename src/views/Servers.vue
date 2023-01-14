<template>
  <div class="about">
    <!-- <NavBar :channelName="channel.names" :photo="channel.photo" /> -->
    <v-container fluid >
      <v-row>
        <v-col cols="12" lg="6" style="background: transparent; text-align:center"> 
          <v-progress-circular
              v-if="isLoader && !serverSelect"
              :size="200"
              :width="10"
              color="primary"
              :indeterminate="true"
            ></v-progress-circular>
          <template v-if="serverSelect">
            
            <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                :src="serverSelect.icon || serverSelect.icon"
                transition="scale-transition"
                width="100"
                style="margin-left:auto;margin-right:auto !important"
              />
              <h1 class="text-center wordServer">
                <template v-if="serverSelect.online">💙 {{nameServer}} </template><template v-else>💔 <span style="font-size:20px">No existe, como tu crush</span></template>
                
                <template v-if="serverSelect.online">💙 </template><template v-else>💔 </template>
              </h1>
              <h2 class="text-center wordServer">
                <template v-if="serverSelect.online">🎮 </template><template v-else>🙂 </template>
                {{serverSelect.hostname}} 
                <template v-if="serverSelect.online">🎮 </template><template v-else>🙂 </template>
                </h2>
          </template>
        </v-col>
        <v-col cols="12" lg="6">
          <div>
            <v-text-field
            label="Nombre del servidor"
            v-model="nameServer"
            hint="La api no me trae el nombre, asi que ponlo pe"
          ></v-text-field>
          <v-text-field
            label="IP del servidor"
            v-model="newIp"
           
          ></v-text-field>
          <v-btn color="primary"  @click="findServer">
            <v-icon>mdi-magnify </v-icon> Buscar 
          </v-btn>
          </div>
          <v-data-table
            @input="enterSelect($event)"
            show-select
            hide-default-footer
            :single-select="true"
            :headers="headers"
            :items="serversList"
            item-key="name"
            multi-sort
            class="elevation-1"
            :loading ="(serversList.length == 0)"
            loading-text="Esta cargando los server en donde siempre me verás."
          >
            <template v-slot:item.online="{ item }">
              <v-chip :color="getColor(item.online)" dark>
                <template v-if="item.online">😎</template>
                <template v-else>🙂</template>
              </v-chip>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Servers",
  components: {
    NavBar,
  },
  data: () => ({
    newIp: "",
    nameServer: "",
    isLoader: false,
    channel: {},
    servers: {},
    serverSelect: null,
    headers: [
      {
        text: "Nombre",
        align: "start",
        value: "name",
      },
      { text: "IP", value: "hostname", sortable: false },
      { text: "Jugadores", value: "players", sortable: false },
      { text: "Online", value: "online", sortable: false },
    ],
    serversList: [],
  }),
  methods: {
    getMyChannel() {
      var api = this.$store.state.URL + "/channels/myChannels";
      this.axios
        .get(api)
        .then((response) => {
          if (response.data == null) {
            console.log("Error");
          }
          return response.data;
        })
        .then((data) => {
          this.channel = data.myChannel;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getColor(online) {
      if (online) return "green";
      return "red";
    },
    enterSelect(values){
      this.isLoader = true;
      this.serverSelect = values[0];
      this.nameServer = values[0].name;
    },
    getMyServerMC() {
      var api = this.$store.state.URL + "/servers/myServerMCRange";
      this.axios
        .get(api)
        .then((response) => {
          if (response.data == null) {
            console.log("Error");
          }
          return response.data;
        })
        .then((data) => {
          this.servers = data.servers;
         console.log(this.servers)
          for (var i = 0; i < this.servers.length; i++) {
            var server = {};
            server.hostname = this.servers[i].hostname;
            server.players =
              this.servers[i].players.online +
              " / " +
              this.servers[i].players.max;
            server.icon = this.servers[i].icon;
            server.name = this.servers[i].nameServer;
            server.online = this.servers[i].online;

            this.serversList.push(server);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    findServer(){
      this.serverSelect = null;
      this.isLoader = true;
      var api = this.$store.state.URL + "/servers/serverMinecraft/" + this.newIp;
      this.axios
        .get(api)
        .then((response) => {
          if (response.data == null) {
            console.log("Error");
          }
          return response.data;
        })
        .then((data) => {
          this.serverSelect = data.servers;
          this.serverSelect.name = this.nameServer;
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.getMyChannel();
    this.getMyServerMC();
  },
};
</script>
