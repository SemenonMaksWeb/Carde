<template>
  <h4 class="filter-blog-title">
    {{ text }}
  </h4>
</template>

<script lang="ts">
export default {
  name: "filter-blog-title",
  props: {
    text: {
      type: String,
      request: true
    }
  }
};
</script>

<style lang="sass">
.filter-blog-title
  +mb-rem(32px)
  +fz-rem(24px)
  font-weight: 700
  color: var(--header-bg)
</style>
