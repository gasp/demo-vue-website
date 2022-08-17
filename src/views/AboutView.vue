<template>
  <div class="about">
    <section class="us">
      <BlockWidth>
        <h1>Who we are</h1>
        <img alt="Vue logo" src="../assets/logo.png" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </BlockWidth>
    </section>
  </div>
</template>

<style lang="stylus" scoped>
.about
  .us
    background-color #fbefef
</style>

<script lang="ts">
import { defineComponent } from "vue";
import BlockWidth from "@/components/BlockWidth.vue";

export default defineComponent({
  name: "AboutView",
  components: {
    BlockWidth,
  },
});
</script>
