<template>
  <div class="about-block-advantage">
    <div class="about-block-advantage-svg">
      <base-svg :data="data.svg" />
    </div>
    <h3 class="about-block-advantage-title">
      {{ data.title }}
    </h3>
    <base-text class="about-block-advantage-text">{{
      data.text
    }}</base-text>
    <router-link
      :to="'/' + data.id"
      class="about-block-advantage-link"
      >Read More</router-link
    >
  </div>
</template>

<script lang="ts">
import BaseSvg from "@/components/base/base-svg.vue";
import BaseText from "@/components/base/base-text.vue";
export default {
  name: "about-block-advantage",
  components: { BaseText, BaseSvg },
  props: {
    data: {
      request: true,
      type: Object
    }
  }
};
</script>

<style lang="sass">
#svg-data
  fill: #fff
.about-block-advantage
  +col()
  +size-off(3)
.about-block-advantage-svg
  max-width: 100px
  +py-rem(15px)
  +px-rem(15px)
  +mb-rem(20px)
  border: 1px solid var(--color-filter-blog)
  &:hover
    background-color: var(--color-red)
    .svg-data
      fill: #fff
.about-block-advantage-title
  +fz-rem(18px)
  +lh-rem(25px)
  font-weight: 700
  color: var(--header-bg)
  +mb-rem(20px)
.about-block-advantage-text
  +lh-rem(25px)
  +mb-rem(15px)
.about-block-advantage-link
  text-decoration: none
  color: var(--color-blog-link)
  +fz-rem(13px)
  font-weight: 600
  +lh-rem(25px)
  &:hover
    color: var(--color-red)
</style>
