<template>
  <div class="CardShadow">
    <slot></slot>
  </div>
</template>

<style lang="stylus" scoped>
.CardShadow
  padding 2em
  background-color #fff
  border-radius 0.425em
  box-shadow 0 0 40px 0 rgba(0, 0, 0, .2)
</style>
