<template>
  <div class="contact-input-title"><slot></slot></div>
</template>

<script lang="ts">
export default {
  name: "contact-input-title"
};
</script>

<style lang="sass">
.contact-input-title
    +fz-rem(14px)
    +lh-rem(33px)
    color: #000000
    +mb-rem(8px)
</style>
