<template>
  <service-section-description />
  <service-section-all />
  <about-section-proposal />
</template>

<script lang="ts">
import ServiceSectionDescription from "@/components/service/service-section-description.vue";
import ServiceSectionAll from "@/components/service/service-section-all.vue";
import AboutSectionProposal from "@/components/about/about-section-proposal.vue";
export default {
  name: "service-row",
  components: {
    AboutSectionProposal,
    ServiceSectionAll,
    ServiceSectionDescription
  }
};
</script>
<style lang="sass"></style>
