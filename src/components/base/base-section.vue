<template>
  <section class="base-section">
    <slot></slot>
  </section>
</template>

<script lang="ts">
export default {
  name: "base-section"
};
</script>

<style lang="sass">
.base-section
    +py-rem(80px)
</style>
