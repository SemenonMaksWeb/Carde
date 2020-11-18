<template>
  <h3 class="base-title"><slot></slot></h3>
</template>

<script lang="ts">
export default {
  name: "base-title"
};
</script>

<style lang="sass">
.base-title
    +mb-rem(20px)
    +fz-rem(24px)
    +lh-rem(23px)
    font-weight: 700
    color: var(--header-bg)
</style>
