<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "base-container"
};
</script>

<style lang="sass">
.container
    +container()
</style>
