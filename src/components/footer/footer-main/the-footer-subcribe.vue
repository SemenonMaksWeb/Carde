<template>
  <div class="footer-subcribe footer-blogs">
    <footer-title class="footer-title-subcribe"
      >Subcribe</footer-title
    >
    <p class="footer-subcribe-text">
      Subcribe now and get all the latest news instantly
    </p>
    <footer-input-subcribe />
  </div>
</template>

<script lang="ts">
import FooterTitle from "@/components/footer/footer-base/footer-title.vue";
import FooterInputSubcribe from "@/components/footer/footer-base/footer-subcribe-input.vue";
export default {
  name: "the-footer-subcribe",
  components: { FooterInputSubcribe, FooterTitle }
};
</script>

<style lang="sass">
.footer-subcribe
    +mt-rem(15px)
.footer-subcribe-text
    color: var(--text-footer)
    +fz-rem(13px)
    +mb-rem(15px)
.footer-title-subcribe
    +mb-rem(15px)
</style>
