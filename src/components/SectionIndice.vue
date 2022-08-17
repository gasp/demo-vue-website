<template>
  <section>
    <BlockWidth>
      <h2>L'indice d'écoresponsabilité</h2>
      <div class="line">
        <div class="col">
          <img
            alt="Illu 1"
            width="515"
            height="370"
            src="../assets/illu-1.svg"
          />
          <CardShadow>
            <h3>Évaluation sur une échelle de 100 points</h3>
            <p>
              L'indice d'écoresponsabilité permet de valider le caractère
              écoresponsable d'un emplacement pour des activités de bureau. Il
              s’échelonne de 0&nbsp;% à 100&nbsp;%. Seuls les emplacements
              totalisant plus de 60&nbsp;% sont considérés comme
              écoresponsables.
            </p>
          </CardShadow>
        </div>
        <div class="col">
          <img
            alt="Illu 1"
            width="515"
            height="370"
            src="../assets/illu-2.svg"
          />
          <CardShadow>
            <h3>Pour les locaux existants ou les sites à bâtir</h3>
            <p>
              L’indice d'écoresponsabilité évalue aussi bien la situation
              actuelle que future de l’emplacement. Dans les milieux non bâtis,
              des points mesurent le potentiel de l’emplacement à devenir
              écoresponsable en fonction des différents projets et changements
              annoncés dans un horizon de cinq ans.
            </p>
          </CardShadow>
        </div>
        <div class="col">
          <img
            alt="Illu 1"
            width="515"
            height="370"
            src="../assets/illu-3.svg"
          />
          <CardShadow>
            <h3>Aide à la sélection du meilleur emplacement</h3>
            <p>
              L’indice d'écoresponsabilité est un outil d’aide à la décision. En
              complément des critères de sélection habituels (échéance, coût,
              superficie, etc.) et de vos besoins spécifiques, l’indice
              d’écoresponsabilité vous permet de comparer l’indice
              d’écoresponsabilité des emplacements entre lesquels vous hésitez.
            </p>
          </CardShadow>
        </div>
      </div>
    </BlockWidth>
  </section>
</template>

<style lang="stylus" scoped>
section
  .line
    display grid
    grid-template-columns repeat(3, 1fr)
    grid-template-rows 1fr
    grid-column-gap 2em
    grid-row-gap 2em
    .col
      img
        max-width 100%
</style>

<script lang="ts">
import { defineComponent } from "vue";
import CardShadow from "@/components/CardShadow.vue";
import BlockWidth from "@/components/BlockWidth.vue";
export default defineComponent({
  name: "SectionIndice",
  components: {
    CardShadow,
    BlockWidth,
  },
});
</script>
