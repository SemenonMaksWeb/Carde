<template>
  <div class="footer-socially footer-blogs">
    <the-logo></the-logo>
    <p class="footer-socially-text">
      Lorem Ipsum is simply dummy text of the had a printing
      and typesetting industry. Ipsum hasbeen the industry's
      printing and type seting the industry's printing and
      ting industry. Lorem Ipsum is simply dummy
    </p>
  </div>
</template>

<script lang="ts">
import TheLogo from "@/components/header/the-logo.vue";
export default {
  name: "the-footer-socially",
  components: { TheLogo }
};
</script>

<style lang="sass">
.footer-socially
  +size(12)
  +size-xs(6)
  +size-lg(3)
  //+size-md(4)
.footer-socially-text
  +mt-rem(30px)
  +lh-rem(25px)
  color: var(--text-footer)
  font-family: var(--ff-link)
  +fz-rem(13px)
</style>
