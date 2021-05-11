<template>
  <v-container>
    <!--LOADING-->
    <v-row v-if="!auth" class="text-center">
      <v-col>
        <v-progress-circular
          :size="100"
          indeterminate
          color="primary"
        ></v-progress-circular>
        <h2>Ta cargando pe</h2>
      </v-col>
    </v-row>

    <v-app-bar v-show="auth"  app height="230px">
      <!--Config Mensaje-->
      <v-container>
        <v-row cols="12">
          <MessageRandom v-show="auth" colorMessage="black"></MessageRandom>
        </v-row>
        <v-row>
          <v-col class="text-center" style="color: black" cols="4">
            Habilitar mensaje
            <v-btn
              v-if="active != null"
              :color="active ? 'success' : 'error'"
              @click="enableMessage"
            >
              <template v-if="active"> Activado </template>
              <template v-else> Desactivado </template>
            </v-btn>
          </v-col>
          <v-col cols="8" class="text-center">
            <v-text-field
              label="Escribe cualquier webada, solo moderadores..."
              solo
              maxlength="50"
              v-model="$store.state.messageSubs"
              @keyup="changeMessageRandomClient"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-row class="mt-5" v-if="auth">
      <v-col
        class="text-center"
        :key="i"
        v-for="(itemEmoji, i) in itemsEmoji"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-btn
          @click="
            selectItemEmoji = itemEmoji;
            showImage = false;
          "
          color="success"
          block
        >
          <span style="font-size: 20px">{{ itemEmoji.emojis[0] }}</span>
          {{ itemEmoji.name }}
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-btn @click="showImage = true" color="teal" block dark>
          <v-img
            width="30px"
            height="30px"
            contain
            style="flex: 0 1 auto"
            src="https://static-cdn.jtvnw.net/emoticons/v2/307595784/default/light/1.0"
          ></v-img>
          imagenes
        </v-btn>
      </v-col>
    </v-row>

    <!--LISTADO DE EMOJIS-->
    <v-btn-toggle
      v-if="selectItemEmoji != null && !showImage"
      @change="emojichange"
      v-model="$store.state.emoji"
      class="row mt-5"
    >
      <template v-for="(emoji, j) in selectItemEmoji.emojis">
        <v-btn
          :value="emoji"
          :key="j + 'noPrincipal'"
          fab
          color="primary"
          style="font-size: 30px"
        >
          {{ emoji }}
        </v-btn>
      </template>
    </v-btn-toggle>

    <!--LISTADO DE IMAGENES-->
    <v-btn-toggle
      @change="emojichange"
      v-if="showImage"
      v-model="$store.state.emoji"
      class="row mt-5"
    >
      <template v-for="(img, j) in images">
        <v-btn
          :value="img"
          :key="j + 'noPrincipal'"
          fab
          color="primary"
          style="font-size: 30px"
        >
          <v-img
            width="30px"
            height="30px"
            contain
            style="flex: 0 1 auto"
            :src="img"
          ></v-img>
        </v-btn>
      </template>
    </v-btn-toggle>

    <v-row v-if="auth" class="mt-5">
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
    </v-row>
    <!--Ingresar Code-->
    <v-row v-if="auth" class="mt-5">
      <v-col cols="12 text-center mt-5">
        <h1 style="color: red">NO TOCAR ESTO PARA NADA</h1>
      </v-col>
      <v-col cols="6">
        <v-text-field
          label="Ingrese el code, solo asdiegoYA par de mongoles"
          v-model="code"
        ></v-text-field>
      </v-col>
      <v-col cols="6" class="text-center">
        <v-btn color="error" @click="createToken()">Ingresar Code</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MessageRandom from "@/components/MessageRandom.vue";

export default {
  name: "User_Home",
  components: {
    MessageRandom,
  },
  data: () => ({
    auth: false,
    active: null,
    token: null,
    code: "",
    selectItemEmoji: null,
    showImage: false,
    selectImage: null,
    emoji: "🙂",
    imageEmoji: "",
    // itemsEmoji: [
    //   {
    //     name: "Sonrisas y personas",
    //     emojis: [
    //       "😀",
    //       "😃",
    //       "😄",
    //       "😁",
    //       "😆",
    //       "😅",
    //       "😂",
    //       "🤣",
    //       "😊",
    //       "😇",
    //       "🙂",
    //       "🙃",
    //       "😉",
    //       "😌",
    //       "😍",
    //       "🥰",
    //       "😘",
    //       "😗",
    //       "😙",
    //       "😚",
    //       "😋",
    //       "😛",
    //       "😝",
    //       "😜",
    //       "🤪",
    //       "🤨",
    //       "🧐",
    //       "🤓",
    //       "😎",
    //       "🤩",
    //       "🥳",
    //       "😏",
    //       "😒",
    //       "😞",
    //       "😔",
    //       "😟",
    //       "😕",
    //       "🙁",
    //       "☹️",
    //       "😣",
    //       "😖",
    //       "😫",
    //       "🥺",
    //       "😢",
    //       "😭",
    //       "😤",
    //       "😠",
    //       "😡",
    //       "🤬",
    //       "🤯",
    //       "🥵",
    //       "🥶",
    //       "😱",
    //       "😨",
    //       "😰",
    //       "😳",
    //       "🤗",
    //       "🤔",
    //       "🤭",
    //       "🤫",
    //       "🤥",
    //       "😶",
    //       "😐",
    //       "😑",
    //       "😬",
    //       "🙄",
    //       "😯",
    //       "😮",
    //       "🥱",
    //       "😲",
    //       "😴",
    //       "🤤",
    //       "😪",
    //       "😵",
    //       "🤐",
    //       "🥴",
    //       "🤢",
    //       "🤮",
    //       "🤧",
    //       "🤒",
    //       "🤕",
    //       "🤠",
    //       "🤑",
    //       "😈",
    //       "👿",
    //       "👹",
    //       "👺",
    //       "🤡",
    //       "💩",
    //       "👻",
    //       "💀",
    //       "☠️",
    //       "👽",
    //       "👾",
    //       "🤖",
    //       "🎃",
    //       "😺",
    //       "😸",
    //       "😹",
    //       "😼",
    //       "😻",
    //       "😿",
    //       "😾",
    //       "🤲",
    //       "👐",
    //       "🙌",
    //       "👍",
    //       "👎",
    //       "🤝",
    //       "👏",
    //       "👊",
    //       "✊",
    //       "🤞",
    //       "✌️",
    //       "🤟",
    //       "🤘",
    //       "👌",
    //       "🤏",
    //       "☝️",
    //       "✋",
    //       "🤚",
    //       "🖐",
    //       "🖖",
    //       "👋",
    //       "🤙",
    //       "💪",
    //       "🦾",
    //       "🖕",
    //       "✍️",
    //       "🙏",
    //       "🦶",
    //       "🦵",
    //       "🦿",
    //       "💄",
    //       "💋",
    //       "👄",
    //       "👅",
    //       "🧠",
    //       "👀",
    //     ],
    //   },
    //   {
    //     name: "Animales y naturaleza",
    //     emojis: [
    //       "🐶",
    //       "🐱",
    //       "🐭",
    //       "🦊",
    //       "🐻",
    //       "🐼",
    //       "🐯",
    //       "🦁",
    //       "🐮",
    //       "🐷",
    //       "🐽",
    //       "🐸",
    //       "🐵",
    //       "🙈",
    //       "🙉",
    //       "🙊",
    //       "🐒",
    //       "🐔",
    //       "🐧",
    //       "🐤",
    //       "🐣",
    //       "🐥",
    //       "🦅",
    //       "🦉",
    //       "🦇",
    //       "🦄",
    //       "🐴",
    //       "🦋",
    //       "🐝",
    //       "🐛",
    //       "🐜",
    //       "🦟",
    //       "🐍",
    //       "🦖",
    //       "🦕",
    //       "🐙",
    //       "🦑",
    //       "🐡",
    //       "🐳",
    //       "🐋",
    //       "🐬",
    //       "🐆",
    //       "🦍",
    //       "🦧",
    //       "🦝",
    //       "🦡",
    //       "🦨",
    //       "🐁",
    //       "🐀",
    //       "🐾",
    //       "🐉",
    //       "🐲",
    //       "🌵",
    //       "🎄",
    //       "🌿",
    //       "☘",
    //       "🍀",
    //       "🌹",
    //       "🌷",
    //       "🌻",
    //       "🌞",
    //       "🌝",
    //       "🌛",
    //       "🌜",
    //       "🌕",
    //       "🌙",
    //       "🌎",
    //       "🌍",
    //       "🌏",
    //       "🪐",
    //       "⭐",
    //       "🌟",
    //       "✨",
    //       "⚡",
    //       "💥",
    //       "🔥",
    //       "🌈",
    //       "💧",
    //       "💦",
    //       "☔",
    //       "☂",
    //       "🌊",
    //       "🌫",
    //     ],
    //   },
    //   {
    //     name: "Comida y bebida",
    //     emojis: [
    //       "🍎",
    //       "🍐",
    //       "🍊",
    //       "🍋",
    //       "🍌",
    //       "🍉",
    //       "🍇",
    //       "🍓",
    //       "🍒",
    //       "🍑",
    //       "🍍",
    //       "🥥",
    //       "🍆",
    //       "🥑",
    //       "🥗",
    //       "🍲",
    //       "🍪",
    //       "🍩",
    //       "☕",
    //       "🍻",
    //       "🥂",
    //       "🍴",
    //       "🥣",
    //       "🥡",
    //       "🥢",
    //       "🧂",
    //       "🍅",
    //       "🥦",
    //       "🥒",
    //       "🧄",
    //       "🍭",
    //       "🍬",
    //       "🍥",
    //       "🍚",
    //       "🍙",
    //       "🍤",
    //       "🍕",
    //       "🍔",
    //       "🍟",
    //       "🍗",
    //       "🥚",
    //       "🥨",
    //     ],
    //   },
    //   {
    //     name: "Actividades",
    //     emojis: [
    //       "⚽",
    //       "🏀",
    //       "🏈",
    //       "⚾",
    //       "🥎",
    //       "🎾",
    //       "🏐",
    //       "🏉",
    //       "🥏",
    //       "🎱",
    //       "🏹",
    //       "🪁",
    //       "🎣",
    //       "🥊",
    //       "🥋",
    //       "⚔️",
    //       "🏆",
    //       "🥇",
    //       "🥈",
    //       "🥉",
    //       "🏅",
    //       "🎖",
    //       "🏵",
    //       "🎗",
    //       "🎫",
    //       "🎪",
    //       "🎨",
    //       "🎭",
    //       "🎬",
    //       "🎤",
    //       "🎧",
    //       "🎼",
    //       "🎹",
    //       "🥁",
    //       "🎷",
    //       "🎸",
    //       "🎻",
    //       "🎲",
    //       "♟",
    //       "🎮",
    //       "🎰",
    //       "🧩",
    //       "👮",
    //       "👮‍♀",
    //       "💂",
    //       "👨‍⚕",
    //       "👩‍✈",
    //       "👨‍🎨",
    //       "🦸‍♂",
    //       "🤶",
    //       "🎅",
    //       "🧙‍♂",
    //       "🧝",
    //       "🧛",
    //       "🧟‍♀",
    //       "🧟",
    //       "🧞",
    //       "🧜",
    //       "🧚",
    //       "👼",
    //       "💆‍♀",
    //       "💅",
    //       "🤳",
    //       "💃",
    //       "🕺",
    //       "👯‍♀",
    //       "🕴",
    //     ],
    //   },
    //   {
    //     name: "Viajes y lugares",
    //     emojis: [
    //       "🚗",
    //       "🚕",
    //       "🛸",
    //       "🚁",
    //       "🛶",
    //       "🚦",
    //       "🚥",
    //       "🗿",
    //       "🚄",
    //       "🚁",
    //       "🚦",
    //       "⚓",
    //       "🌠",
    //       "🎇",
    //       "⛩",
    //       "🌄",
    //       "🎡",
    //       "🎢",
    //       "🗽",
    //       "🏘",
    //       "🏠",
    //       "🚀",
    //       "🚧",
    //     ],
    //   },
    //   {
    //     name: "Objetos",
    //     emojis: [
    //       "⌚",
    //       "📱",
    //       "📲",
    //       "💻",
    //       "💾",
    //       "💽",
    //       "📷",
    //       "🎥",
    //       "📞",
    //       "📟",
    //       "⏰",
    //       "⌛",
    //       "⏳",
    //       "🔌",
    //       "💡",
    //       "💰",
    //       "💎",
    //       "🔫",
    //       "💣",
    //       "🔪",
    //       "🏺",
    //       "🚬",
    //       "📅",
    //       "🔎",
    //       "🔍",
    //       "🔏",
    //       "🔐",
    //       "🔒",
    //       "🔓",
    //       "🎩",
    //       "👑",
    //       "💍",
    //       "👓",
    //       "🥽",
    //       "👙",
    //       "🎈🎈",
    //       "🎁🎁",
    //       "🛒",
    //       "🧸",
    //       "🎊",
    //       "🎉",
    //       "👗",
    //       "🩱",
    //       "🧤",
    //     ],
    //   },
    //   {
    //     name: "Símbolos",
    //     emojis: [
    //       "❤️",
    //       "🧡",
    //       "💛",
    //       "💙",
    //       "💜",
    //       "🤍",
    //       "💔",
    //       "💕",
    //       "💓",
    //       "💗",
    //       "💖",
    //       "💘",
    //       "💝",
    //       "💟",
    //       "🆚",
    //       "❌",
    //       "🚫",
    //       "🚷",
    //       "📵",
    //       "🚭",
    //       "⚠",
    //       "🚸",
    //       "🔱",
    //       "✅",
    //       "✳",
    //       "❎",
    //       "🌐",
    //       "💤",
    //       "🚹",
    //       "🚺",
    //       "🚼",
    //       "🚻",
    //       "💲",
    //       "🃏",
    //       "🔔",
    //       "🔕",
    //       "📣",
    //       "📢",
    //       "💬",
    //       "💭",
    //       "🗯",
    //     ],
    //   },
    // ],
    images: [
      "https://static-cdn.jtvnw.net/emoticons/v2/307595784/default/light/1.0",
      "https://static-cdn.jtvnw.net/emoticons/v2/307595790/default/light/1.0",
      "https://static-cdn.jtvnw.net/emoticons/v2/307595788/default/light/1.0",
      "https://cdn.discordapp.com/emojis/778327347095011379.png?v=1",
      "https://cdn.discordapp.com/emojis/779485091763454003.png?v=1",
      "https://cdn.discordapp.com/emojis/802665114997882920.png?v=1",
      "https://cdn.discordapp.com/emojis/837922368759398400.png?v=1",
      "https://cdn.discordapp.com/emojis/836671910703267951.png?v=1",
      "https://cdn.discordapp.com/emojis/839341733581684737.png?v=1",
      "https://cdn.discordapp.com/emojis/834656572617654282.png?v=1",
      "https://cdn.discordapp.com/emojis/837925381071175720.png?v=1",
      "https://cdn.discordapp.com/emojis/836680921586335754.png?v=1",
      "https://cdn.discordapp.com/emojis/836680579562602557.png?v=1",
      "https://cdn.discordapp.com/emojis/778327280270835783.png?v=1",
      "https://cdn.discordapp.com/emojis/839345717910831104.png?v=1",
      "https://cdn.discordapp.com/emojis/823094097157423115.png?v=1",
      "https://cdn.discordapp.com/emojis/817281701147312189.png?v=1",
      "https://www.icegif.com/wp-content/uploads/zero-two-icegif-9.gif",
      "https://cdn.discordapp.com/emojis/826228093239951441.png?v=1",
      "https://media.discordapp.net/attachments/725628521388572733/832484325622677534/image0-1-1-1.gif",
      "https://cdn.discordapp.com/emojis/761368328160935956.gif?v=1",
      "https://media.discordapp.net/attachments/783970704650666005/788573285130305556/Che_musicaso.gif",
      "https://media.discordapp.net/attachments/742105927020445727/829818851830005841/750122626223046736-1-1-1.gif",
      "https://media.discordapp.net/attachments/765615121669292103/820862416618520586/image0-2-1-1-1-1.gif",
      "https://cdn.discordapp.com/emojis/834238993767202896.gif?v=1",
      "https://cdn.discordapp.com/emojis/834239000872353803.gif?v=1",
      "https://cdn.discordapp.com/emojis/588039968774029313.gif?v=1",
      "https://cdn.discordapp.com/emojis/831950861952352337.png?v=1",
      "https://cdn.discordapp.com/emojis/831950863421407263.png?v=1",
      "https://cdn.discordapp.com/emojis/825032881109598208.gif?v=1",
      "https://cdn.discordapp.com/emojis/588039975447035918.gif?v=1",
      "https://cdn.discordapp.com/emojis/740383846952075284.png?v=1",
      "https://cdn.discordapp.com/emojis/841462659773759538.png?v=1",
      "https://cdn.discordapp.com/attachments/778266393522470952/841463730541559858/808721618896552008.png",
      "https://cdn.discordapp.com/attachments/778266393522470952/841464578978086912/782279680311951380.png",
      "https://cdn.discordapp.com/attachments/778266393522470952/841464539459223572/782804540785164289.png",
      "https://cdn.discordapp.com/emojis/841464346769096724.png?v=1",
      "https://cdn.discordapp.com/attachments/778266393522470952/841465677788610620/738155007156813935.png",
      "https://cdn.discordapp.com/attachments/778266393522470952/841465714803212338/836322599410597938.png",
      "https://cdn.discordapp.com/emojis/837922594149236797.png?v=1",
      "https://cdn.discordapp.com/attachments/778266393522470952/841467744695353355/5332149ff5be2c5cf3a920921ed089d3.png",
      "https://cdn.discordapp.com/emojis/834239014554435597.png?v=1",
      "https://cdn.discordapp.com/emojis/834239007549292615.png?v=1",
      "https://cdn.discordapp.com/emojis/834238102888251454.gif?v=1",
      "https://cdn.discordapp.com/emojis/765797594903216158.gif?v=1",
      "https://cdn.discordapp.com/emojis/698635123846807622.gif?v=1",
      "https://cdn.discordapp.com/emojis/698720193060536320.gif?v=1",
    ],
  }),
  sockets: {
    async connect() {},

    async disconnect() {
      console.log("Esta desconectado");
    },
    changeMessage: async function (data) {
      var flag = await this.verifyToken();
      if (flag) {
        this.active = data;
      }
    }
  },
  async mounted() {
    this.token = window.localStorage.getItem("token-asdiegoYA");
    if (this.token == null) {
      window.location.href = "/login";
    }
    await this.verifyToken();
  },
  methods: {
    changeImageForEmoji() {
      this.emoji = this.imageEmoji;
      this.emojichange();
      this.imageEmoji = "";
    },
    emojichange() {
      this.$socket.emit("emojiChangeClient", this.$store.state.emoji);
    },
    async verifyToken() {
      var api = this.$store.state.URL + "/auth/home";
      var response = await this.axios.get(api, {
        headers: {
          "x-access-token": this.token,
        },
      });

      if (response) {
        var data = response.data;
        this.auth = data.auth;
        if (!data.auth) {
          window.localStorage.removeItem("token-asdiegoYA");
          window.location.href = "/login";
        }
      }
      return this.auth;
    },
    async createToken() {
      var flag = await this.verifyToken();
      if (flag) {
        var api =
          this.$store.state.URL +
          "/channels/myTokenStreamlabs?code=" +
          this.code;

        var response = await this.axios.get(api);
        if (response) {
          if (response.data) {
            this.code = response.data.message;
          }
        } else {
          this.code = "F de los F";
        }
      }
    },
    enableMessage() {
      this.active = !this.active;
      this.$socket.emit("changeMessageServer", this.active);
    },
    changeMessageRandomClient() {
      this.$socket.emit("messageRandom", this.$store.state.messageSubs);
    },
  },
};
</script>
