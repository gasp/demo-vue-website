<template>
  <BlockWidth>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <div class="spacer"></div>
      <router-link to="/order">Order</router-link>
    </nav>
  </BlockWidth>
</template>

<style lang="stylus" scoped>
nav
  display flex
  flex-direction row
  flex-wrap nowrap
  justify-content flex-start
  align-content stretch
  align-items flex-start

  background-color #fff
  padding 1rem

  .spacer
    flex 1
  a
    display block
    margin-right 2rem
    order 0
    flex 0 1 auto
    align-self flex-start
    color #007bff
</style>

<script lang="ts">
import { defineComponent } from "vue";
import BlockWidth from "@/components/BlockWidth.vue";

export default defineComponent({
  name: "HeaderMenu",
  components: {
    BlockWidth,
  },
});
</script>
