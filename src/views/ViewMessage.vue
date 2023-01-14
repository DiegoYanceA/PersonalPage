<template>
    <MessageRandom class="GamerFont"/>
</template>

<script>
import MessageRandom from "@/components/MessageRandom.vue";
export default {
  name: "ViewMessage",
  components: {},
  data: () => ({
  }),
  components: {
    MessageRandom
  },
  mounted(){
    document.body.className  = 'hideScrollY';
  },
};
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@600&display=swap');
.GamerFont{
    /* font-family: 'Gamer', Times, serif; */
    font-family: 'Dosis', cursive;
    font-size: 23px;
    /* color: black !important */
}
</style>