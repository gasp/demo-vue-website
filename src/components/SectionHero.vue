<template>
  <section>
    <BlockWidth>
      <div id="illus">
        <img
          alt="Localisation écoresponsable des bureaux"
          width="1407"
          height="696"
          src="../assets/vev-illu-home.svg"
          svg-inline=""
        />
      </div>
      <div class="line">
        <div class="col">
          <p class="lead">Emplacement de vos bureaux</p>
          <h2>Optez pour une <strong>localisation écoresponsable</strong></h2>
          <p>
            La localisation écoresponsable contribue à la fois à la prospérité
            de l’entreprise, au bien-être des employés, à la collectivité et à
            l’environnement. Elle est un excellent moyen de se distinguer pour
            attirer les meilleurs talents.
          </p>
        </div>
        <div class="col">
          <div class="eval">
            <p>Une évaluation gratuite et confidentielle en quelques minutes</p>
            <div>
              <input
                type="text"
                name=""
                value=""
                placeholder="votre adresse email"
              />
              <button class="btn btn-primary">Évaluer</button>
            </div>
          </div>
        </div>
      </div>
    </BlockWidth>
  </section>
</template>

<style lang="stylus" scoped>
section
  background-color #effbfb
  padding-top 10vh
  padding-bottom 10vh
  display block
  position relative
  outline none

  .line
    z-index 2
    display grid
    grid-template-columns repeat(3, 1fr)
    grid-template-rows 1fr
    grid-column-gap 2em
    grid-row-gap 2em
    .col
      .lead
        font-size 24px
        font-weight bold
      h2
        font-size 48px
        font-weight regular
      .eval
        width 20vw
        background-color #fff
        border-radius 5px
        padding 2em
        p
          fonts-size 24px
          font-weight bold
  #illus
    pointer-events none
    position absolute
    bottom 0
    left 0
    display block
    width 100%
    height 100%
    z-index 1
    img
      min-width 100vmax
      bottom -10vh
      left 50%
      width auto
      max-width 100%
      height auto
      max-height 90%
      // transform translate(-50%)
</style>

<script lang="ts">
import { defineComponent } from "vue";
import BlockWidth from "@/components/BlockWidth.vue";

export default defineComponent({
  name: "SectionHero",
  components: {
    BlockWidth,
  },
});
</script>
