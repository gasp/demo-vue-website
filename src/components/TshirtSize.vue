<template>
  <div class="list">
    <div
      v-for="(size, index) in sizes"
      @click="selected = index"
      class="size"
      :class="{ active: selected === index }"
      :key="index"
    >
      {{ size }}
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.list
  display flex
  flex-direction row
  flex-wrap nowrap
  justify-content flex-start
  align-content stretch
  align-items flex-start

  background-color #fff
  padding 1rem

  .size
    display block
    margin-right 1rem
    order 0
    flex 0 1 auto
    align-self flex-start
    color #007bff
    border 1px solid #007bff
    background-color #e1edfa
    padding .7rem 1rem
    border-radius 1rem
    text-transform uppercase
    cursor pointer
    &:hover
      background-color #c4dbf4
    &.active
      background-color #8bd5ee
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderView",
  methods: {
    select(n: number) {
      this.selected = n;
    },
  },
  data() {
    return {
      sizes: ["xxs", "xs", "s", "m", "l", "xl", "xxl", "3xl"],
      selected: -1,
    };
  },
});
</script>
