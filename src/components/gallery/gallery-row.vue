<template>
  <p class="base-text-gallery">
    Keeping a well-maintained vehicle is paramount to your
    safety. That is why our team of nearly 500 professional
    technicians are ready to make your vehicle safe and
  </p>
  <div class="gallery-row-metka">
    <gallery-metka
      v-for="dataset in metka"
      :key="dataset.id"
      :text="dataset.text"
    />
  </div>
  <div class="gallery-row-img">
    <gallery-img-block
      v-for="dataset in galleryImg"
      :key="dataset.id"
      :img="dataset"
    />
  </div>
  <base-pagination class="pagination-gallery" />
</template>

<script lang="ts">
import GalleryMetka from "@/components/gallery/base/gallery-metka.vue";
import GalleryImgBlock from "@/components/gallery/base/gallery-img-block.vue";
import BasePagination from "@/components/base/base-pagination.vue";
export default {
  name: "gallery-row",
  components: {
    BasePagination,
    GalleryImgBlock,
    GalleryMetka
  },
  data() {
    return {
      metka: [
        { id: 1, text: "all" },
        { id: 2, text: "Clean" },
        { id: 3, text: "Mechanic" },
        { id: 4, text: "Engine" }
      ],
      galleryImg: [
        {
          id: 1,
          src: require("@/assets/img/gallery/gallery.png"),
          alt: "gallery"
        },
        {
          id: 2,
          src: require("@/assets/img/gallery/gallery.png"),
          alt: "gallery"
        },
        {
          id: 3,
          src: require("@/assets/img/gallery/gallery.png"),
          alt: "gallery"
        },
        {
          id: 4,
          src: require("@/assets/img/gallery/gallery.png"),
          alt: "gallery"
        }
      ]
    };
  }
};
</script>
<style lang="sass">
.gallery-row-metka
  +my-rem(30px)
  +row()
  +justify-content-center()
.gallery-row-img
  +row-no-gutters()
  +mb-rem(20px)
.pagination-gallery
  +justify-content-center()
</style>
