<template>
  <div class="footer-links footer-blogs">
    <footer-title>Quick Links</footer-title>
    <div class="blogs-footer-links">
      <footer-link
        v-for="dataset in FooterLinks"
        :key="dataset.id"
        :link="dataset"
      />
    </div>
  </div>
</template>

<script lang="ts">
import FooterTitle from "@/components/footer/footer-base/footer-title.vue";
import FooterLink from "@/components/footer/footer-base/footer-link.vue";
export default {
  name: "the-footer-links",
  components: { FooterLink, FooterTitle },
  data() {
    return {
      FooterLinks: [
        { id: 1, to: "", text: "About us" },
        { id: 2, to: "", text: "Shortcode" },
        { id: 3, to: "", text: "Cobtact us" },
        { id: 4, to: "", text: "Portfolio" },
        { id: 5, to: "", text: "Our service" },
        { id: 6, to: "", text: "Attorneys" },
        { id: 7, to: "", text: "FAQ" }
      ]
    };
  }
};
</script>

<style lang="sass">
.footer-links
</style>

<!--Text: About us Shortcode Cobtact us Portfolio Our service Attorneys FAQ;-->
