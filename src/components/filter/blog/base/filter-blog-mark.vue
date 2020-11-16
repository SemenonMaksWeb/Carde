<template>
  <router-link class="filter-blog-mark" :to="mark.to">
    {{ mark.text }}
  </router-link>
</template>

<script lang="ts">
export default {
  name: "filter-blog-mark-block",
  props: {
    mark: {
      type: Object,
      request: true
    }
  }
};
</script>

<style lang="sass">
.filter-blog-mark
    +mx-px(5px)
    +px-rem(15px)
    +py-rem(10px)
    +mb-rem(10px)
    text-decoration: none
    background-color: var(--color-mark)
    color: #fff
    &:hover
        background-color: var(--color-red)
</style>
