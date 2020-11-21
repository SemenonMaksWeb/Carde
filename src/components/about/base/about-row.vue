<template>
  <about-section-description />
  <about-section-advantage />
  <about-section-proposal></about-section-proposal>
</template>

<script lang="ts">
import AboutSectionDescription from "@/components/about/about-section-description.vue";
import AboutSectionAdvantage from "@/components/about/about-section-advantage.vue";
import AboutSectionProposal from "@/components/about/about-section-proposal.vue";

export default {
  components: {
    AboutSectionProposal,
    AboutSectionAdvantage,
    AboutSectionDescription
  }
};
</script>

<style lang="sass"></style>
