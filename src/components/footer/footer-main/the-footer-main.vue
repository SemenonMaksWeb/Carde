<template>
  <footer class="footer-main">
    <base-container>
      <section class="section-footer-main">
        <the-footer-socially />
        <blog-last-news
          NameComponents="BlogNewsBlock"
          class="footer-blogs footer-last-news"
        >
          <template #title>
            <footer-title>Latest News</footer-title>
          </template>
        </blog-last-news>
        <the-footer-links />
        <div>
          <the-footer-gallery />
          <the-footer-subcribe />
        </div>
      </section>
    </base-container>
  </footer>
</template>

<script lang="ts">
import TheFooterSocially from "@/components/footer/footer-main/the-footer-socially.vue";
import BaseContainer from "@/components/base/base-container.vue";
import TheFooterLinks from "@/components/footer/footer-main/the-footer-links.vue";
import TheFooterGallery from "@/components/footer/footer-main/the-footer-gallery.vue";
import TheFooterSubcribe from "@/components/footer/footer-main/the-footer-subcribe.vue";
import FooterTitle from "@/components/footer/footer-base/footer-title.vue";
import BlogLastNews from "@/components/blog/last-blog/blog-last-news.vue";
export default {
  name: "the-footer-main",
  components: {
    BlogLastNews,
    FooterTitle,
    TheFooterSubcribe,
    TheFooterGallery,
    TheFooterLinks,
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
  +row-no-gutters()
  +flex-sm-row()
  +justify-content-between()
  +mx-px(-15px)
.footer-blogs
  +col(30px)
  +col-sm(15px)
.footer-last-news
  +size-sm(4) // lg
  +size(12)
</style>
