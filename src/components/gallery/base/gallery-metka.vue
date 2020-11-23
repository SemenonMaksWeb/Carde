<template>
  <div class="gallery-matka-block">
    {{ text }}
  </div>
</template>

<script lang="ts">
export default {
  name: "gallery-metka",
  props: {
    text: {
      type: String,
      request: true
    }
  }
};
</script>

<style lang="sass">
.gallery-matka-block
    text-transform: uppercase
    +mx-px(15px)
    border: 1px solid var(--color-border-metka)
    +px-rem(10px)
    +py-rem(10px)
    cursor: pointer
    color: var(--color-filter-blog)
    &:hover
        background-color: var(--color-red)
        color: #fff
</style>
