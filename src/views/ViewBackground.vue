<template>
    <BackgroundRandom />
</template>

<script>
import BackgroundRandom from "@/components/BackgroundRandom.vue";
export default {
  name: "ViewBackground",
  components: {},
  data: () => ({
  }),
  components: {
    BackgroundRandom
  },
  mounted(){
    document.body.className  = 'hideScrollY';
  },
};
</script>