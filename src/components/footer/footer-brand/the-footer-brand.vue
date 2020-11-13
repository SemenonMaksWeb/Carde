<template>
  <div class="the-footer-brand">
    <base-container>
      <div class="section-footer-brand">
        <footer-brand-blog
          v-for="brand in FooterBrand"
          :key="brand.id"
          :alt="brand.alt"
          :src="brand.src"
        />
      </div>
    </base-container>
  </div>
</template>

<script lang="ts">
import FooterBrandBlog from "@/components/footer/footer-brand/footer-brand-blog.vue";
import BaseContainer from "@/components/base/base-container.vue";
export default {
  data() {
    return {
      FooterBrand: [
        {
          id: 1,
          src: require("@/assets/img/brand/footer/WordPress.png"),
          alt: "WordPress"
        },
        {
          id: 2,
          src: require("@/assets/img/brand/footer/Envato.png"),
          alt: "Envato"
        },
        {
          id: 3,
          src: require("@/assets/img/brand/footer/Pixeden.png"),
          alt: "Pixeden"
        },
        {
          id: 4,
          src: require("@/assets/img/brand/footer/MailChimp.png"),
          alt: "MailChimp"
        }
      ]
    };
  },
  name: "the-footer-brand",
  components: { BaseContainer, FooterBrandBlog }
};
</script>

<style lang="sass">
.the-footer-brand
    +py-rem(13px)
    width: 100%
    background-color: var(--color-red)
.section-footer-brand
    +row()
    +align-items-center()
    +justify-content-between()
</style>
