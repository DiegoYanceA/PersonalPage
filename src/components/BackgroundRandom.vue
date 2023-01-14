<template>
  <div>
    <img onerror="this.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6169b41c-74fe-4235-9815-1e8d4dc87406/d3hgxl4-a6d413df-c24f-4077-b1d2-8765659ef170.png/v1/fill/w_900,h_800,strp/png_fondo_blanco_by_camilhitha124_d3hgxl4-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvNjE2OWI0MWMtNzRmZS00MjM1LTk4MTUtMWU4ZDRkYzg3NDA2XC9kM2hneGw0LWE2ZDQxM2RmLWMyNGYtNDA3Ny1iMWQyLTg3NjU2NTllZjE3MC5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.cqTa97iqaSe0PxJFnP1-_DyuUqhlBsPnj9Yy5b3abZg'" class="heightFullBackground" style="display:block;margin-right:auto;margin-left: auto" :src="$store.state.background" />
  </div>
</template>

<script>

export default {
  mounted(){
    this.$socket.connect();
  },
};
</script>

<style>
  .heightFullBackground{
    height: 100vh;
    width: 100%;
  }
</style>
