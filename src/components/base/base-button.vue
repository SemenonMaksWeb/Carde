<template>
  <button v-bind="$attrs" class="base-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "base-button"
};
</script>

<style lang="sass">
.base-button
    cursor: pointer
    background-color: var(--color-red)
    +px-rem(30px)
    +py-rem(15px)
    color: #fff
</style>
