<template>
  <the-footer-brand />
  <the-footer-main />
</template>

<script lang="ts">
import TheFooterBrand from "@/components/footer/footer-brand/the-footer-brand.vue";
import TheFooterMain from "@/components/footer/footer-main/the-footer-main.vue";
export default {
  name: "the-footer",
  components: { TheFooterMain, TheFooterBrand }
};
</script>

<style></style>
