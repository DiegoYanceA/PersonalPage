<template>
  <div>
    <img class="heightFull" style="display:block;margin-right:auto;margin-left: auto" :src="$store.state.emoji" />
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
  .heightFull{
    height: 100vh;
    width: auto;
  }
</style>
