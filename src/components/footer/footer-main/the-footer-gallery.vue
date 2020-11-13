<template>
  <div class="footer-gallery footer-blogs">
    <footer-title>Gallery</footer-title>
    <div class="blog-footer-gallery">
      <footer-gallery
        v-for="dataset in FooterGallery"
        :key="dataset.id"
        :gallery="dataset"
      >
      </footer-gallery>
    </div>
  </div>
</template>

<script lang="ts">
import FooterTitle from "@/components/footer/footer-base/footer-title.vue";
import FooterGallery from "@/components/footer/footer-base/footer-gallery.vue";
export default {
  name: "the-footer-gallery",
  components: { FooterGallery, FooterTitle },
  data() {
    return {
      FooterGallery: [
        {
          id: 1,
          src: require("@/assets/img/gallery/gallery_id1_1.png"),
          alt: "изображение"
        },
        {
          id: 2,
          src: require("@/assets/img/gallery/gallery_id1_1.png"),
          alt: "изображение"
        },
        {
          id: 3,
          src: require("@/assets/img/gallery/gallery_id1_1.png"),
          alt: "изображение"
        },
        {
          id: 4,
          src: require("@/assets/img/gallery/gallery_id1_1.png"),
          alt: "изображение"
        },
        {
          id: 5,
          src: require("@/assets/img/gallery/gallery_id1_1.png"),
          alt: "изображение"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.footer-gallery
  +mt-rem(25px)
  +mt-sm-rem(0px)
  +mr-lg-px(0px)
  +mr-px(35px)
.blog-footer-gallery
    //+d-flex()
    +row-no-gutters()
</style>
