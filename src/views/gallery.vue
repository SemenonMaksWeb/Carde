<template>
  <base-container>
    <base-section>
      <gallery-row></gallery-row>
    </base-section>
  </base-container>
</template>

<script lang="ts">
import BaseSection from "@/components/base/base-section.vue";
import BaseContainer from "@/components/base/base-container.vue";
import GalleryRow from "@/components/gallery/gallery-row.vue";
export default {
  name: "page-gallery",
  components: { GalleryRow, BaseContainer, BaseSection }
};
</script>

<style lang="sass">
.base-text-gallery
    color: var(--color-blog-link)
    font-weight: 600
    +size-off-lg(6)
    +size-off(8)
    +fz-rem(15px)
    margin: 0 auto
    +lh-rem(26px)
    text-align: center
</style>
