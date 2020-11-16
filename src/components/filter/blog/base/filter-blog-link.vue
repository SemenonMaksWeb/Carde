<template>
  <router-link class="filter-blog-link" :to="link.to">
    - {{ link.text }}
  </router-link>
</template>

<script lang="ts">
export default {
  name: "filter-blog-link",
  props: {
    link: {
      type: Object,
      request: require
    }
  }
};
</script>

<style lang="sass">
.filter-blog-link
    +d-block()
    +fz-rem(14px)
    +lh-rem(49px)
    color: var(--color-filter-blog)
    text-decoration: none
</style>
