<template>
  <base-section>
    <service-row />
  </base-section>
</template>

<script lang="ts">
import BaseSection from "@/components/base/base-section.vue";
import ServiceRow from "@/components/service/base/service-row.vue";
export default {
  name: "page-service",
  components: { ServiceRow, BaseSection }
};
</script>

<style lang="sass"></style>
