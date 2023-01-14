<template>
  <v-app>
    <v-container class="d-flex align-center" style="height: 100vh">
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="7" md="6" lg="4">
          <v-form v-model="valid" ref="form">
            <v-container>
              <v-row>
                <v-col class="text-center">
                  <h2>😎 Login facherito 😎</h2>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    autocomplete="off"
                    v-model="username"
                    :rules="nameRules"
                    @keyup.enter="submit()"
                    :counter="20"
                    label="Usuario"
                    maxlength="20"
                    required
                    solo
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    :type="typePassword"
                    v-model="password"
                    :rules="nameRules"
                    @keyup.enter="submit()"
                    :counter="20"
                    maxlength="20"
                    label="Contraseña"
                    required
                    solo
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="togglePassword()"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-btn block color="primary" @click="submit()">
                    Ingresar <v-icon>mdi-login</v-icon>
                  </v-btn>
                  <p class="caption mt-2">
                    Si no eres facherito(a), ¿Que haces aquí? <a href="/">chau</a>
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-col>
      </v-row>
      <v-snackbar top v-model="messageShow" timeout="5000">
        {{message}}
        
        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="messageShow = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data: () => ({
    valid: true,
    username: "",
    password: "",
    showPassword: false,
    typePassword: "password",
    message: null,
    messageShow: false,
    nameRules: [
      (v) => !!v || "Este campo es requerido causa",
      (v) => 5 < v.length || "Debe tener más de 5 caracateres",
    ],
  }),
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
      this.typePassword = this.showPassword ? "text" : "password";
    },
    async submit() {
      var api = this.$store.state.URL + "/auth/signin";
      var validForm = this.$refs.form.validate();
      if(validForm){
        try{
          var response = await this.axios.post(api,{
            username: this.username.trim(),
            password: this.password.trim()
          })

          if(response && response.data){
            var data = response.data;
            if(data.auth){
              if(data.rol = "ADMIN"){
                window.location.href = "/home/admin";
              } else if (data.rol = "MOD"){
                window.location.href = "/home/mod";
              } else {
                window.location.href = "/login";
              }
              
              var token = response.data.token;
              window.localStorage.setItem("token-DiegoYance", token);
            } else if (response.data.msg != ""){
              this.message = response.data.msg;
              this.messageShow = true;
            }
            
          }
        } catch(e){
          this.message = "Comunicate con DiegoYance"
        }
      } 
    },
  },
};
</script>