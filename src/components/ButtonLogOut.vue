<template>
  <v-btn color="error" @click="logout()"> <v-icon>mdi-logout</v-icon> Cerrar sesión </v-btn>
</template>
<script>
export default {
    methods: {
        logout(){
            window.localStorage.removeItem("token-DiegoYance");
            window.location.href = "/login"
        }
    }
};
</script>
