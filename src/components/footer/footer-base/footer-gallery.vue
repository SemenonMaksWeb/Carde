<template>
  <div class="footer-gallery-img">
    <img :src="gallery.src" :alt="gallery.alt" />
  </div>
</template>

<script lang="ts">
export default {
  name: "footer-gallery",
  props: {
    gallery: {
      type: Object,
      request: true
    }
  }
};
</script>

<style lang="sass">
.footer-gallery-img
    +mr-rem(10px)
    &:last-child
        +mr-rem(0px)
</style>
