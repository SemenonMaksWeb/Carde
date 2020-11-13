<template>
  <object type="image/svg+xml" :data="data" />
</template>

<script lang="ts">
export default {
  name: "base-svg",
  props: {
    data: {
      type: String,
      request: true
    }
  }
};
</script>

<style lang="sass">
object
    width: 100%
    height: auto
#icons
  fill: red
</style>
