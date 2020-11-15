<template>
  <footer class="footer-main">
    <base-container>
      <section class="section-footer-main">
        <the-footer-socially />
        <the-footer-last-news></the-footer-last-news>
        <the-footer-links></the-footer-links>
        <div>
          <the-footer-gallery></the-footer-gallery>
          <the-footer-subcribe></the-footer-subcribe>
        </div>
      </section>
    </base-container>
  </footer>
</template>

<script lang="ts">
import TheFooterSocially from "@/components/footer/footer-main/the-footer-socially.vue";
import BaseContainer from "@/components/base/base-container.vue";
import TheFooterLastNews from "@/components/footer/footer-main/the-footer-last-news.vue";
import TheFooterLinks from "@/components/footer/footer-main/the-footer-links.vue";
import TheFooterGallery from "@/components/footer/footer-main/the-footer-gallery.vue";
import TheFooterSubcribe from "@/components/footer/footer-main/the-footer-subcribe.vue";
export default {
  name: "the-footer-main",
  components: {
    TheFooterSubcribe,
    TheFooterGallery,
    TheFooterLinks,
    TheFooterLastNews,
    BaseContainer,
    TheFooterSocially
  }
};
</script>

<style lang="sass">
.footer-main
    +py-rem(30px)
    +py-sm-rem(80px)
    background-color: var(--bg-footer)
.section-footer-main
  +row()
  +flex-sm-row()
  +justify-content-between()
  +mx-px(-15px)
.footer-blogs
  +col(30px)
  +col-sm(15px)
</style>
