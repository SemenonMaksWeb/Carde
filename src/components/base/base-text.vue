<template>
  <p class="base-text"><slot></slot></p>
</template>

<script lang="ts">
export default {
  name: "base-text"
};
</script>

<style lang="sass">
.base-text
    font-family: var(--ff-body)
    +fz-rem(14px)
    font-weight: 400
    color: var(--color-filter-blog)
</style>
