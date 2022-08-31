<template>
  <form class="">
    <div class="order">
      <section class="hero">
        <BlockWidth>
          <h1>Order form</h1>
          <p>
            Let's check click accurancy. Please fill this very long form and use
            your mouse to click on things so that we can check the accurancy of
            click detection
          </p>
          <div class="form-group">
            <label for="fname" class="form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              id="fname"
              placeholder="Jane"
            />
          </div>
          <div class="form-group">
            <label for="lname" class="form-label">Last name</label>
            <input
              type="text"
              class="form-control"
              id="lname"
              placeholder="Doe"
            />
          </div>
          <div class="form-group">
            <label for="email" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="fname"
              placeholder="jane@doe.com"
            />
          </div>
        </BlockWidth>
      </section>
      <section>
        <BlockWidth>
          <div class="form-group">
            <label>Choose your T-shirt size</label>
            <TshirtSize />
          </div>
        </BlockWidth>
      </section>
      <section>
        <BlockWidth>
          <div class="form-group">
            <label>Where should we ship it?</label>
            <CountryChooser />
          </div>
        </BlockWidth>
      </section>
      <section class="bottom">
        <BlockWidth>
          <div class="form-group">
            <label>
              <input type="checkbox" />
              Please tick this box*
            </label>
          </div>
          <div class="form-group mt-1">
            <button>Submit the form</button>
          </div>
        </BlockWidth>
      </section>
    </div>
  </form>
</template>

<style lang="stylus" scoped>
.order
  .hero
    background-color #fbefef
    padding .5rem 0
  .bottom
    background-color #f1fbef
    padding .5rem 0
section
  margin 1rem 0
  label
    padding .5rem 0 0 0
.mt-1
  margin-top 1rem
</style>

<script lang="ts">
import { defineComponent } from "vue";
import BlockWidth from "@/components/BlockWidth.vue";
import TshirtSize from "@/components/TshirtSize.vue";
import CountryChooser from "@/components/CountryChooser.vue";

export default defineComponent({
  name: "OrderView",
  components: {
    BlockWidth,
    TshirtSize,
    CountryChooser,
  },
});
</script>
