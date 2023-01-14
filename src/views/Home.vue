<template>
  <div class="home">
    <!-- <NavBar :channelName="channel.names" :photo="channel.photo" /> -->
    <v-container fluid>
      <!--PRESENTACION-->
      <v-parallax
        class="containerMain row"
        dark
        src="https://fondosmil.com/fondo/67366.jpg"
      >
        <v-row class="text-center mb-2" align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="titleServer font-weight-normal mb-4">
              <span class="mr-1"
                ><img :src="$store.state.emoji" class="emoji" alt=""
              /></span>
              <template v-if="channel.names">{{
                channel.names.youtube
              }}</template>
              <span class="ml-1"
                ><img :src="$store.state.emoji" class="emoji" alt=""
              /></span>
            </h1>
            <h4 class="subheading">
              Este es una página para conocer un poco más de mi
            </h4>
          </v-col>
          <!-- <v-col offset-md="12" cols="12" sm="6" md="4" lg="3">
            <v-btn
              large
              href="https://discord.gg/AwGHA7mCY2"
              target="_blank"
              color="#7289da"
              style="color: white"
              class="pt-1"
            >
              <v-icon style="margin-right: 5px">mdi-discord</v-icon>
              <div>
                <span>{{ myDiscord.name }}</span>
                <br />
                <span class="caption font-weight-bold"
                  ><v-icon
                    style="border: 1px solid white; border-radius: 50%"
                    color="green"
                    class="caption mb-1"
                    small
                    >mdi-checkbox-blank-circle</v-icon
                  >
                  {{ myDiscord.approximate_presence_count }} || Somos:
                  {{ myDiscord.approximate_member_count }}
                </span>
              </div>
            </v-btn>
          </v-col> -->
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-btn
              large
              href="https://www.youtube.com/channel/UCH5RD3yCZhuDf8V51rC1R7g"
              target="_blank"
              color="#c4302b"
              style="color: white"
            >
              <v-icon style="margin-right: 5px">mdi-youtube</v-icon> Youtube
              <template v-if="channel.subs">
                || {{ channel.subs.youtube }} subs</template
              >
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-btn
              large
              href="https://www.twitch.tv/DiegoYance"
              target="_blank"
              color="#6441a5"
              style="color: white"
            >
              <v-icon style="margin-right: 5px">mdi-twitch</v-icon> Twitch
              <template v-if="channel.subs">
                || {{ channel.subs.twitch }} followers</template
              >
            </v-btn>
          </v-col>
          <!-- <v-col cols="12" sm="6" md="4" lg="3">
            <router-link to="/servers">
              <v-btn large color="success" style="color: white">
                <v-icon style="margin-right: 5px">mdi-minecraft</v-icon>
                Servers MC
              </v-btn>
            </router-link>
          </v-col> -->
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-btn
              large
              href="https://www.tiktok.com/@DiegoYance"
              target="_blank"
              color="#28041c"
              style="color: white"
            >
              <img style="margin-right: 5px" width="30" height="auto" src="https://pngimg.com/uploads/tiktok/tiktok_PNG8.png" alt="tiktok"> Mi TikTok
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-btn
              large
              href="https://steamcommunity.com/profiles/76561198881503101"
              target="_blank"
              color="#081c3c"
              style="color: white"
            >
              <v-icon style="margin-right: 5px">mdi-steam</v-icon> Mi Steam
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-btn
              large
              href="https://www.paypal.com/myaccount/transfer/homepage/external/profile?flowContextData=jybKnxkvchtffK3nombhxOOCEu4i0d7wOYlrNaDiIvWrD5G0etRYrAhJCWQZnudz_30BIGAsZMAW1-lUn0s5L-6b46qiJI7aSdeup4d8U6AJBiEizfR7ouFb-vtG29Kh8lbjYbkSZFhVKpnu_Gq3fmvqn8hCu2s1Yh0Wqv79184TqPlGCXezr-clhkwD2bATlNehLbm7yFKqBUZgSEzsGTZRRvHDRj4MeAtg1eV3CtQtBzhrH4MjetZZAcpwitqgyYHWKhoO5Ok0WqAurlwLZrzzqRwcAGqg7VHV09bw1ELRpdlxFgPwwXATpOe3RqKioy8esS_SFyT9qXdOv1Mzj-un33PmpP1yv1ml8IjItttlxQgsCRAuGJ5D0Ni"
              target="_blank"
              color="#3b7bbf"
              style="color: white"
            >
              <v-icon style="margin-right: 5px">mdi-gift</v-icon> Donaciones
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-btn
              large
              href="https://streamlabs.com/DiegoYance-/tip"
              target="_blank"
              color="#30C3A2"
              style="color: white"
            >
              <v-icon style="margin-right: 5px">mdi-emoticon</v-icon> Streamlabs
            </v-btn>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-btn
              large
              href="https://www.streamloots.com/DiegoYance"
              target="_blank"
              color="#cfc402"
              style="color: white"
            >
              <v-icon style="margin-right: 5px">mdi-emoticon-devil</v-icon>
              StreamLoots
            </v-btn>
          </v-col>
        </v-row>
      </v-parallax>

      <!--Stream Avatars-->
      <v-row
        style="background: #18042c"
        align="center"
        justify="center"
        class="pt-1 pb-5 text-center"
      >
        <v-col cols="12" style="color: white">
          <v-img
            style="margin: auto"
            min-width="100"
            max-width="300"
            src="https://cdn.streamloots.com/uploads/5f105ae9953d4300349198af/c2d99576-c1a9-44e6-b7ac-b0ab6c018a2e.png"
          ></v-img>
        </v-col>
        <v-col cols="12">
          <v-img
            style="margin: auto"
            min-width="100"
            max-width="600"
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/29607835/d69495feb1a913c487a2f5d3fb315a4e4e129eff.gif"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <h2 style="color: white">Youtube</h2>
          <v-btn
            color="#c4302b"
            style="color: white"
            target="_blank"
            href="https://server.streamavatars.com/viewer.html?channel_id=UCH5RD3yCZhuDf8V51rC1R7g&platform=youtube"
            ><v-icon style="margin-right: 5px">mdi-controller-classic </v-icon>
            Cambiar avatar</v-btn
          >
        </v-col>
        <v-col cols="12" sm="6">
          <h2 style="color: white">Twitch</h2>
          <v-btn
            color="#6441a5"
            style="color: white"
            target="_blank"
            href="https://server.streamavatars.com/viewer.html?channel_id=565553685&platform=twitch"
            ><v-icon style="margin-right: 5px">mdi-controller-classic </v-icon>
            Cambiar avatar</v-btn
          >
        </v-col>
      </v-row>

      <!--WIDGET RANDOM-->
      <v-row
        style="background: #1f3438"
        align="center"
        justify="center"
        class="pt-1 pb-5 text-center"
      >
        <v-col cols="12" style="color: white">
          <h1 class="text-center areaSpam">Interactúa con el directo</h1>
        </v-col>

        <v-col cols="12" style="color: white">
          <p>
            Si eres
            <a
              href="https://www.youtube.com/channel/UCH5RD3yCZhuDf8V51rC1R7g/join"
              target="_blank"
              ><v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on"
                    ><i><b>miembro en youtube</b></i></span
                  >
                </template>
                Nivel No Latam
              </v-tooltip></a
            >
            o
            <a href="https://www.twitch.tv/DiegoYance" target="_blank">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on"
                    ><i><b>suscriptor en twitch</b></i></span
                  >
                </template>
                Nivel 3
              </v-tooltip>
            </a>
            <br />
            podrás modificar el mensaje, emoji o fondo, así esten bloqueados.
          </p>
        </v-col>
        <v-col
          v-if="$store.state.activeMessage"
          cols="12"
          sm="6"
          md="5"
          lg="4"
          class="text-center textRandomClient"
        >
          <v-text-field
            label="Escribe cualquier webada..."
            solo
            maxlength="50"
            :disabled="disabledMessage"
            v-model="$store.state.messageSubs"
            @keyup="changeMessageRandom"
            counter="50"
          ></v-text-field>
        </v-col>
        <v-col v-if="!$store.state.activeMessage">
          <MessageRandom></MessageRandom>
        </v-col>

        <!--Emoticones random-->
        <v-col cols="12">
          <h5 style="color: white; margin-bottom: 5px">Emoji actual</h5>
          <span class="mr-1"
            ><img :src="$store.state.emoji" width="auto" height="120px" alt=""
          /></span>
        </v-col>
        <v-col v-if="$store.state.activeEmojis" class="toogleEmoji" cols="12">
          <div
            :class="{ toggle: true, enable: toggleEmoji }"
            @click="toggleEmoji = !toggleEmoji"
          >
            <v-switch
              @click="toggleEmoji = !toggleEmoji"
              class="text-center"
              color="success"
              v-model="toggleEmoji"
              :label="
                toggleEmoji
                  ? 'Click aquí para ocultar los emojis 🤡'
                  : 'Click aquí para ver los emojis 🤡 '
              "
            ></v-switch>
          </div>
        </v-col>
        <v-col cols="12" v-if="$store.state.activeEmojis && toggleEmoji">
          <ButtonsEmoji colorButton="pink" />
        </v-col>
        <v-col cols="12">
          <v-col cols="12">
            <h5 style="color: white; margin-bottom: 5px">Fondo actual</h5>
            <span class="mr-1"
              ><img
                :src="$store.state.background"
                width="auto"
                height="120px"
                alt=""
            /></span>
          </v-col>
          <v-col class="toogleEmoji" cols="12">
            <div
              :class="{ toggle: true, enable: toggleBackground }"
              @click="toggleBackground = !toggleBackground"
            >
              <v-switch
                @click="toggleBackground = !toggleBackground"
                class="text-center"
                color="success"
                v-model="toggleBackground"
                :label="
                  toggleBackground
                    ? 'Click aquí para ocultar los fondos 🏯'
                    : 'Click aquí para ver los fondos 🏯'
                "
              ></v-switch>
            </div>
          </v-col>
          <v-col cols="12" v-if="toggleBackground">
            <ButtonBackground />
          </v-col>
        </v-col>
      </v-row>

      <!--LISTADOS-->
      <div
        class="containerWeb row pb-3"
        dark
        style="background: #1e2460; color: white !important"
      >
        <!-- <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="font-weight-bold mt-2 subTitleServer">
              👑 Mis Moderadores 👑
            </h1>
            <br />
          </v-col>
        </v-row> -->
        <v-container fluid>
          <v-row>
            <v-col cols="12" class="text-center">
              <h1>Muchisimas gracias por el apoyo muchanchos(as)</h1>
            </v-col>
            <!--MODERADORES-->
            <v-col cols="12" sm="12" md="6" lg="3">
              <v-expansion-panels>
                <v-expansion-panel style="color: white !important">
                  <v-expansion-panel-header
                    color="primary accent-4"
                    style="color: white"
                    class="text-center"
                    @click="getMods()"
                    :disabled="showListMod"
                    ><h2>👑 Ver Moderadores 👑</h2></v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    <v-progress-linear
                      color="primary"
                      class="mt-5"
                      indeterminate
                      rounded
                      height="6"
                      v-if="showListMod"
                    ></v-progress-linear>
                    <v-list subheader>
                      <v-list-item v-for="(next, i) in moderators" :key="i">
                        <v-list-item-avatar>
                          <v-img
                            :alt="`${next.channelName} avatar`"
                            :src="next.channelPhoto.default.url"
                          ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title
                            v-text="next.channelName"
                          ></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-icon>
                          <v-btn
                            style="width: 100%"
                            class="btn-yt"
                            color="#c4302b"
                            :href="next.urlChannel"
                            target="_blank"
                            small
                          >
                            <v-icon style="margin-right: 5px"
                              >mdi-youtube</v-icon
                            >
                            || {{ next.statistics.subscriberCount }}
                          </v-btn>
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>

            <!--DONADORES-->
            <v-col cols="12" sm="12" md="6" lg="3">
              <v-expansion-panels>
                <v-expansion-panel style="color: white !important">
                  <v-expansion-panel-header
                    color="#008f39"
                    class="text-center"
                    style="color: white !important"
                    @click="getDonators()"
                    :disabled="showListDonators"
                    ><h2>💙 Top Donadores 💙</h2></v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    <v-progress-linear
                      color="#008f39"
                      class="mt-5"
                      indeterminate
                      rounded
                      height="6"
                      v-if="showListDonators"
                    ></v-progress-linear>
                    <v-list subheader>
                      <v-list-item v-for="(next, i) in myDonators" :key="i">
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="next[0].name"
                          ></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-icon>
                          <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                class="mx-2"
                                dark
                                small
                                color="#85bb65"
                                v-bind="attrs"
                                v-on="on"
                              >
                                <v-icon dark> mdi-currency-usd </v-icon>
                                <span
                                  style="margin-right: 5px; font-size: 15px"
                                  >{{ totalDonation(next) }}</span
                                >
                              </v-btn>
                            </template>
                            <span>Gracias por la limosna 💙</span>
                          </v-tooltip>
                          <v-btn
                            x-small
                            fab
                            class="btn-yt"
                            color="primary"
                            @click="selectDonator(next)"
                          >
                            <v-icon>mdi-eye-outline</v-icon>
                          </v-btn>
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <v-dialog
                v-model="messageDonatorsShow"
                max-width="500px"
                scrollable
              >
                <v-card>
                  <v-toolbar color="pink" dark
                    ><h3 v-if="donatorSelected[0] != null">
                      Mensajes de {{ donatorSelected[0].name }}
                    </h3></v-toolbar
                  >
                  <v-card-text>
                    <div class="font-weight-bold ml-8 mb-2 mt-2">
                      <h2>Linea de tiempo pe</h2>
                    </div>
                    <v-timeline align-top dense>
                      <v-timeline-item
                        v-for="(donator, i) in donatorSelected"
                        :key="i"
                        :color="'green'"
                        small
                      >
                        <div>
                          <v-btn x-small class="mb-1" dark color="error">
                            <v-icon style="font-size: 18px"
                              >mdi-currency-usd
                            </v-icon>
                            <strong style="font-size: 15px">{{
                              parseInt(donator.amount)
                            }}</strong>
                          </v-btn>
                          <div class="font-weight-normal">
                            <v-icon>mdi-calendar-range</v-icon>
                            {{ formatDate(donator.created_at) }}
                          </div>
                          <div v-if="donator.message != ''">
                            <span style="color: black; font-size: 18px">{{
                              donator.message
                            }}</span>
                          </div>
                          <div v-else>
                            <span style="color: red; font-size: 18px"
                              >Pos no mando mensaje aquí ;-;</span
                            >
                          </div>
                        </div>
                      </v-timeline-item>
                    </v-timeline>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="pink"
                      text
                      @click="messageDonatorsShow = false"
                    >
                      Cerrar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
            <!--SUBSCRIPTORES-->
            <v-col cols="12" sm="12" md="6" lg="3">
              <v-expansion-panels>
                <v-expansion-panel style="color: white !important">
                  <v-expansion-panel-header
                    :disabled="showListSuscribers"
                    color="red accent-4"
                    style="color: white !important"
                    class="text-center"
                    @click="getSubscribers(maxSuscribers)"
                    ><h2>
                      <v-icon style="color: white !important"
                        >mdi-youtube</v-icon
                      >
                      Los {{ maxSuscribers }} últimos subs
                    </h2></v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    <v-progress-linear
                      color="red"
                      class="mt-5"
                      indeterminate
                      rounded
                      height="6"
                      v-if="showListSuscribers"
                    ></v-progress-linear>
                    <v-list subheader>
                      <v-list-item
                        v-for="(next, i) in mySubscribersYT"
                        :key="i"
                      >
                        <v-list-item-avatar>
                          <v-img
                            :alt="`${next.channelName} avatar`"
                            :src="next.channelPhoto.default.url"
                          ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title
                            v-text="next.channelName"
                          ></v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-icon>
                          <v-btn
                            style="width: 100%"
                            class="btn-yt"
                            color="#c4302b"
                            :href="next.urlChannel"
                            target="_blank"
                            small
                          >
                            <v-icon style="margin-right: 5px"
                              >mdi-youtube</v-icon
                            >
                            || {{ next.statistics.subscriberCount }}
                          </v-btn>
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <!--FOLLOWERS-->
            <v-col cols="12" sm="12" md="6" lg="3">
              <v-expansion-panels>
                <v-expansion-panel style="color: white !important">
                  <v-expansion-panel-header
                    color="deep-purple accent-4"
                    style="color: white !important"
                    class="text-center"
                    :disabled="showListFollowes"
                    @click="getFollowers(maxFollows)"
                    ><h2>
                      <v-icon style="color: white !important"
                        >mdi-twitch</v-icon
                      >
                      Los {{ maxFollows }} últimos followers
                    </h2></v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    <v-progress-linear
                      color="deep-purple"
                      class="mt-5"
                      indeterminate
                      rounded
                      height="6"
                      v-if="showListFollowes"
                    ></v-progress-linear>
                    <v-list subheader>
                      <v-list-item
                        v-for="(next, i) in myFollowersTwitch"
                        :key="i"
                      >
                        <v-list-item-avatar>
                          <v-img
                            :alt="`${next.channelName} avatar`"
                            :src="next.channelPhoto"
                          ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title
                            v-text="next.channelName"
                          ></v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-icon>
                          <v-btn
                            class="btn-yt"
                            color="deep-purple"
                            :href="next.urlChannel"
                            target="_blank"
                            small
                          >
                            <v-icon style="margin-right: 5px; font-size: 15px"
                              >mdi-twitch</v-icon
                            >
                            link
                          </v-btn>
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
          <!-- <v-row justify="center">
            <v-col
              v-for="(next, i) in moderators"
              :key="i"
              cols="12"
              sm="4"
              md="4"
              lg="3"
            >
              <a
                :href="next.urlChannel"
                class="subheading mx-3 deleteUnderlined"
                target="_blank"
              >
                <v-img
                  :src="next.channelPhoto.default.url"
                  alt="Moderadores"
                  class="shrink mr-2"
                  contain
                  height="100px"
                  width="100px"
                  style="
                    margin-left: auto;
                    margin-right: auto !important;
                    border-radius: 100%;
                  "
                />

                <h3 style="color: white !important" class="text-center">
                  {{ next.channelName }}
                </h3>
                <div
                  v-if="10 < next.statistics.subscriberCount"
                  style="width: 100%"
                >
                  <h5 class="btn-yt text-center">Youtuber</h5>
                </div>
              </a>
            </v-col>
          </v-row> -->
        </v-container>
      </div>

      <!--SERVIDORES-->
      <v-row class="text-center" style="background: #212121">
        <v-col class="mb-5" cols="12"> </v-col>

        <!-- <v-col class="mb-5" cols="12">
          <h2 class="display-1 font-weight-bold mb-3">
            Texture pack de Suscriptores
          </h2>
          <br />

          <v-container>
            <v-row justify="center">
              <v-col
                v-for="(next, i) in texturePack"
                :key="i"
                cols="12"
                sm="4"
                md="4"
                lg="3"
              >
                <a
                  :href="next.urlChannel"
                  class="subheading mx-3 deleteUnderlined"
                  target="_blank"
                >
                  <v-img
                    :src="next.channelPhoto.default.url"
                    alt="Moderadores"
                    class="shrink mr-2"
                    contain
                    height="100px"
                    width="100px"
                    style="
                      margin-left: auto;
                      margin-right: auto !important;
                      border-radius: 100%;
                    "
                  />

                  <h3 style="color: white !important" class="text-center">
                    {{ next.channelName }}
                  </h3>
                  <div
                    v-if="10 < next.statistics.subscriberCount"
                    style="width: 100%"
                  >
                    <h5 class="btn-yt text-center">Youtuber</h5>
                  </div>
                </a>
              </v-col>
            </v-row>
          </v-container>
        </v-col> -->

        <v-col class="mb-5" cols="12" style="color: white">
          <h2 class="display-1 font-weight-bold mb-3">
            Servidores de minecraft
          </h2>
          <h5>En donde tengo Rango 💙</h5>
          <br />
          <v-row>
            <v-col>
              <v-btn
                style="color: white"
                :color="viewServer ? 'red' : 'green'"
                :loading="loadingServers"
                @click="showServer()"
              >
                <template v-if="viewServer"> Ocultar servidores </template>
                <template v-else> Ver servidores </template>
              </v-btn>
            </v-col>
          </v-row>
          <!-- <v-row cols="12" v-if="viewServer && loadingServers">
            <v-progress-circular
              style="margin: auto"
              :size="100"
              :width="7"
              color="purple"
              indeterminate
            ></v-progress-circular>
          </v-row> -->
          <v-row v-if="viewServer" justify="center">
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="4"
              v-for="(server, i) in servers"
              :key="i"
            >
              <div class="subheading mx-3">
                <v-img
                  :src="server.img"
                  alt="Servers"
                  class="shrink mr-2"
                  contain
                  height="40px"
                  width="40px"
                  style="
                    border-radius: 100%;
                    margin-left: auto;
                    margin-right: auto !important;
                  "
                />

                <h4>💙 {{ server.name }} 💙</h4>
                <v-icon color="blue">mdi-seal-variant </v-icon>

                <template v-if="server.nameRange == 'FAMOSO'">
                  <b style="padding: 2px 5px; color: #dc48ff">{{
                    server.nameRange
                  }}</b>
                </template>
                <template v-else-if="server.nameRange == 'STREAMER'">
                  <b style="padding: 2px 5px; color: #6441a5">{{
                    server.nameRange
                  }}</b>
                </template>
                <template v-else-if="server.nameRange == 'TWITCH'">
                  <b style="padding: 2px 5px; color: #6441a5">{{
                    server.nameRange
                  }}</b>
                </template>
                <template v-else-if="server.nameRange == 'YOUTUBER'">
                  <b style="padding: 2px 5px"
                    ><span style="color: white">YOU</span
                    ><span style="color: red">TUBER</span></b
                  >
                </template>
                <template v-else-if="server.nameRange == 'MINIYT'">
                  <b style="padding: 2px 5px"
                    ><span style="color: white">MINI</span
                    ><span style="color: red">YT</span></b
                  >
                </template>
                <template v-else>
                  <b style="color: #6441a5; padding: 2px 5px">{{
                    server.nameRange
                  }}</b>
                </template>

                <v-icon color="blue">mdi-seal-variant </v-icon>
                <br />

                <v-icon color="blue">mdi-desktop-classic</v-icon> IP:
                {{ server.pc }}
                <br />

                <template v-if="server.players">
                  <v-icon color="blue">mdi-account-group-outline</v-icon>
                  {{ server.players }}
                  <br />
                </template>

                <!-- <template v-if="server.online != null">
                  <v-chip small :color="server.online ? 'green' : 'red'" dark>
                    <template v-if="server.online"
                      ><b>Esta ready 😎</b></template
                    >
                    <template v-else><b>No esta ready 🙂</b></template>
                  </v-chip>
                </template> -->

                <template v-if="server.discord">
                  <v-btn
                    target="_blank"
                    icon
                    color="light"
                    :href="server.discord"
                    ><v-icon color="#7289da">mdi-discord</v-icon>
                    <span style="color: white"> DISCORD</span>
                  </v-btn>
                </template>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <!-- <v-col class="mb-5" cols="12">
          <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

          <v-row justify="center">
            <a
              v-for="(eco, i) in ecosystem"
              :key="i"
              :href="eco.href"
              class="subheading mx-3"
              target="_blank"
            >
              {{ eco.text }}
            </a>
          </v-row>
        </v-col> -->
      </v-row>

      <!--CONTACTO-->
      <v-row
        class="text-center"
        style="background: black; color: white; height: 100%"
      >
        <v-col cols="12" sm="6" md="4" class="mb-3 mt-3">
          Vivo en mi casa <br />
          Lima / Perú
        </v-col>
        <v-col cols="12" sm="6" md="4" class="mb-3 mt-3">
          <v-btn
            color="#7289da"
            style="color: white"
            small
            rounded
            href="Discord:Diego YA#1258"
            ><v-icon class="mr-1" style="font-size: 15px; color: white"
              >mdi-discord</v-icon
            >
            Diego YA#1258</v-btn
          >
          <v-btn
            class="mx-2"
            fab
            dark
            x-small
            color="purple"
            @mouseover="copyGmail = true"
            @mouseout="copyGmail = false"
            @click="
              copyText('Diego YA#1258');
              timeOut('copiedGmail');
            "
          >
            <v-icon dark> mdi-content-copy </v-icon>
          </v-btn>
          <br />
          <template v-if="copyGmail">
            <span v-if="!copiedGmail" class="caption">Click para copiar</span>
            <span v-else class="caption">Copiado en el portapapeles</span>
          </template>
        </v-col>
        <v-col cols="12" sm="6" md="4" class="mb-3 mt-3">
          <v-btn
            color="cyan"
            dark
            rounded
            small
            href="mailto:diego.yance.arqque@gmail.com"
            ><v-icon class="mr-1" style="font-size: 15px; color: white"
              >mdi-email</v-icon
            >
            diego.yance.arqque@gmail.com</v-btn
          >
          <v-btn
            class="mx-2"
            fab
            dark
            x-small
            color="purple"
            @click="
              copyText('diego.yance.arqque@gmail.com');
              timeOut('copiedDiscord');
            "
            @mouseover="copyDiscord = true"
            @mouseout="copyDiscord = false"
          >
            <v-icon dark> mdi-content-copy </v-icon>
          </v-btn>
          <br />
          <template v-if="copyDiscord">
            <span v-if="!copiedDiscord" class="caption">Click para copiar</span>
            <span v-else class="caption">Copiado en el portapapeles</span>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Fire from "@/components/Fire.vue";
import ButtonsEmoji from "@/components/ButtonsEmoji.vue";
import ButtonBackground from "@/components/ButtonBackground.vue";
import MessageRandom from "@/components/MessageRandom.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Fire,
    ButtonsEmoji,
    MessageRandom,
    ButtonBackground,
  },
  data: () => ({
    viewServer: false,
    loadingServers: false,
    toggleEmoji: false,
    toggleBackground: false,
    maxSuscribers: 20,
    maxFollows: 20,
    copyDiscord: false,
    copiedDiscord: false,
    copyGmail: false,
    copiedGmail: false,
    channel: {},
    messageSub: "",
    texturePack: [],
    myDiscord: {},
    donatorSelected: {},
    messageDonatorsShow: false,
    servers: [],
    moderators: [],
    showListMod: false,
    showListFollowes: false,
    showListSuscribers: false,
    showListDonators: false,
    mySubscribersYT: [],
    myFollowersTwitch: [],
    myDonators: [],
    disabledMessage: false
  }),
  sockets: {
    async connect() {
      console.log("Esta conectado");
    },

    async disconnect() {
      console.log("Esta desconectado");
    },
  },
  methods: {
    showServer() {
      this.viewServer = !this.viewServer;
      if (this.viewServer) {
        this.loadingServers = true;
        this.getMyServerMC();
      }
    },
    formatDate(time) {
      var date = new Date(time * 1000).toLocaleString();
      return date;
    },
    totalDonation(items) {
      var accountant = 0;
      for (var i = 0; i < items.length; i++) {
        accountant += parseInt(items[i].amount);
      }
      return accountant;
    },
    selectDonator(items) {
      this.donatorSelected.name = items[0].name;
      this.messageDonatorsShow = true;
      this.donatorSelected = items.sort(function (a, b) {
        return b.created_at - a.created_at;
      });
    },
    getDiscord() {
      var api = this.$store.state.URL + "/channels/myDiscordDetails";

      this.axios
        .get(api)
        .then((response) => {
          if (response.data == null) {
            console.log("Error");
          }
          return response.data;
        })
        .then((data) => {
          this.myDiscord = data.myDiscord;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    timeOut(variable) {
      this[variable] = true;
      setTimeout(() => {
        this[variable] = false;
      }, 3000);
    },
    copyText(text) {
      var aux = document.createElement("input");
      aux.setAttribute("value", text);
      document.body.appendChild(aux);
      aux.select();
      document.execCommand("copy");
      document.body.removeChild(aux);
    },
    changeMessageRandom() {
      var api = this.$store.state.URL + "/permission/user";
      this.axios
        .get(api)
        .then((response) => {
          if (response.data == null) {
            console.log("Error");
          }
          return response.data;
        })
        .then((data) => {
          var user = data.user;

          if(user.read){
            this.disabledMessage = false;
            this.$socket.emit("messageRandom", this.$store.state.messageSubs);
          } else {
            this.disabledMessage = true;
          }
        })
        .catch((e) => {
          console.log(e);
        });
      
    },
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
    getTexturePack() {
      var api = this.$store.state.URL + "/channels/texturePack";
      this.axios
        .get(api)
        .then((response) => {
          if (response.data == null) {
            console.log("Error");
          }
          return response.data;
        })
        .then((data) => {
          this.texturePack = data.texturePack;
          this.texturePack = this.texturePack.sort(function (a, b) {
            return a.channelName.localeCompare(b.channelName);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getMods() {
      this.showListMod = this.moderators.length == 0;
      this.moderators = [];
      if (this.showListMod) {
        var api = this.$store.state.URL + "/channels/modYoutube";
        this.axios
          .get(api)
          .then((response) => {
            if (response.data == null) {
              console.log("Error");
            }
            return response.data;
          })
          .then((data) => {
            this.moderators = data.moderators;
            this.moderators = this.moderators.sort(function (a, b) {
              return a.channelName.localeCompare(b.channelName);
            });
            this.showListMod = false;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },

    getDonators() {
      this.showListDonators = this.myDonators.length == 0;
      this.myDonators = [];
      if (this.showListDonators) {
        var api = this.$store.state.URL + "/channels/myDonations";
        this.axios
          .get(api)
          .then((response) => {
            if (response.data == null) {
              console.log("Error");
            }
            return response.data.myDonators;
          })
          .then((myDonators) => {
            this.myDonators = myDonators;
            this.myDonators = this.myDonators.sort((a, b) => {
              return this.totalDonation(b) - this.totalDonation(a);
            });
            this.showListDonators = false;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },

    getSubscribers(max = 7) {
      this.showListSuscribers = this.mySubscribersYT.length == 0;
      this.mySubscribersYT = [];
      if (this.showListSuscribers) {
        var api = this.$store.state.URL + "/channels/mySubscribersYT/" + max;
        this.axios
          .get(api)
          .then((response) => {
            if (response.data == null) {
              console.log("Error");
            }
            return response.data.mySubscribers;
          })
          .then((mySubscribers) => {
            this.mySubscribersYT = mySubscribers;
            this.showListSuscribers = false;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },

    getFollowers(max = 7) {
      this.showListFollowes = this.myFollowersTwitch.length == 0;
      this.myFollowersTwitch = [];
      if (this.showListFollowes) {
        var api = this.$store.state.URL + "/channels/myFollowTwitch/" + max;
        this.axios
          .get(api)
          .then((response) => {
            if (response.data == null) {
              console.log("Error");
            }
            return response.data.myFollowers;
          })
          .then((myFollowers) => {
            this.myFollowersTwitch = myFollowers;
            this.showListFollowes = false;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },

    getMyServerMC() {
      this.servers = [];
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
          var servers = data.servers;
          for (var i = 0; i < servers.length; i++) {
            var server = {};
            server.pc = servers[i].hostname;

            if (servers[i].online && servers[i].players) {
              server.players =
                servers[i].players.online + " / " + servers[i].players.max;
            }

            server.img = servers[i].icon;
            server.name = servers[i].nameServer;
            server.online = servers[i].online;
            server.nameRange = servers[i].nameRange;
            server.discord = servers[i].discord;
            this.servers.push(server);
          }
          this.servers = this.servers.sort(function (a, b) {
            return a.name.localeCompare(b.name);
          });
          this.loadingServers = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getDiscord();
    this.getMyChannel();
    this.$socket.connect();
    // this.getTexturePack();
    // this.axios
    //   .get("https://discord.com/api/v8/guilds/747586757888835655?with_counts=true", {
    //     headers: {

    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     return response.data;
    //   })
    //   .then((data) => {})
    //   .catch((e) => {
    //     console.log(e);
    //   });
  },
};
</script>


<style>
.toogleEmoji .theme--light.v-label {
  color: white !important;
  font-weight: bold;
}

.toogleEmoji .toggle {
  width: 300px;
  margin: 0px auto;
  border: 3px solid red;
  padding: 5px;
  border-radius: 10px;
  animation: latidos 5.5s infinite;
  /* cursor: pointer; */
}

.toogleEmoji .toggle.enable {
  border-color: #4caf50 !important;
}

.toogleEmoji .v-input--switch__track {
  color: white !important;
}

@media (max-width: 600px) {
  .toogleEmoji .toggle {
    width: auto !important;
    margin: 0px auto;
  }
}

@keyframes latidos {
  from {
    padding: none;
  }
  50% {
    transform: scale(0.9);
  }
  to {
    transform: none;
  }
}
</style>