<template>
    <EmojiRandom />
</template>

<script>
import EmojiRandom from "@/components/EmojiRandom.vue";
export default {
  name: "ViewEmoji",
  components: {},
  data: () => ({
  }),
  components: {
    EmojiRandom
  },
  mounted(){
    document.body.className  = 'hideScrollY';
  },
};
</script>