<template>
  <base-container>
    <base-section>
      <contact-row></contact-row>
    </base-section>
  </base-container>
</template>

<script lang="ts">
import BaseContainer from "@/components/base/base-container.vue";
import BaseSection from "@/components/base/base-section.vue";
import ContactRow from "@/components/contact/contact-row.vue";
export default {
  name: "page-contact",
  components: { ContactRow, BaseSection, BaseContainer }
};
</script>

<style lang="sass"></style>
