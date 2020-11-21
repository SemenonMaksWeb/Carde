<template>
  <base-section>
    <about-row></about-row>
  </base-section>
</template>

<script lang="ts">
import BaseSection from "@/components/base/base-section.vue";
import AboutRow from "@/components/about/base/about-row.vue";
export default {
  name: "page-about",
  components: { AboutRow, BaseSection }
};
</script>

<style lang="sass"></style>
