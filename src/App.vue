<template>
  <FormStyle />
  <HeaderMenu />
  <main>
    <router-view />
  </main>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderMenu from "@/components/HeaderMenu.vue"; // @ is an alias to /src
import FormStyle from "@/components/FormStyle.vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderMenu,
    FormStyle,
  },
});
</script>
